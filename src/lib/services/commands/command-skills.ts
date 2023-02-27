import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandSkills implements Command {
  public cmd = "skills";
  public description = "Show skills";

  public async execute(): Promise<Result<CommandResult>> {
    return success({
      type: "table",
      value: {
        rows: [
          ["Golang", this.getProgress(6)],
          ["Typescript", this.getProgress(9)],
          ["Node.js", this.getProgress(8)],
          ["Flutter", this.getProgress(9)],
          ["Angular", this.getProgress(7)],
          ["React", this.getProgress(7)],
          ["Svelte", this.getProgress(2)],
          ["C#", this.getProgress(5)],
          ["Kotlin", this.getProgress(2)],
          ["SQL", this.getProgress(9)],
          ["Lua", this.getProgress(2)],
          ["Memes", this.getProgress(10)],
        ],
      }
    });
  }

  private getProgress(percentage: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): string {
    // displayMultiplier is used to strecht the progress bar
    const displayMultiplier = 2;
    const base = 10;
    return `|${"#".repeat(percentage * displayMultiplier)}${"&nbsp;".repeat(base * displayMultiplier - percentage * displayMultiplier)}|`;
  }
}
