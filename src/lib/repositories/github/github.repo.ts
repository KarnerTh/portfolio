import { FailureType } from "../../utils/failure-type";
import { failure, success, type Result } from "../../utils/result-wrapper";
import { validateGithubRepoModel, type GithubRepoModel } from "./github.model";

export interface GithubRepo {
  getRepos(): Promise<Result<GithubRepoModel[]>>;
}

const createGithubRepo = (): GithubRepo => {

  const getRepos = async (): Promise<Result<GithubRepoModel[]>> => {
    const response = await fetch("https://api.github.com/users/KarnerTh/repos");
    const repos = await response.json();

    if (!validateGithubRepoModel(repos)) {
      return failure("Got unexpected result from github", FailureType.Error);
    }

    // Filter out repos that are a fork, only the own ones are relevant
    return success(repos.filter(r => !r.fork));
  }

  return {
    getRepos,
  };
}

export const githubRepo = createGithubRepo();  
