import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewsInput } from './user-create-or-connect-without-reviews.input';
import { UserUpsertWithoutReviewsInput } from './user-upsert-without-reviews.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReviewsInput } from './user-update-without-reviews.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => UserCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewsInput)
    create?: UserCreateWithoutReviewsInput;

    @Field(() => UserCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;

    @Field(() => UserUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewsInput)
    upsert?: UserUpsertWithoutReviewsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpdateWithoutReviewsInput)
    update?: UserUpdateWithoutReviewsInput;
}
