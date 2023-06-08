import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateOneMovieArgs } from '~/@generated/movie/create-one-movie.args';
import { FindManyMovieArgs } from '~/@generated/movie/find-many-movie.args';
import { MovieWhereUniqueInput } from '~/@generated/movie/movie-where-unique.input';
import { UpdateOneMovieArgs } from '~/@generated/movie/update-one-movie.args';
import { DatabaseService } from '~/DataBase/database.service';
import { MovieFilter, MovieSort } from '~/movies/movies.resolver';

@Injectable()
export class MoviesService {
    constructor(private readonly dataBaseService: DatabaseService) { }

    async findAllMovies(searchQuery: FindManyMovieArgs): Promise<Movie[]> {
        try {
            const { page, limit, orderBy, where } = searchQuery;
            const skip = ( page- 1) * limit;
            return await this.dataBaseService.movie.findMany({
                skip: skip,
                take: limit,
                orderBy: orderBy,
                where: where
            });
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    async findMovieById(id: number): Promise<Movie> {
        try {
            return await this.dataBaseService.movie.findUnique({
                where: {
                    id
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    async createMovie(movie: CreateOneMovieArgs): Promise<Movie> {
          try{
              return this.dataBaseService.movie.create({
                  data: {
                     movieName: movie.data.movieName,
                     description: movie.data.description,
                     director: movie.data.director,
                     releaseDate: movie.data.releaseDate,
                  }
              })
          }catch(error) {
              console.log(error?.message, "Message")
              throw new Error(error?.message);
          }
    }

    async updateMovie(data: MovieWhereUniqueInput, movie: UpdateOneMovieArgs): Promise<Movie> {
        try {
            const updatedMovie = await this.dataBaseService.movie.update({
              where: {
                id: data.id,
              },
              data: movie.data,
            });
            return updatedMovie;
          } catch (error) {
            throw new Error('Database error occurred: ' + error.message);
          }        
    }

}
