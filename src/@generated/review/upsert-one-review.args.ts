import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateInput } from './review-create.input';
import { ReviewUpdateInput } from './review-update.input';

@ArgsType()
export class UpsertOneReviewArgs {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: ReviewWhereUniqueInput;

    @Field(() => ReviewCreateInput, {nullable:false})
    @Type(() => ReviewCreateInput)
    create!: ReviewCreateInput;

    @Field(() => ReviewUpdateInput, {nullable:false})
    @Type(() => ReviewUpdateInput)
    update!: ReviewUpdateInput;
}
