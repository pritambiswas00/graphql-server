import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovieUpdateOneRequiredWithoutReviewsNestedInput } from '../movie/movie-update-one-required-without-reviews-nested.input';

@InputType()
export class ReviewUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => MovieUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput;
}
