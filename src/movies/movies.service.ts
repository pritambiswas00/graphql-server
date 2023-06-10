import { Injectable } from '@nestjs/common';
import { Movie, User } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { CreateOneMovieArgs } from '~/@generated/movie/create-one-movie.args';
import { FindManyMovieArgs } from '~/@generated/movie/find-many-movie.args';
import { MovieCreateInput } from '~/@generated/movie/movie-create.input';
import { MovieUncheckedUpdateWithoutUserInput } from '~/@generated/movie/movie-unchecked-update-without-user.input';
import { MovieUpdateInput } from '~/@generated/movie/movie-update.input';
import { MovieWhereUniqueInput } from '~/@generated/movie/movie-where-unique.input';
import { DatabaseService } from '~/DataBase/database.service';

@Injectable()
export class MoviesService {
    constructor(private readonly dataBaseService: DatabaseService) { }

    public async findAllMovies(user: User, searchQuery: FindManyMovieArgs): Promise<Movie[]> {
        try {
            const { page, limit, orderBy, where } = searchQuery;
            const skip = (page - 1) * limit;
            return await this.dataBaseService.movie.findMany({
                skip: skip,
                take: limit,
                orderBy: orderBy,
                where: where,
                include: {
                    reviews: true,
                    user: true
                }
            });
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    public async findMovie(query: MovieWhereUniqueInput): Promise<Movie> {
        try {

            return await this.dataBaseService.movie.findUnique({
                where: {
                    id: query.id,
                    movieName: query.movieName
                },
                include: {
                    reviews: true,
                    user: true
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    public async createMovie(currrentUser: User, movie: MovieCreateInput): Promise<Movie> {
        try {
            const isMovieExist = await this.dataBaseService.movie.findFirst({
                where: {
                    movieName: movie.movieName.toLowerCase()
                }
            });
            if (isMovieExist) throw new Error("Movie Name already exists");
            const newMovie = await this.dataBaseService.movie.create({
                data: {
                    movieName: movie.movieName.toLowerCase(),
                    description: movie.description,
                    director: movie.director,
                    releaseDate: movie.releaseDate,
                    user: {
                        connect: {
                            id: currrentUser.id
                        }
                    }
                }
            });
            return newMovie;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async updateMovie(currentUser: User, searchInput: MovieWhereUniqueInput, movie: MovieUncheckedUpdateWithoutUserInput): Promise<Movie> {
        try {
            const isMovieExist = await this.dataBaseService.movie.findFirst({
                where: {
                    id: searchInput.id,
                    movieName: searchInput.movieName,
                }
            });
            if (!isMovieExist) throw new GraphQLError("Movie does not exist");
            if (currentUser.id !== isMovieExist.userId) throw new GraphQLError("You are not authorized to update this movie");
            const updatedMovie = await this.dataBaseService.movie.update({
                where: {
                    id: searchInput.id,
                    movieName: searchInput.movieName,
                },
                data: movie,
                include: {
                    reviews: true,
                }
            });
            return updatedMovie;
        } catch (error) {
            throw new GraphQLError('Database error occurred: ' + error.message);
        }
    }

    public async deleteMovie(user: User, searchInput: MovieWhereUniqueInput): Promise<Movie> {
        try {
            const isMovieExist = await this.dataBaseService.movie.findFirst({
                where: searchInput
            });
            if (!isMovieExist) throw new Error("Movie not found.");
            if (isMovieExist.userId !== user.id) throw new Error("Not Authorized to delete this Movie.");
            return this.dataBaseService.movie.delete({
                where: searchInput,
                include: {
                    reviews: true,
                    user: true
                }

            });
        } catch (error) {
            throw new Error('Database error occurred: ' + error.message);
        }
    }

}
