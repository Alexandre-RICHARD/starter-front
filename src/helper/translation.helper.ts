import { LanguageEnum } from "@enum/language.enum";
import { common as enCommon } from "@translation/en/common";
import { common as frCommon } from "@translation/fr/common";

import { getState } from "@store/translation";

type Translation = Record<string, string>;

const translationFiles: Record<LanguageEnum, Translation> = {
  [LanguageEnum.EN]: enCommon,
  [LanguageEnum.FR]: frCommon,
};

export const useTranslation = () => {
  const { language } = getState();

  const selectedLanguage = Object.values(LanguageEnum).includes(language)
    ? language
    : LanguageEnum.FR;

  const getTranslation = (key: string): string => {
    const translations = translationFiles[selectedLanguage][key];
    if (translations) {
      return translations;
    }
    return `_${key}_`;
  };

  return { getT: getTranslation };
};
