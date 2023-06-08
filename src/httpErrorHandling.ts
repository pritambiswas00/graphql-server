import {
    Catch,
    ExceptionFilter,
    HttpException,
    ArgumentsHost,
    HttpStatus,
  } from "@nestjs/common";
  import { Request, Response } from "express";
  import { GqlArgumentsHost, GqlExceptionFilter } from "@nestjs/graphql";
  import { GraphQLResolveInfo } from "graphql";
  
  @Catch()
  export class HttpErrorFilter implements ExceptionFilter, GqlExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      const gqlHost = GqlArgumentsHost.create(host);
      const info = gqlHost.getInfo<GraphQLResolveInfo>();
  
      const status = exception.getStatus
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
  
      if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        // tslint:disable-next-line: no-console
        console.error(exception);
      }
  
      const errorResponse = {
        statusCode: status,
        timestamp: new Date().toLocaleDateString(),
        error:
          status !== HttpStatus.INTERNAL_SERVER_ERROR
            ? exception.message || exception.message || null
            : "Internal server error",
      };
      if (request) {
        const error = {
          ...errorResponse,
          path: request.url,
          method: request.method,
        };
        response.status(status).json(errorResponse);
      } else {
        // This is for GRAPHQL petitions
        const error = {
          ...errorResponse,
          type: info.parentType,
          field: info.fieldName,
        };  
        return error;
      }
    }
  }