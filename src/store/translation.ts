import { LanguageEnum } from "@src/enum/language.enum";
import { CookieHelper } from "@src/helper/cookie.helper";
import { create } from "zustand";

interface TranslationState {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
}

export const useTranslationStore = create<TranslationState>()((set) => ({
  language: (CookieHelper.getCookie("lang") as LanguageEnum) || LanguageEnum.EN,
  setLanguage: (newLanguage: LanguageEnum) => {
    CookieHelper.setCookie("lang", newLanguage, 24 * 365 * 100);
    set(() => ({ language: newLanguage }));
  },
}));

export const { getInitialState, getState, setState, subscribe } =
  useTranslationStore;
