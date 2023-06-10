import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Type } from 'class-transformer';
import { MovieCreateWithoutReviewsInput } from './movie-create-without-reviews.input';

@InputType()
export class MovieCreateOrConnectWithoutReviewsInput {

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;

    @Field(() => MovieCreateWithoutReviewsInput, {nullable:false})
    @Type(() => MovieCreateWithoutReviewsInput)
    create!: MovieCreateWithoutReviewsInput;
}
