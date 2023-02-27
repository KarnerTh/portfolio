import Ajv, { type JSONSchemaType } from "ajv";

export interface GithubRepoModel {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language?: string | null;
  fork: boolean;
}

const ajv = new Ajv({ allErrors: true });

const schema: JSONSchemaType<GithubRepoModel[]> = {
  type: "array",
  items: {
    type: "object",
    required: [
      "name",
      "description",
      "html_url",
      "stargazers_count",
      "forks_count",
      "open_issues_count",
      "fork",
    ],
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      html_url: { type: "string" },
      stargazers_count: { type: "number" },
      forks_count: { type: "number" },
      open_issues_count: { type: "number" },
      language: { type: "string", nullable: true },
      fork: { type: "boolean" },
    }
  }
}

export const validateGithubRepoModel = ajv.compile(schema);
