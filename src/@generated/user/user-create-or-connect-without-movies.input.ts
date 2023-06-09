import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMoviesInput } from './user-create-without-movies.input';

@InputType()
export class UserCreateOrConnectWithoutMoviesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMoviesInput, {nullable:false})
    @Type(() => UserCreateWithoutMoviesInput)
    create!: UserCreateWithoutMoviesInput;
}
