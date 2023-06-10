import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';

@InputType()
export class MovieRelationFilter {

    @Field(() => MovieWhereInput, {nullable:true})
    is?: MovieWhereInput;

    @Field(() => MovieWhereInput, {nullable:true})
    isNot?: MovieWhereInput;
}
