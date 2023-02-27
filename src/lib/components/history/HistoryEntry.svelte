<script lang="ts">
  import { formatCommand } from "../../domain/command-request";
  import type { HistoryEntry } from "../../domain/history-entry";
  import HistoryEntryCv from "./HistoryEntryCv.svelte";
  import HistoryEntryIntro from "./HistoryEntryIntro.svelte";
  import HistoryEntryTable from "./HistoryEntryTable.svelte";

  export let entry: HistoryEntry;
</script>

<div class="container">
  <span> ~ ❯ {formatCommand(entry.request)}</span>

  {#if entry.result.type === "text"}
    <span>{entry.result.value}</span>
  {:else if entry.result.type === "intro"}
    <HistoryEntryIntro data={entry.result.value} />
  {:else if entry.result.type === "table"}
    <HistoryEntryTable data={entry.result.value} />
  {:else if entry.result.type === "tables"}
    {#each entry.result.value as tableResult, index}
      <span class:bottom-space={++index !== entry.result.value.length}>
        <HistoryEntryTable data={tableResult} />
      </span>
    {/each}
  {:else if entry.result.type === "cv"}
    <HistoryEntryCv data={entry.result.value} />
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .bottom-space {
    padding-bottom: 16px;
  }
</style>
