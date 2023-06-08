import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';
import { Movie as TMovie } from '~/@generated/movie/movie.model';
import { CreateOneMovieArgs } from '~/@generated/movie/create-one-movie.args';
import { MovieWhereUniqueInput } from '~/@generated/movie/movie-where-unique.input';
import { UpdateOneMovieArgs } from '~/@generated/movie/update-one-movie.args';
import { GraphQLError } from 'graphql';
import { FindManyMovieArgs } from '~/@generated/movie/find-many-movie.args';

type SortField = 'movieName' | 'description' | 'director' | 'releaseDate';
export type SortOrder = 'asc' | 'desc';
export interface MovieFilter {
    OR: {
        movieName?: { contains: string };
        description?: { contains: string };
        director?: { contains: string };
    }[];
}
export interface MovieSort {
    [field: string]: SortOrder;
}

@Resolver(of => TMovie)
export class MoviesResolver {
    constructor(private movieService: MoviesService) { }

    @Query(returns => [TMovie])
    public async movies(
        @Args() searchQuery:FindManyMovieArgs
    ): Promise<Movie[]> {
        try {
            const movies = await this.movieService.findAllMovies(searchQuery);
            return movies;
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    @Mutation(returns => TMovie)
    async createMovie(@Args() movie: CreateOneMovieArgs): Promise<Movie> {
        try {
            return this.movieService.createMovie(movie);
        } catch (error) {
            console.log(error)
            throw new GraphQLError(error?.message);
        }
    }


    // @Query(returns => TMovie)
    // async movie(@Args("data") data:MovieWhereUniqueInput):Promise<Movie>{
    //       try{ 
    //            return this.movieService.findMovieById(data.id);
    //       }catch(error) {
    //               throw new GraphQLError(error?.message);
    //       }
    // }

    // @Mutation(returns => TMovie)
    // async updateMovie(
    //   @Args('data') data: MovieWhereUniqueInput,
    //   @Args('movie') movie: UpdateOneMovieArgs,
    // ): Promise<Movie> {
    //   try {
    //     return this.movieService.updateMovie(data, movie);
    //   } catch (error) {
    //     throw new GraphQLError(error?.message);
    //   }
    // }



}
