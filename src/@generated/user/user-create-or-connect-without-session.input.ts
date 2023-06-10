import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSessionInput } from './user-create-without-session.input';

@InputType()
export class UserCreateOrConnectWithoutSessionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSessionInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionInput)
    create!: UserCreateWithoutSessionInput;
}
