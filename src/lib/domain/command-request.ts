export interface CommandRequest {
  cmd: string;
  args: string[];
}

export const formatCommand = (cmd: CommandRequest): string => {
  return `${cmd.cmd} ${cmd.args.join(" ")}`;
}
