import { FastifyRequest } from "fastify";

export interface IParserRequestBody extends FastifyRequest {
  body: {
    input: string;
  };
}