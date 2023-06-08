import { Module } from '@nestjs/common';
import { MoviesController } from '~/movies/movies.controller';
import { MoviesService } from '~/movies/movies.service';
import { MoviesResolver } from './movies.resolver';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesResolver]
})
export class MoviesModule {}
