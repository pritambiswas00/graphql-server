import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { ArgumentsHost, Injectable } from '@nestjs/common';

@Injectable()
export class CustomGraphqlErrorFilter implements GqlExceptionFilter {
  catch(exception: GraphQLError, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const reply = gqlHost.switchToHttp().getResponse();
     console.log(reply, "sadasd")
    const statusCode = exception.extensions || 500;
    const message = exception.message || 'Internal Server Error';
    const code = 'INTERNAL_SERVER_ERROR';

    reply.code(statusCode).send({
      errors: [{ message, code }],
      data: null,
    });
  }
}