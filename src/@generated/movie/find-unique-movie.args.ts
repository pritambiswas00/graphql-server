import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMovieArgs {

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;
}
