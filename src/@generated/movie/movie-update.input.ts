import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewUpdateManyWithoutMovieNestedInput } from '../review/review-update-many-without-movie-nested.input';
import { UserUpdateOneRequiredWithoutMoviesNestedInput } from '../user/user-update-one-required-without-movies-nested.input';

@InputType()
export class MovieUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    movieName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    director?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewUpdateManyWithoutMovieNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutMovieNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutMoviesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput;
}
