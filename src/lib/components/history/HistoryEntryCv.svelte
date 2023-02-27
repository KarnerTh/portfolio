<script lang="ts">
  import type { CommandResultCvData } from "../../domain/command-result/command-result-cv-data";
  import type { CommandResultTableData } from "../../domain/command-result/command-result-table-data";
  import HistoryEntryTable from "./HistoryEntryTable.svelte";

  export let data: CommandResultCvData;

  const getBaseDataTableData = (): CommandResultTableData => {
    return {
      description: "Base Data",
      columns: ["---------------------", ""],
      rows: [
        ["Name", data.baseData.name],
        ["Degrees", data.baseData.titles.join(", ")],
        ["Date of birth", data.baseData.dateOfBirth],
        ["Country", data.baseData.country],
      ],
    };
  };

  const getWorkExperienceTableData = (): CommandResultTableData => {
    return {
      description: "Work expoerience",
      columns: ["---------------------", ""],
      rows: data.workExperience.map((e) => [
        `${e.start} - ${e.end}`,
        `${e.jobTitle}</br>${e.companyName}`,
      ]),
    };
  };

  const getEducationTableData = (): CommandResultTableData => {
    return {
      description: "Education",
      columns: ["---------------------", ""],
      rows: data.education.map((e) => [
        `${e.start} - ${e.end}`,
        `${e.title}</br>${e.description}`,
      ]),
    };
  };
</script>

<div>
  <div class="bottom-spacing">
    <HistoryEntryTable data={getBaseDataTableData()} />
  </div>
  <div class="bottom-spacing">
    <HistoryEntryTable data={getWorkExperienceTableData()} />
  </div>
  <HistoryEntryTable data={getEducationTableData()} />
</div>

<style>
  .bottom-spacing {
    padding-bottom: 16px;
  }
</style>
