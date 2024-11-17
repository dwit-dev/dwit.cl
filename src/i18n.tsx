import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from "@/assets/languages/english.json";
import spanish from "@/assets/languages/spanish.json";

const languages = {
    en: {
        translation: english,
    },
    es: {
        translation: spanish,
    },
};

i18next.use(initReactI18next).init({
    resources: languages,
    lng: "es",
});

export default i18next;