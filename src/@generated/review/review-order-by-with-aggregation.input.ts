import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewCountOrderByAggregateInput } from './review-count-order-by-aggregate.input';
import { ReviewAvgOrderByAggregateInput } from './review-avg-order-by-aggregate.input';
import { ReviewMaxOrderByAggregateInput } from './review-max-order-by-aggregate.input';
import { ReviewMinOrderByAggregateInput } from './review-min-order-by-aggregate.input';
import { ReviewSumOrderByAggregateInput } from './review-sum-order-by-aggregate.input';

@InputType()
export class ReviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    movieId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => ReviewCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCountOrderByAggregateInput;

    @Field(() => ReviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewAvgOrderByAggregateInput;

    @Field(() => ReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewMaxOrderByAggregateInput;

    @Field(() => ReviewMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewMinOrderByAggregateInput;

    @Field(() => ReviewSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewSumOrderByAggregateInput;
}
