import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewsInput } from './user-update-without-reviews.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';

@InputType()
export class UserUpsertWithoutReviewsInput {

    @Field(() => UserUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewsInput)
    update!: UserUpdateWithoutReviewsInput;

    @Field(() => UserCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewsInput)
    create!: UserCreateWithoutReviewsInput;
}
