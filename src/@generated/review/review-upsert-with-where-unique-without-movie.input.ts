import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutMovieInput } from './review-update-without-movie.input';
import { ReviewCreateWithoutMovieInput } from './review-create-without-movie.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutMovieInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutMovieInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutMovieInput)
    update!: ReviewUpdateWithoutMovieInput;

    @Field(() => ReviewCreateWithoutMovieInput, {nullable:false})
    @Type(() => ReviewCreateWithoutMovieInput)
    create!: ReviewCreateWithoutMovieInput;
}
