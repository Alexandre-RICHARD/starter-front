import { create } from "zustand";

import { CookieEnum } from "../enum/cookie.enum";
import { LanguageEnum } from "../enum/language.enum";
import { CookieHelper } from "../helper/cookie.helper";

interface TranslationState {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
}

export const useTranslationStore = create<TranslationState>()((set) => ({
  language:
    (CookieHelper.getCookie(CookieEnum.LANG) as LanguageEnum) ||
    LanguageEnum.EN,
  setLanguage: (newLanguage: LanguageEnum) => {
    CookieHelper.setCookie(CookieEnum.LANG, newLanguage, 24 * 365 * 100);
    set(() => ({ language: newLanguage }));
  },
}));

export const { getInitialState, getState, setState, subscribe } =
  useTranslationStore;
