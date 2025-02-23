import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LanguageCode } from "@/hooks/language-context";

interface LanguageStore {
    code: LanguageCode;
    setLanguage: (code: LanguageCode) => void;
}

export const useLanguageStore = create(
    persist<LanguageStore>(
        (set) => ({
            code: "es",
            setLanguage: (code: LanguageCode) => set({ code }),
        }),
        {
            name: "language-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);
