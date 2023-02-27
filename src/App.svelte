<script lang="ts">
  import TerminalContainer from "./lib/components/TerminalContainer.svelte";
  import Prompt from "./lib/components/Prompt.svelte";
  import { historyStore } from "./lib/stores/history.store";
  import HistoryEntry from "./lib/components/history/HistoryEntry.svelte";
</script>

<main>
  <TerminalContainer>
    {#each $historyStore as historyEntry}
      <HistoryEntry entry={historyEntry} />
    {/each}
    <Prompt />
  </TerminalContainer>
</main>
