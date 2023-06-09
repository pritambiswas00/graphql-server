import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMoviesInput } from '../user/user-create-nested-one-without-movies.input';

@InputType()
export class MovieCreateWithoutReviewsInput {

    @Field(() => String, {nullable:false})
    movieName!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => Date, {nullable:false})
    releaseDate!: Date | string;

    @Field(() => UserCreateNestedOneWithoutMoviesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMoviesInput;
}
