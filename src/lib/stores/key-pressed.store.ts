import { writable } from "svelte/store";
import type { StoreType } from "../utils/store-util";

interface KeyPressedStore {
  subscribe: StoreType<KeyboardEvent>;
  set: (entry: KeyboardEvent) => void;
}

const createKeyPressedStore = (): KeyPressedStore => {
  const { subscribe, set } = writable<KeyboardEvent>();

  return {
    subscribe,
    set: (entry: KeyboardEvent) => set(entry),
  };
}

export const keyPressedStore = createKeyPressedStore();
