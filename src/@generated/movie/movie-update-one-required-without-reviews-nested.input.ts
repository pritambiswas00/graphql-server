import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieCreateWithoutReviewsInput } from './movie-create-without-reviews.input';
import { Type } from 'class-transformer';
import { MovieCreateOrConnectWithoutReviewsInput } from './movie-create-or-connect-without-reviews.input';
import { MovieUpsertWithoutReviewsInput } from './movie-upsert-without-reviews.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { MovieUpdateWithoutReviewsInput } from './movie-update-without-reviews.input';

@InputType()
export class MovieUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => MovieCreateWithoutReviewsInput, {nullable:true})
    @Type(() => MovieCreateWithoutReviewsInput)
    create?: MovieCreateWithoutReviewsInput;

    @Field(() => MovieCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => MovieCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput;

    @Field(() => MovieUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => MovieUpsertWithoutReviewsInput)
    upsert?: MovieUpsertWithoutReviewsInput;

    @Field(() => MovieWhereUniqueInput, {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    connect?: MovieWhereUniqueInput;

    @Field(() => MovieUpdateWithoutReviewsInput, {nullable:true})
    @Type(() => MovieUpdateWithoutReviewsInput)
    update?: MovieUpdateWithoutReviewsInput;
}
