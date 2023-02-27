import type { CommandRequest } from "../domain/command-request";
import type { CommandResult } from "../domain/command-result/command-result";
import { FailureType } from "../utils/failure-type";
import { failure, type Result } from "../utils/result-wrapper";
import type { Command } from "./commands/command";
import { CommandClear } from "./commands/command-clear";
import { CommandContact } from "./commands/command-contact";
import { CommandCurDate } from "./commands/command-cur-date";
import { CommandCv } from "./commands/command-cv";
import { CommandHelp } from "./commands/command-help";
import { CommandIntro } from "./commands/command-intro";
import { CommandProjects } from "./commands/command-projects";
import { CommandSkills } from "./commands/command-skills";

export interface CommandService {
  availableCommands: Command[];
  getTabCompletion: (input: string) => string[];
  execute: (cmd: CommandRequest) => Promise<Result<CommandResult>>;
}

const createCommandService = (): CommandService => {
  const availableCommands: Command[] = [
    new CommandHelp(),
    new CommandClear(),
    new CommandCurDate(),
    new CommandProjects(),
    new CommandIntro(),
    new CommandContact(),
    new CommandCv(),
    new CommandSkills(),
  ].sort((a, b) => a.cmd.localeCompare(b.cmd));

  const getTabCompletion = (input: string): string[] => {
    return availableCommands.filter(c => c.cmd.startsWith(input)).map(c => c.cmd);
  }

  const execute = async (request: CommandRequest): Promise<Result<CommandResult>> => {
    const command = availableCommands.find(c => c.cmd === request.cmd);
    if (!command) {
      return failure(`Command not found: ${request.cmd}. Try 'help' for more infos.`, FailureType.Error);
    }

    return command.execute(request.args);
  }

  return {
    availableCommands,
    getTabCompletion,
    execute,
  };
};

export const commandService = createCommandService();
