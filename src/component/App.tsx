import React from "react";
import { useShallow } from "zustand/react/shallow";

import { useTranslation } from "@helper/translation.helper";
import { LanguageList } from "@src/enum/language.enum";
import { useTranslationStore } from "@store/translation";
import "./App.scss";

export const App: React.FC = () => {
  const [language, setLanguage] = useTranslationStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );
  const T = useTranslation();

  return (
    <div className="lang-container">
      <h1>Starter front</h1>
      <fieldset>
        <legend>{T.getT("selectLanguage")}</legend>
        {LanguageList.map((it) => (
          <div>
            <input
              type="radio"
              id={it.key}
              name={it.name}
              value={it.key}
              checked={language === it.key}
              onChange={() => setLanguage(it.key)}
            />
            <label htmlFor={it.key}>{it.name}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};