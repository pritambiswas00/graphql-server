import { Catch, ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ApolloError, UserInputError } from 'apollo-server-errors';
import { GqlArgumentsHost } from '@nestjs/graphql';

@Catch(ApolloError)
export class GraphqlErrorFilter implements GqlExceptionFilter {
  catch(exception: ApolloError, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const context = gqlHost.getContext();
    const response = gqlHost.switchToHttp().getResponse();

    let formattedError;

    if (exception instanceof UserInputError) {
      // Handle user input errors
      const { message, extensions } = exception;
      formattedError = { message, extensions };
    } else {
      // Handle other Apollo errors
      const { message, extensions } = exception;
      const code = extensions?.code || 'INTERNAL_SERVER_ERROR';
      formattedError = { message, code, extensions };
    }

    response.error(formattedError);
  }
}