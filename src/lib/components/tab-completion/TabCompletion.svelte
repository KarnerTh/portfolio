<script lang="ts">
  import { createEventDispatcher, tick } from "svelte";
  import { commandService } from "../../services/command.service";
  import { keyPressedStore } from "../../stores/key-pressed.store";
  import TabCompletionItem from "./TabCompletionItem.svelte";

  export let inputValue: string | null;
  let componentRef: HTMLElement;
  const dispatch = createEventDispatcher<{ completion: string }>();

  let enableSuggestions = false;
  let tabCompletionInput: string | null = null;
  let tabMoveCount: number | null = null;

  const scrollToSuggestions = async (): Promise<void> => {
    await tick();
    componentRef?.scrollIntoView(false);
  };

  const onTab = (): void => {
    if (tabCompletionInput !== inputValue && tabMoveCount === null) {
      tabCompletionInput = inputValue;
      tabMoveCount = 0;
    } else {
      if (tabMoveCount !== null) ++tabMoveCount;
    }

    enableSuggestions = true;
    scrollToSuggestions();
  };

  const clear = (): void => {
    enableSuggestions = false;
    tabMoveCount = null;
    tabCompletionInput = null;
  };

  $: {
    if ($keyPressedStore?.ctrlKey) {
      switch ($keyPressedStore?.key) {
        case "c":
          clear();
          break;
      }
    } else {
      switch ($keyPressedStore?.key) {
        case "Tab":
          onTab();
          break;
        case "Enter":
          clear();
          break;
        default:
          enableSuggestions = false;
          tabMoveCount = null;
          break;
      }
    }
  }

  $: suggestions = commandService.getTabCompletion(tabCompletionInput ?? "");
  $: tabIndex = (tabMoveCount ?? 0) % suggestions.length;
  $: {
    if (enableSuggestions) {
      const curSuggestion = suggestions[tabIndex];
      if (curSuggestion) {
        dispatch("completion", curSuggestion);
      }
    }
  }
</script>

{#if enableSuggestions && suggestions.length > 0}
  <div class="container" bind:this={componentRef}>
    {#each suggestions as suggestion, index}
      <TabCompletionItem value={suggestion} selected={index === tabIndex} />
    {/each}
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
