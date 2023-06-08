import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionInput } from './user-create-without-session.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSessionInput } from './user-create-or-connect-without-session.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSessionInput {

    @Field(() => UserCreateWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionInput)
    create?: UserCreateWithoutSessionInput;

    @Field(() => UserCreateOrConnectWithoutSessionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionInput)
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
