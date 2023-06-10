import { Module } from '@nestjs/common';
import { MoviesService } from '~/movies/movies.service';
import { MoviesResolver } from './movies.resolver';

@Module({
  controllers: [],
  providers: [MoviesService, MoviesResolver]
})
export class MoviesModule {}
