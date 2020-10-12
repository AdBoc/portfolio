import i18n from "i18next"
import common_pl from "./pl/common_pl.json"
import common_en from "./en/common_en.json"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: common_en
  },
  pl: {
    translation: common_pl
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl",
    fallbackLng: "pl",
    keySeparator: ".", // keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n