import { Globe } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { LanguageCode, useLanguageContext } from "@/hooks/language-context";

export function LanguageSelector() {
    const { i18n, languages, setLanguage } = useLanguageContext();
    const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(i18n.language as LanguageCode);

    const changeLanguage = (code: LanguageCode) => {
        setCurrentLanguage(code);
        setLanguage(code);
    };

    useEffect(() => {
        const userLanguage = navigator.language || i18n.language;
        const index = userLanguage.indexOf("-");
        const language = index !== -1 ? userLanguage.substring(0, index) : userLanguage
        changeLanguage(language as LanguageCode);
    }, []);

    return (
        <Select value={currentLanguage} onValueChange={changeLanguage}>
            <SelectTrigger>
                <Globe className="mr-2 h-4 w-4 shrink-0" />
                {languages.find((language) => language.code == currentLanguage)?.name}
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {languages.map((language, index) => (
                        <SelectItem
                            key={`${language.code}-${index}}`}
                            value={language.code}
                        >
                            {language.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
