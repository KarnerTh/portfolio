import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandContact implements Command {
  public cmd = "contact";
  public description = "Show contact information";

  public async execute(): Promise<Result<CommandResult>> {
    return success({
      type: "table",
      value: {
        description: "You can contact me via:",
        rows: [
          [`<a href="https://www.linkedin.com/in/thomas-karner/" target="_blank">LinkedIn</a>`],
          [`<a href="https://github.com/KarnerTh" target="_blank">GitHub</a>`],
          [`<a href="mailto:thomas.7.karner@gmail.com" target="_blank">E-Mail</a>`],
        ]
      },
    });
  }
}
