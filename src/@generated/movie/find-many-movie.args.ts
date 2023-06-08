import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';
import { Type } from 'class-transformer';
import { MovieOrderByWithRelationInput } from './movie-order-by-with-relation.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class FindManyMovieArgs {

    @Field(() => MovieWhereInput, {nullable:true})
    @Type(() => MovieWhereInput)
    where?: MovieWhereInput;

    @Field(() => [MovieOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MovieOrderByWithRelationInput>;

    @Field(()=>Int,{ nullable: true, defaultValue: 1 })
    page? : number;

    @Field(()=>Int,{ nullable: true, defaultValue: 10 })
    limit? : number;
}

