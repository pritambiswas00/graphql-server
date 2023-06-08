import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateOneMovieArgs } from '~/@generated/movie/create-one-movie.args';
import { FindManyMovieArgs } from '~/@generated/movie/find-many-movie.args';
import { MovieCreateInput } from '~/@generated/movie/movie-create.input';
import { MovieUpdateInput } from '~/@generated/movie/movie-update.input';
import { MovieWhereUniqueInput } from '~/@generated/movie/movie-where-unique.input';
import { UpdateOneMovieArgs } from '~/@generated/movie/update-one-movie.args';
import { DatabaseService } from '~/DataBase/database.service';

@Injectable()
export class MoviesService {
    constructor(private readonly dataBaseService: DatabaseService) { }

    public async findAllMovies(searchQuery: FindManyMovieArgs): Promise<Movie[]> {
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

    public async findMovie(query:MovieWhereUniqueInput): Promise<Movie> {
        try {
            
            return await this.dataBaseService.movie.findUnique({
                where: {
                    id: query.id,
                    movieName: query.movieName
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    public async createMovie(movie: MovieCreateInput): Promise<Movie> {
          try{
              const newMovie = await this.dataBaseService.movie.create({
                  data: {
                     movieName: movie.movieName.toLowerCase(),
                     description: movie.description,
                     director: movie.director,
                     releaseDate: movie.releaseDate,
                  }
              });
              if(newMovie) return newMovie;
              else new Error("Movie Name already exists" );
          }catch(error) {
              console.log(error?.message, "Message")
              throw error;
          }
    }

    public async updateMovie(searchInput: MovieWhereUniqueInput, movie: MovieUpdateInput): Promise<Movie> {
        try {
            const updatedMovie = await this.dataBaseService.movie.update({
              where: {
                id: searchInput.id,
                movieName: searchInput.movieName,
              },
              data: movie,
            });
            return updatedMovie;
          } catch (error) {
            throw new Error('Database error occurred: ' + error.message);
          }        
    }

    public async deleteMovie(searchInput: MovieWhereUniqueInput): Promise<Movie> {
          try{
              return this.dataBaseService.movie.delete({
                  where: {
                      id: searchInput.id,
                      movieName: searchInput.movieName
                  }
              })
          }catch(error) {
               throw new Error('Database error occurred: ' + error.message);
          }
    }

}
