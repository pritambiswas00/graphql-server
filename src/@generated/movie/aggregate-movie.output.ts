import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MovieCountAggregate } from './movie-count-aggregate.output';
import { MovieAvgAggregate } from './movie-avg-aggregate.output';
import { MovieSumAggregate } from './movie-sum-aggregate.output';
import { MovieMinAggregate } from './movie-min-aggregate.output';
import { MovieMaxAggregate } from './movie-max-aggregate.output';

@ObjectType()
export class AggregateMovie {

    @Field(() => MovieCountAggregate, {nullable:true})
    _count?: MovieCountAggregate;

    @Field(() => MovieAvgAggregate, {nullable:true})
    _avg?: MovieAvgAggregate;

    @Field(() => MovieSumAggregate, {nullable:true})
    _sum?: MovieSumAggregate;

    @Field(() => MovieMinAggregate, {nullable:true})
    _min?: MovieMinAggregate;

    @Field(() => MovieMaxAggregate, {nullable:true})
    _max?: MovieMaxAggregate;
}
