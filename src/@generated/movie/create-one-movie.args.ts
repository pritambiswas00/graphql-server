import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieCreateInput } from './movie-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMovieArgs {

    @Field(() => MovieCreateInput, {nullable:false})
    @Type(() => MovieCreateInput)
    data!: MovieCreateInput;
}
