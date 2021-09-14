import { useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
// Language data
import messagesEn from "../../assets/data/locales/en.json";
import messagesAr from "../../assets/data/locales/ar.json";

//import action
import { setLang } from "../../redux/actions/generalTypes";

// ** Menu msg obj
const menuMessages = {
  en: { ...messagesEn },
  ar: { ...messagesAr },
};

// ** Create Context
const Context = createContext();

const IntlProviderWrapper = ({ children }) => {
  const lang = useSelector((state) => state.general.lang) || "en";
  // ** States
  const [locale, setLocale] = useState(lang);
  const [messages, setMessages] = useState(menuMessages[lang]);
  //const [isRtl, setIsRtl] = useRTL();
  const dispatch = useDispatch();

  // ** Switches Language
  const switchLanguage = (lang) => {
    setLocale(lang);
    setMessages(menuMessages[lang]);
    // setIsRtl(lang === "ar");
    localStorage.setItem("lang", lang);
    dispatch(setLang(lang));
  };

  return (
    <Context.Provider value={{ locale, messages, switchLanguage }}>
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale={lang}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };
