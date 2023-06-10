import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCountAggregate } from './review-count-aggregate.output';
import { ReviewAvgAggregate } from './review-avg-aggregate.output';
import { ReviewSumAggregate } from './review-sum-aggregate.output';
import { ReviewMinAggregate } from './review-min-aggregate.output';
import { ReviewMaxAggregate } from './review-max-aggregate.output';

@ObjectType()
export class ReviewGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    movieId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => ReviewCountAggregate, {nullable:true})
    _count?: ReviewCountAggregate;

    @Field(() => ReviewAvgAggregate, {nullable:true})
    _avg?: ReviewAvgAggregate;

    @Field(() => ReviewSumAggregate, {nullable:true})
    _sum?: ReviewSumAggregate;

    @Field(() => ReviewMinAggregate, {nullable:true})
    _min?: ReviewMinAggregate;

    @Field(() => ReviewMaxAggregate, {nullable:true})
    _max?: ReviewMaxAggregate;
}
