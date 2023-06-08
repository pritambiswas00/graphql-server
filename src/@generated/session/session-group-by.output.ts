import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionCountAggregate } from './session-count-aggregate.output';
import { SessionAvgAggregate } from './session-avg-aggregate.output';
import { SessionSumAggregate } from './session-sum-aggregate.output';
import { SessionMinAggregate } from './session-min-aggregate.output';
import { SessionMaxAggregate } from './session-max-aggregate.output';

@ObjectType()
export class SessionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    sessionToken!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: SessionCountAggregate;

    @Field(() => SessionAvgAggregate, {nullable:true})
    _avg?: SessionAvgAggregate;

    @Field(() => SessionSumAggregate, {nullable:true})
    _sum?: SessionSumAggregate;

    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: SessionMinAggregate;

    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: SessionMaxAggregate;
}
