import { FastifyInstance, RegisterOptions, DoneFuncWithErrOrRes } from "fastify";
import { parserController } from "../controllers/parserController";

export function routes(fastify: FastifyInstance, options: RegisterOptions, done: DoneFuncWithErrOrRes) {
  try {
    fastify.post('/parser', parserController.getOutputFromInterface);
    done();
  } catch (error) {
    console.error(error);
    done(error);
  }
};