import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../../lang/es.json";
import English from "../../lang/en.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local.indexOf("es") !== -1) {
  lang = Spanish;
} else {
  if (local.indexOf("en") !== -1) {
    lang = English;
  } 
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "es") {
      setMessages(Spanish);
    } else {
      if (newLocale === "en") {
        setMessages(English);
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;
