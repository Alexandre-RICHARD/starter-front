import { LanguageEnum } from "@src/enum/language.enum";
import { create } from "zustand";

interface TranslationState {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
}

export const useTranslationStore = create<TranslationState>()((set) => ({
  language: LanguageEnum.FR,
  setLanguage: (newLanguage: LanguageEnum) =>
    set(() => ({ language: newLanguage })),
}));

export const { getInitialState, getState, setState, subscribe } =
  useTranslationStore;
