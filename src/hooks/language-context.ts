import { createContext, useContext } from "react";
import { i18n } from "i18next";

export type LanguageCode = "es" | "en";

export interface Language {
    code: LanguageCode;
    name: string;
}

export interface LanguageContextProps {
    t: (key: string) => string; // Translation function
    i18n: i18n;
    setLanguage: (code: LanguageCode) => void; // Change event handler
    languages: Language[]; // Available languages
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguageContext = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguageContext must be used within a LanguageContextProvider");
    }
    return context;
};
