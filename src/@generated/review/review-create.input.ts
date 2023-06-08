import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovieCreateNestedOneWithoutReviewsInput } from '../movie/movie-create-nested-one-without-reviews.input';
import { UserCreateNestedOneWithoutReviewsInput } from '../user/user-create-nested-one-without-reviews.input';

@InputType()
export class ReviewCreateInput {

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => MovieCreateNestedOneWithoutReviewsInput, {nullable:false})
    movie!: MovieCreateNestedOneWithoutReviewsInput;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReviewsInput;
}
