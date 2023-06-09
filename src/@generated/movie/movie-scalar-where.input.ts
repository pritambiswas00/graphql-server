import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MovieScalarWhereInput {

    @Field(() => [MovieScalarWhereInput], {nullable:true})
    AND?: Array<MovieScalarWhereInput>;

    @Field(() => [MovieScalarWhereInput], {nullable:true})
    OR?: Array<MovieScalarWhereInput>;

    @Field(() => [MovieScalarWhereInput], {nullable:true})
    NOT?: Array<MovieScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    movieName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    director?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    releaseDate?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
