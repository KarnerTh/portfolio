import type { CommandRequest } from "../domain/command-request";
import { FailureType } from "../utils/failure-type";
import { failure, success, type Result } from "../utils/result-wrapper";

export interface CommandParserService {
  parse(input: string): Result<CommandRequest>;
}

function createCommandParserService(): CommandParserService {
  const parse = (input: string): Result<CommandRequest> => {
    const command = input.trim();

    if (command === "") {
      return failure("No input provided", FailureType.NoInput);
    }

    const [cmd, ...args] = command.split(" ");
    return success({ cmd, args });
  }

  return {
    parse
  };
}

export const commandParserService = createCommandParserService();
