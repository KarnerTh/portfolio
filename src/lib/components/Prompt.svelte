<script lang="ts">
  import { onMount, tick } from "svelte";
  import { clickOutside } from "../utils/click-outside";
  import { historyStore } from "../stores/history.store";
  import { commandParserService } from "../services/command-parser.service";
  import { isFailure } from "../utils/result-wrapper";
  import { commandService } from "../services/command.service";
  import TabCompletion from "./tab-completion/TabCompletion.svelte";
  import { keyPressedStore } from "../stores/key-pressed.store";
  import { FailureType } from "../utils/failure-type";

  // show intro on startup
  let inputValue: string = "intro";
  let promptRef: HTMLInputElement;
  let isLoading: boolean = false;

  onMount(() => {
    promptRef.focus();

    // show intro on startup
    onEnter();
  });

  $: {
    // scroll to the prompt after a new history item was added
    if ($historyStore)
      tick().then(() => {
        promptRef.scrollIntoView(false);
      });
  }

  const onClickOutside = () => {
    promptRef.focus();
  };

  const onEnter = async (): Promise<void> => {
    const request = commandParserService.parse(inputValue);
    if (isFailure(request)) {
      if (request.failureType === FailureType.NoInput) {
        historyStore.add({
          request: { cmd: "", args: [] },
          result: { type: "void", value: null },
        });
      }
      return;
    }

    isLoading = true;
    const result = await commandService.execute(request.value);
    inputValue = "";
    isLoading = false;
    if (isFailure(result)) {
      historyStore.add({
        request: request.value,
        result: { type: "text", value: result.msg },
      });
      return;
    }

    historyStore.add({ request: request.value, result: result.value });
  };

  const onKeyPress = (event: KeyboardEvent) => {
    keyPressedStore.set(event);
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        onEnter();
        break;
      case "Tab":
        event.preventDefault();
        break;
      case "c":
        if ($keyPressedStore.ctrlKey) {
          historyStore.add({
            request: { cmd: inputValue, args: [] },
            result: { type: "void", value: null },
          });
          inputValue = "";
        }
        break;
    }
  };
</script>

<div class="container" use:clickOutside={onClickOutside}>
  <div>
    <span>~ ❯</span>
    <input
      type="text"
      spellcheck="false"
      bind:this={promptRef}
      bind:value={inputValue}
      on:keydown={onKeyPress}
    />
  </div>
  {#if isLoading}
    <span>loading...</span>
  {/if}
  <TabCompletion
    {inputValue}
    on:completion={(value) => (inputValue = value.detail)}
  />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  input {
    border: 0;
    outline: 0;
    background-color: transparent;
    flex-grow: 1;
    padding: 0;

    font-family: JetBrains Mono;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.87);
  }

  input:focus {
    outline: 0;
  }
</style>
