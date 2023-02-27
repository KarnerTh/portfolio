import { writable } from "svelte/store";
import type { StoreType } from "../utils/store-util";
import type { HistoryEntry } from "../domain/history-entry";

interface HistoryStore {
  subscribe: StoreType<HistoryEntry[]>;
  add: (entry: HistoryEntry) => void;
  clear: () => void;
}

const createHistoryStore = (): HistoryStore => {
  const { subscribe, update, set } = writable<HistoryEntry[]>([]);

  const add = (entry: HistoryEntry): void => {
    // the "clear" command should not be in the history
    if (entry.request.cmd === "clear") return;

    update(list => [...list, entry]);
  }

  const clear = (): void => {
    set([]);
  }

  return {
    subscribe,
    add,
    clear,
  };
}

export const historyStore = createHistoryStore();
