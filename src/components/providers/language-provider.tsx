import React from "react";
import { useTranslation } from "react-i18next";
import { Language, LanguageCode, LanguageContext } from "@/hooks/language-context";

interface LanguageContextProviderProps {
    children: React.ReactNode;
}

export function LanguageContextProvider(props: LanguageContextProviderProps) {
    const languages: Language[] = [
        { code: "es", name: "Español" },
        { code: "en", name: "English" },
    ];

    const { t, i18n } = useTranslation();

    const setLanguage = (code: LanguageCode) => {
        i18n.changeLanguage(code);
    };

    return (
        <LanguageContext.Provider
            value={{ t, i18n, setLanguage, languages }}
        >
            {props.children}
        </LanguageContext.Provider>
    );
}
