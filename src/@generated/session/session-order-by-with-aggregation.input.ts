import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SessionCountOrderByAggregateInput } from './session-count-order-by-aggregate.input';
import { SessionAvgOrderByAggregateInput } from './session-avg-order-by-aggregate.input';
import { SessionMaxOrderByAggregateInput } from './session-max-order-by-aggregate.input';
import { SessionMinOrderByAggregateInput } from './session-min-order-by-aggregate.input';
import { SessionSumOrderByAggregateInput } from './session-sum-order-by-aggregate.input';

@InputType()
export class SessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: SessionCountOrderByAggregateInput;

    @Field(() => SessionAvgOrderByAggregateInput, {nullable:true})
    _avg?: SessionAvgOrderByAggregateInput;

    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: SessionMaxOrderByAggregateInput;

    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: SessionMinOrderByAggregateInput;

    @Field(() => SessionSumOrderByAggregateInput, {nullable:true})
    _sum?: SessionSumOrderByAggregateInput;
}
