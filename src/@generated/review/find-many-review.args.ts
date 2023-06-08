import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewOrderByWithRelationInput } from './review-order-by-with-relation.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';

@ArgsType()
export class FindManyReviewArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(()=>Int,{ nullable: true, defaultValue: 1 })
    page? : number;

    @Field(()=>Int,{ nullable: true, defaultValue: 10 })
    limit? : number;
}
