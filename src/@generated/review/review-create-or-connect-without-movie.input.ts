import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutMovieInput } from './review-create-without-movie.input';

@InputType()
export class ReviewCreateOrConnectWithoutMovieInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateWithoutMovieInput, {nullable:false})
    @Type(() => ReviewCreateWithoutMovieInput)
    create!: ReviewCreateWithoutMovieInput;
}
