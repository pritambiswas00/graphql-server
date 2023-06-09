import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateNestedManyWithoutMovieInput } from '../review/review-create-nested-many-without-movie.input';
import { UserCreateNestedOneWithoutMoviesInput } from '../user/user-create-nested-one-without-movies.input';

@InputType()
export class MovieCreateInput {

    @Field(() => String, {nullable:false})
    movieName!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => Date, {nullable:false})
    releaseDate!: Date | string;

    @Field(() => ReviewCreateNestedManyWithoutMovieInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutMovieInput;

    @Field(() => UserCreateNestedOneWithoutMoviesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMoviesInput;
}
