import type { CommandResultCvData } from "./command-result-cv-data";
import type { CommandResultIntroData } from "./command-result-intro-data";
import type { CommandResultTableData } from "./command-result-table-data";

export type CommandResultIntro = { type: "intro", value: CommandResultIntroData };
export type CommandResultVoid = { type: "void", value: null };
export type CommandResultText = { type: "text", value: string };
export type CommandResultTable = { type: "table", value: CommandResultTableData };
export type CommandResultTables = { type: "tables", value: CommandResultTableData[] };
export type CommandResultCv = { type: "cv", value: CommandResultCvData };

export type CommandResult = CommandResultIntro
  | CommandResultVoid
  | CommandResultText
  | CommandResultTable
  | CommandResultTables
  | CommandResultCv;
