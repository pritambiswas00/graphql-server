import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieUpdateInput } from './movie-update.input';
import { Type } from 'class-transformer';
import { MovieWhereUniqueInput } from './movie-where-unique.input';

@ArgsType()
export class UpdateOneMovieArgs {

    @Field(() => MovieUpdateInput, {nullable:false})
    @Type(() => MovieUpdateInput)
    data!: MovieUpdateInput;

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;
}
