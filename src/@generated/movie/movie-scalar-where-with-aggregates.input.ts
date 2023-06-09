import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MovieScalarWhereWithAggregatesInput {

    @Field(() => [MovieScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MovieScalarWhereWithAggregatesInput>;

    @Field(() => [MovieScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MovieScalarWhereWithAggregatesInput>;

    @Field(() => [MovieScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MovieScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    movieName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    director?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    releaseDate?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
