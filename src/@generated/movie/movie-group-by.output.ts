import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovieCountAggregate } from './movie-count-aggregate.output';
import { MovieAvgAggregate } from './movie-avg-aggregate.output';
import { MovieSumAggregate } from './movie-sum-aggregate.output';
import { MovieMinAggregate } from './movie-min-aggregate.output';
import { MovieMaxAggregate } from './movie-max-aggregate.output';

@ObjectType()
export class MovieGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    movieName!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => Date, {nullable:false})
    releaseDate!: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

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
