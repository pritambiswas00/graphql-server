import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutMovieInput } from './review-update-without-movie.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutMovieInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutMovieInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutMovieInput)
    data!: ReviewUpdateWithoutMovieInput;
}
