import type { LanguageType } from "../types/language";

export enum LanguageEnum {
  FR = "fr",
  EN = "en",
}

export const LanguageList: LanguageType[] = [
  {
    key: LanguageEnum.EN,
    name: "English",
  },
  {
    key: LanguageEnum.FR,
    name: "Français",
  },
];
