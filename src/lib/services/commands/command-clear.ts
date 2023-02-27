import type { CommandResult } from "../../domain/command-result/command-result";
import { historyStore } from "../../stores/history.store";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandClear implements Command {
  public cmd = "clear";
  public description = "Clear the history";

  public async execute(): Promise<Result<CommandResult>> {
    historyStore.clear();
    return success({ type: "void", value: null })
  }
}
