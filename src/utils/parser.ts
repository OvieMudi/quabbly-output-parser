import { IOutput } from "../interfaces/output";

export class Parser {
  public static parser(input: string): IOutput[] {
    console.log('Parser ~ parser ~ input', input);
    const output: IOutput[] = [];
    const linesArray = input.split(/[{}]/)[1].split(/[\n;,]/).map(str => str.trim()).filter(str => str).map(str => str.split(/:\s/));
    linesArray.forEach((stringArr) => {
      output.push({ name: stringArr[0], type: stringArr[1], label: Parser.toSentenceCase(stringArr[0]) });
    });

    return output;
  }

  // method to convert camelCase to sentence case
  // https://stackoverflow.com/a/7225450
  private static toSentenceCase(str: string): string {
    const capitalizedWords = str.replace(/([A-Z])/g, ' $1');
    const result = capitalizedWords[0].toUpperCase() + capitalizedWords.substring(1);
    return result;
  }

}

