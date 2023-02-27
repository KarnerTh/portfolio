import type { CommandResult } from "../../domain/command-result/command-result";
import type { Result } from "../../utils/result-wrapper";

export interface Command {
  cmd: string;
  description: string;
  execute(args: string[]): Promise<Result<CommandResult>>;
}

