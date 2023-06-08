import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Session {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    sessionToken!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    expires!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
