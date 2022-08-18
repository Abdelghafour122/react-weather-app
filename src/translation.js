import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .use(HttpApi)
  .init({
    debug: true,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      // stores in a cookie, delete later
      caches: ["cookie"],
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + "/Assets/{{lng}}/translation.json",
    },
    // react: { useSuspense: false },
  });

export default i18n;
