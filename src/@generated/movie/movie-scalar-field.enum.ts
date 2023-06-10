import { registerEnumType } from '@nestjs/graphql';

export enum MovieScalarFieldEnum {
    id = "id",
    movieName = "movieName",
    description = "description",
    director = "director",
    releaseDate = "releaseDate",
    userId = "userId"
}


registerEnumType(MovieScalarFieldEnum, { name: 'MovieScalarFieldEnum', description: undefined })
