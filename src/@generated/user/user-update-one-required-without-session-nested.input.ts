import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionInput } from './user-create-without-session.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSessionInput } from './user-create-or-connect-without-session.input';
import { UserUpsertWithoutSessionInput } from './user-upsert-without-session.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSessionInput } from './user-update-without-session.input';

@InputType()
export class UserUpdateOneRequiredWithoutSessionNestedInput {

    @Field(() => UserCreateWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionInput)
    create?: UserCreateWithoutSessionInput;

    @Field(() => UserCreateOrConnectWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionInput)
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput;

    @Field(() => UserUpsertWithoutSessionInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionInput)
    upsert?: UserUpsertWithoutSessionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSessionInput, {nullable:true})
    @Type(() => UserUpdateWithoutSessionInput)
    update?: UserUpdateWithoutSessionInput;
}
