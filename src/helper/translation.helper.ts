import { common as enCommon } from "../assets/translation/en/common";
import { common as frCommon } from "../assets/translation/fr/common";
import { LanguageEnum } from "../enum/language.enum";
import { getState } from "../store/combined.store";

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
    return key;
  };

  return { getT: getTranslation };
};
