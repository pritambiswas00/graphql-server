import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';
import { Movie as TMovie } from '~/@generated/movie/movie.model';
import { MovieWhereUniqueInput } from '~/@generated/movie/movie-where-unique.input';
import { GraphQLError } from 'graphql';
import { FindManyMovieArgs } from '~/@generated/movie/find-many-movie.args';
import { MovieUpdateInput } from '~/@generated/movie/movie-update.input';
import { MovieCreateInput } from '~/@generated/movie/movie-create.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '~/auth/Guards/jwt.guard';

@Resolver(of => TMovie)
export class MoviesResolver {
    constructor(private movieService: MoviesService) { }


    //Find all movies, sort, Pagination, and filter
    @Query(returns => [TMovie])
    @UseGuards(JwtAuthGuard)
    public async movies(
        @Args() searchQuery: FindManyMovieArgs
    ): Promise<Movie[]> {
        try {
            const movies = await this.movieService.findAllMovies(searchQuery);
            return movies;
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    //Search Movie based on Id and Name
    @Query(returns => TMovie)
    @UseGuards(JwtAuthGuard)
    public async movie(@Args("query") query: MovieWhereUniqueInput): Promise<Movie> {
        try {
            return this.movieService.findMovie(query);
        } catch (error) {
            if (error.code === "P2002") {
                throw new Error(`Movie with name ${query.movieName} already exists.`);
            }
            throw new Error("Failed to create a new movie.");
        }
    }

    //Create new Movie
    @Mutation(returns => TMovie)
    @UseGuards(JwtAuthGuard)
    public async createMovie(@Args("movie") movie: MovieCreateInput): Promise<Movie> {
        try {
            return this.movieService.createMovie(movie);
        } catch (error) {
            console.log(error)
            throw new GraphQLError(error?.message);
        }
    }

    //Update Movie
    @Mutation(returns => TMovie)
    @UseGuards(JwtAuthGuard)
    public async updateMovie(
        @Args("searchInput") searchInput: MovieWhereUniqueInput,
        @Args('movie') movie: MovieUpdateInput,
    ): Promise<Movie> {
        try {
            return this.movieService.updateMovie(searchInput, movie);
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    //Delete Movie
    @Mutation(returns => TMovie)
    @UseGuards(JwtAuthGuard)
    public async deleteMovie(@Args("query") query: MovieWhereUniqueInput): Promise<Movie> {
        try {
            return this.movieService.deleteMovie(query);
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }



}
