import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewUncheckedCreateNestedManyWithoutMovieInput } from '../review/review-unchecked-create-nested-many-without-movie.input';

@InputType()
export class MovieUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    movieName!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => Date, {nullable:false})
    releaseDate!: Date | string;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutMovieInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput;
}
