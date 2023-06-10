import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutMovieInput } from './review-create-without-movie.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutMovieInput } from './review-create-or-connect-without-movie.input';
import { ReviewUpsertWithWhereUniqueWithoutMovieInput } from './review-upsert-with-where-unique-without-movie.input';
import { ReviewCreateManyMovieInputEnvelope } from './review-create-many-movie-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutMovieInput } from './review-update-with-where-unique-without-movie.input';
import { ReviewUpdateManyWithWhereWithoutMovieInput } from './review-update-many-with-where-without-movie.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutMovieNestedInput {

    @Field(() => [ReviewCreateWithoutMovieInput], {nullable:true})
    @Type(() => ReviewCreateWithoutMovieInput)
    create?: Array<ReviewCreateWithoutMovieInput>;

    @Field(() => [ReviewCreateOrConnectWithoutMovieInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutMovieInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutMovieInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutMovieInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutMovieInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutMovieInput>;

    @Field(() => ReviewCreateManyMovieInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyMovieInputEnvelope)
    createMany?: ReviewCreateManyMovieInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<ReviewWhereUniqueInput>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutMovieInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutMovieInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutMovieInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutMovieInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutMovieInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutMovieInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
