import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Movie } from '../movie/movie.model';
import { User } from '../user/user.model';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    movieId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Movie, {nullable:false})
    movie?: Movie;

    @Field(() => User, {nullable:false})
    user?: User;
}
