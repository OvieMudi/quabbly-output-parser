import { FastifyReply } from "fastify";
// import { IParserRequestBody } from "../interfaces/parserRequestBody";
import { Parser } from "../utils/parser";

class ParserController {
  public async getOutputFromInterface(req, res: FastifyReply) {
    console.log('ParserController ~ getOutputFromInterface ~ req.body', req.body);
    const { input } = req.body;
    const output = Parser.parser(input);

    return res.status(200).send({
      status: true,
      output
    });
  }

  public async getSample(req, res: FastifyReply) {
    const input = `interface SampleInterface {
      activityId: string;
      id: string;
      replyToId: string;
      messageType: string;
      createdDateTime: string;
    }`
    const output = Parser.parser(input);

    return res.status(200).send({
      status: true,
      output
    });
  }
}

export const parserController = new ParserController();