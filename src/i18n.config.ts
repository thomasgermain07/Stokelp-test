import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import FrTranslation from "./Translation/fr.json";

const resources = {
  fr: {
    translation: FrTranslation,
  },
};

/**
 * Default configuration
 * This one does not auto-detect language
 */
i18n.use(initReactI18next).init({
  lng: "fr",
  resources,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
