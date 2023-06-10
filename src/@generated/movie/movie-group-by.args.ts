import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';
import { Type } from 'class-transformer';
import { MovieOrderByWithAggregationInput } from './movie-order-by-with-aggregation.input';
import { MovieScalarFieldEnum } from './movie-scalar-field.enum';
import { MovieScalarWhereWithAggregatesInput } from './movie-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MovieCountAggregateInput } from './movie-count-aggregate.input';
import { MovieAvgAggregateInput } from './movie-avg-aggregate.input';
import { MovieSumAggregateInput } from './movie-sum-aggregate.input';
import { MovieMinAggregateInput } from './movie-min-aggregate.input';
import { MovieMaxAggregateInput } from './movie-max-aggregate.input';

@ArgsType()
export class MovieGroupByArgs {

    @Field(() => MovieWhereInput, {nullable:true})
    @Type(() => MovieWhereInput)
    where?: MovieWhereInput;

    @Field(() => [MovieOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MovieOrderByWithAggregationInput>;

    @Field(() => [MovieScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MovieScalarFieldEnum>;

    @Field(() => MovieScalarWhereWithAggregatesInput, {nullable:true})
    having?: MovieScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MovieCountAggregateInput, {nullable:true})
    _count?: MovieCountAggregateInput;

    @Field(() => MovieAvgAggregateInput, {nullable:true})
    _avg?: MovieAvgAggregateInput;

    @Field(() => MovieSumAggregateInput, {nullable:true})
    _sum?: MovieSumAggregateInput;

    @Field(() => MovieMinAggregateInput, {nullable:true})
    _min?: MovieMinAggregateInput;

    @Field(() => MovieMaxAggregateInput, {nullable:true})
    _max?: MovieMaxAggregateInput;
}
