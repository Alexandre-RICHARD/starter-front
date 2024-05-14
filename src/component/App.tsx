import "./App.scss";

import React from "react";
import { useShallow } from "zustand/react/shallow";

import { LanguageList } from "../enum/language.enum";
import { CookieHelper } from "../helper/cookie.helper";
import { useTranslation } from "../helper/translation.helper";
import { useCombinedStore } from "../store/combined.store";

export const App: React.FC = () => {
  const [language, setLanguage] = useCombinedStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );
  const T = useTranslation();

  return (
    <div className="lang-container">
      <h1>Starter front</h1>
      <fieldset>
        <legend>{T.getT("selectLanguage")}</legend>
        {LanguageList.map((it) => (
          <div key={it.key}>
            <input
              type="radio"
              id={it.key}
              name={it.name}
              value={it.key}
              checked={language === it.key}
              onChange={() => {
                setLanguage(it.key);
                CookieHelper.getCookie("visits");
              }}
            />
            <label htmlFor={it.key}>{it.name}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};
