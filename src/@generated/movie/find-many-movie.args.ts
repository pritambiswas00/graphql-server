import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';
import { Type } from 'class-transformer';
import { MovieOrderByWithRelationInput } from './movie-order-by-with-relation.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MovieScalarFieldEnum } from './movie-scalar-field.enum';

@ArgsType()
export class FindManyMovieArgs {

    @Field(() => MovieWhereInput, {nullable:true})
    @Type(() => MovieWhereInput)
    where?: MovieWhereInput;

    @Field(() => [MovieOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MovieOrderByWithRelationInput>;

    @Field(() => MovieWhereUniqueInput, {nullable:true})
    cursor?: MovieWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MovieScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MovieScalarFieldEnum>;

    @Field(()=>Int,{ nullable: true, defaultValue: 1 })
    page : number;

    @Field(()=>Int,{ nullable: true, defaultValue: 10 })
    limit : number;
}

