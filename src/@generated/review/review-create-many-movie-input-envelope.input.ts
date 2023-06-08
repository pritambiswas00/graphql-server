import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyMovieInput } from './review-create-many-movie.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyMovieInputEnvelope {

    @Field(() => [ReviewCreateManyMovieInput], {nullable:false})
    @Type(() => ReviewCreateManyMovieInput)
    data!: Array<ReviewCreateManyMovieInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
