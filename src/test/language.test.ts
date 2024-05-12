import { expect, test } from "vitest";

import { LanguageEnum } from "@enum/language.enum";
import { getState, useTranslationStore } from "@store/translation";
import { useTranslation } from "@src/helper/translation.helper";

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
  useTranslationStore.setState({ language: LanguageEnum.EN });
  const newLanguageEN = getState().language;
  expect.soft(newLanguageEN).toBe(LanguageEnum.EN);
  useTranslationStore.setState({ language: LanguageEnum.FR });
  const newLanguageFR = getState().language;
  expect.soft(newLanguageFR).toBe(LanguageEnum.FR);
});
