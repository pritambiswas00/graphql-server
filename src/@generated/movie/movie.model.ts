import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Review } from '../review/review.model';
import { User } from '../user/user.model';
import { MovieCount } from './movie-count.output';

@ObjectType()
export class Movie {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    movieName!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => Date, {nullable:false})
    releaseDate!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => MovieCount, {nullable:false})
    _count?: MovieCount;
}
