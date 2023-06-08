import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReviewCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    movieId!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:false})
    comment!: string;
}
