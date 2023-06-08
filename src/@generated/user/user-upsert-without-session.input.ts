import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSessionInput } from './user-update-without-session.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSessionInput } from './user-create-without-session.input';

@InputType()
export class UserUpsertWithoutSessionInput {

    @Field(() => UserUpdateWithoutSessionInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionInput)
    update!: UserUpdateWithoutSessionInput;

    @Field(() => UserCreateWithoutSessionInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionInput)
    create!: UserCreateWithoutSessionInput;
}
