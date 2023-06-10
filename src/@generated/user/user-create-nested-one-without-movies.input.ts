import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMoviesInput } from './user-create-without-movies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMoviesInput } from './user-create-or-connect-without-movies.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMoviesInput {

    @Field(() => UserCreateWithoutMoviesInput, {nullable:true})
    @Type(() => UserCreateWithoutMoviesInput)
    create?: UserCreateWithoutMoviesInput;

    @Field(() => UserCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
