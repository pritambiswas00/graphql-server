import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieCreateWithoutReviewsInput } from './movie-create-without-reviews.input';
import { Type } from 'class-transformer';
import { MovieCreateOrConnectWithoutReviewsInput } from './movie-create-or-connect-without-reviews.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';

@InputType()
export class MovieCreateNestedOneWithoutReviewsInput {

    @Field(() => MovieCreateWithoutReviewsInput, {nullable:true})
    @Type(() => MovieCreateWithoutReviewsInput)
    create?: MovieCreateWithoutReviewsInput;

    @Field(() => MovieCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => MovieCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;

    @Field(() => MovieWhereUniqueInput, {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    connect?: MovieWhereUniqueInput;
}
