import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import { commandService } from "../command.service";
import type { Command } from "./command";

export class CommandHelp implements Command {
  public cmd = "help";
  public description = "Show the help information";

  public async execute(): Promise<Result<CommandResult>> {
    const commands = commandService.availableCommands;

    return success({
      type: "tables",
      value: [
        {
          description: "All available shortcuts",
          rows: [
            ["Tab", "Circle through the autocomplete list"],
            ["Ctrl+C", "Abort input"],
          ]
        },
        {
          description: "All available commands",
          rows: commands.map(c => [c.cmd, c.description]),
        }
      ]
    });
  }
}
