import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandIntro implements Command {
  public cmd = "intro";
  public description = "Show intro";

  public async execute(): Promise<Result<CommandResult>> {
    return success({
      type: "intro",
      value: {
        title: "I am a cli enthusiast and was thrilled to incorporate that into my portfolio.",
        description: "To get started, type 'help' to show all possible commands and shortcuts.",
      },
    });
  }
}
