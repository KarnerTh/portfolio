<script lang="ts">
  import type { CommandResultTableData } from "../../domain/command-result/command-result-table-data";

  export let data: CommandResultTableData;
</script>

<div>
  {#if data.description !== undefined}
    <span>{data.description}</span>
  {/if}
  <table>
    {#if data.columns !== undefined}
      <tr>
        {#each data.columns as column}
          <th>{column}</th>
        {/each}
      </tr>
    {/if}

    {#each data.rows as row}
      <tr>
        {#each row as rowColumns}
          <td>{@html rowColumns}</td>
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  th {
    padding-right: 15px;
  }
  td {
    padding-right: 15px;
    vertical-align: top;
  }
</style>
