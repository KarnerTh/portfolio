import type { CommandRequest } from "./command-request";
import type { CommandResult } from "./command-result/command-result";

export interface HistoryEntry {
  request: CommandRequest;
  result: CommandResult;
}
