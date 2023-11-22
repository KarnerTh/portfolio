import type { CommandResult } from "../../domain/command-result/command-result";
import { success, type Result } from "../../utils/result-wrapper";
import type { Command } from "./command";

export class CommandCv implements Command {
  public cmd = "cv";
  public description = "Show curriculum vitae";

  public async execute(): Promise<Result<CommandResult>> {
    return success({
      type: "cv",
      value: {
        baseData: {
          name: "Thomas Karner",
          country: "Austria",
          dateOfBirth: "11.01.1996",
          titles: ["Ing.", "BSc.", "DI (master degree)"]
        },
        workExperience: [
          {
            start: "Jul 2023",
            end: "Present",
            jobTitle: "Senior Software Engineer",
            companyName: "Starship",
          },
          {
            start: "Oct 2021",
            end: "Jun 2023",
            jobTitle: "Senior Software Engineer - Technical Lead",
            companyName: "Pink Robin GmbH",
          },
          {
            start: "Jan 2019",
            end: "Sep 2021",
            jobTitle: "Software Developer",
            companyName: "BYTEPOETS GmbH",
          },
          {
            start: "May 2016",
            end: "Dec 2018",
            jobTitle: "Junior IT Project Manager",
            companyName: "Energie Steiermark AG",
          }
        ],
        education: [
          {
            start: "2019",
            end: "2021",
            title: "FH CAMPUS 02",
            description: "DI, IT & Business Informatics"
          },
          {
            start: "2016",
            end: "2019",
            title: "FH CAMPUS 02",
            description: "BSc., Business Informatics"
          },
          {
            start: "2010",
            end: "2015",
            title: "HTBLA Kaindorf",
            description: "A level, Computer Science"
          }
        ],
      },
    });
  }
}
