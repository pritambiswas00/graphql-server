import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MovieMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    movieName?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    director?: true;

    @Field(() => Boolean, {nullable:true})
    releaseDate?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
