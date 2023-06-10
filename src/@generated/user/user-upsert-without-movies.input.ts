import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMoviesInput } from './user-update-without-movies.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMoviesInput } from './user-create-without-movies.input';

@InputType()
export class UserUpsertWithoutMoviesInput {

    @Field(() => UserUpdateWithoutMoviesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMoviesInput)
    update!: UserUpdateWithoutMoviesInput;

    @Field(() => UserCreateWithoutMoviesInput, {nullable:false})
    @Type(() => UserCreateWithoutMoviesInput)
    create!: UserCreateWithoutMoviesInput;
}
