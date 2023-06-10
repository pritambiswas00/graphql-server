import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';
import { MovieOrderByRelationAggregateInput } from '../movie/movie-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    session?: SessionOrderByRelationAggregateInput;

    @Field(() => MovieOrderByRelationAggregateInput, {nullable:true})
    movies?: MovieOrderByRelationAggregateInput;
}
