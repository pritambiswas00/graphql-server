import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MovieCountOrderByAggregateInput } from './movie-count-order-by-aggregate.input';
import { MovieAvgOrderByAggregateInput } from './movie-avg-order-by-aggregate.input';
import { MovieMaxOrderByAggregateInput } from './movie-max-order-by-aggregate.input';
import { MovieMinOrderByAggregateInput } from './movie-min-order-by-aggregate.input';
import { MovieSumOrderByAggregateInput } from './movie-sum-order-by-aggregate.input';

@InputType()
export class MovieOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    movieName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => MovieCountOrderByAggregateInput, {nullable:true})
    _count?: MovieCountOrderByAggregateInput;

    @Field(() => MovieAvgOrderByAggregateInput, {nullable:true})
    _avg?: MovieAvgOrderByAggregateInput;

    @Field(() => MovieMaxOrderByAggregateInput, {nullable:true})
    _max?: MovieMaxOrderByAggregateInput;

    @Field(() => MovieMinOrderByAggregateInput, {nullable:true})
    _min?: MovieMinOrderByAggregateInput;

    @Field(() => MovieSumOrderByAggregateInput, {nullable:true})
    _sum?: MovieSumOrderByAggregateInput;
}
