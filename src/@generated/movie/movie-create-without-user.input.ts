import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateNestedManyWithoutMovieInput } from '../review/review-create-nested-many-without-movie.input';

@InputType()
export class MovieCreateWithoutUserInput {

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
}
