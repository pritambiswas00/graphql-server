import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieUpdateWithoutReviewsInput } from './movie-update-without-reviews.input';
import { Type } from 'class-transformer';
import { MovieCreateWithoutReviewsInput } from './movie-create-without-reviews.input';

@InputType()
export class MovieUpsertWithoutReviewsInput {

    @Field(() => MovieUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => MovieUpdateWithoutReviewsInput)
    update!: MovieUpdateWithoutReviewsInput;

    @Field(() => MovieCreateWithoutReviewsInput, {nullable:false})
    @Type(() => MovieCreateWithoutReviewsInput)
    create!: MovieCreateWithoutReviewsInput;
}
