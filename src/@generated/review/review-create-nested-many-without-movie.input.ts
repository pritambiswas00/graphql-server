import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutMovieInput } from './review-create-without-movie.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutMovieInput } from './review-create-or-connect-without-movie.input';
import { ReviewCreateManyMovieInputEnvelope } from './review-create-many-movie-input-envelope.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutMovieInput {

    @Field(() => [ReviewCreateWithoutMovieInput], {nullable:true})
    @Type(() => ReviewCreateWithoutMovieInput)
    create?: Array<ReviewCreateWithoutMovieInput>;

    @Field(() => [ReviewCreateOrConnectWithoutMovieInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutMovieInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutMovieInput>;

    @Field(() => ReviewCreateManyMovieInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyMovieInputEnvelope)
    createMany?: ReviewCreateManyMovieInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<ReviewWhereUniqueInput>;
}
