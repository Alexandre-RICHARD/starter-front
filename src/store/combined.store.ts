import { create } from "zustand";

import {
  type TranslationState,
  useTranslationStore,
} from "./translation.store";

export const useCombinedStore = create<TranslationState>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
