import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandCurDate implements Command {
  public cmd = 'date';
  public description = "Display the current date and time";

  public async execute(): Promise<Result<CommandResult>> {
    return success({
      type: "text",
      value: (new Date()).toLocaleString(),
    });
  }
}
