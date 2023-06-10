import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';

@InputType()
export class MovieListRelationFilter {

    @Field(() => MovieWhereInput, {nullable:true})
    every?: MovieWhereInput;

    @Field(() => MovieWhereInput, {nullable:true})
    some?: MovieWhereInput;

    @Field(() => MovieWhereInput, {nullable:true})
    none?: MovieWhereInput;
}
