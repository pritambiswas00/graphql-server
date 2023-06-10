import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Review } from '../review/review.model';
import { Session } from '../session/session.model';
import { Movie } from '../movie/movie.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Session], {nullable:true})
    session?: Array<Session>;

    @Field(() => [Movie], {nullable:true})
    movies?: Array<Movie>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
