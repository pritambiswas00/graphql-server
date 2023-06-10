import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMoviesInput } from './user-create-without-movies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMoviesInput } from './user-create-or-connect-without-movies.input';
import { UserUpsertWithoutMoviesInput } from './user-upsert-without-movies.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMoviesInput } from './user-update-without-movies.input';

@InputType()
export class UserUpdateOneRequiredWithoutMoviesNestedInput {

    @Field(() => UserCreateWithoutMoviesInput, {nullable:true})
    @Type(() => UserCreateWithoutMoviesInput)
    create?: UserCreateWithoutMoviesInput;

    @Field(() => UserCreateOrConnectWithoutMoviesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMoviesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput;

    @Field(() => UserUpsertWithoutMoviesInput, {nullable:true})
    @Type(() => UserUpsertWithoutMoviesInput)
    upsert?: UserUpsertWithoutMoviesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMoviesInput, {nullable:true})
    @Type(() => UserUpdateWithoutMoviesInput)
    update?: UserUpdateWithoutMoviesInput;
}
