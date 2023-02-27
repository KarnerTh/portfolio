import type { CommandResult } from "../../domain/command-result/command-result";
import { githubRepo } from "../../repositories/github/github.repo";
import { isFailure, success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandProjects implements Command {
  public cmd = "projects";
  public description = "Show github projects";

  public async execute(): Promise<Result<CommandResult>> {
    const repos = await githubRepo.getRepos();
    if (isFailure(repos)) {
      return repos;
    }

    return success({
      type: "table",
      value: {
        description: "All projects",
        columns: [ "Name", "Language", "Stars", "Forks", "Open Issues" ],
        rows: repos.value.map(repo => [
          `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`,
          repo.language ?? "",
          repo.stargazers_count.toString(),
          repo.forks_count.toString(),
          repo.open_issues_count.toString(),
        ]),
      }
    });
  }
}
