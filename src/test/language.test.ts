import { expect, test } from "vitest";

import { CookieEnum } from "../enum/cookie.enum";
import { LanguageEnum } from "../enum/language.enum";
import { CookieHelper } from "../helper/cookie.helper";
import { useTranslation } from "../helper/translation.helper";
import { getState, useCombinedStore } from "../store/combined.store";

test("State language should be valid language", () => {
  const currentLanguage = getState().language;
  expect(Object.values(LanguageEnum).includes(currentLanguage)).toBeTruthy();
});

test("Translation should be found", () => {
  const T = useTranslation();
  const key = "selectLanguage";
  const translation = T.getT(key);
  expect.soft(translation).not.toBe(key);
});

test("Change language", () => {
  useCombinedStore.setState({ language: LanguageEnum.EN });
  const newLanguageEN = getState().language;
  const cookieLanguage = CookieHelper.getCookie(CookieEnum.LANG);
  expect.soft(newLanguageEN === cookieLanguage);
  expect.soft(newLanguageEN).toBe(LanguageEnum.EN);
  useCombinedStore.setState({ language: LanguageEnum.FR });
  const newLanguageFR = getState().language;
  expect.soft(newLanguageFR).toBe(LanguageEnum.FR);
});
