import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutUserInput } from './review-update-without-user.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    data!: ReviewUpdateWithoutUserInput;
}
