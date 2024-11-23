import { Section } from "@/components/section";
import { useLanguageContext } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";

interface AccentTextProps {
    text: string;
}

const AccentText: React.FC<AccentTextProps> = ({ text }) => {
    const parseText = (input: string): React.ReactNode[] => {
        // Match all segments between @
        const parts = input.split(/(@.*?@)/);

        return parts.map((part, index) => {
            if (part.startsWith("@") && part.endsWith("@")) {
                // Remove the @ symbols and apply accent styling
                const accentContent = part.slice(1, -1);
                return (
                    <span key={index} className="text-gradient-shadow">
                        <span className="font-bold bg-gradient-to-r from-pink-500 to-green-400 text-transparent bg-clip-text">
                            {accentContent}
                        </span>
                    </span>
                );
            }
            return <span key={index}>{part}</span>; // Regular text
        });
    };

    return <>{parseText(text)}</>;
};

export function HeroSection() {
    const { t } = useLanguageContext();
    return (
        <Section>
            <div className="flex-grow">
                <div className="grid grid-cols-3">
                    <div className="col-span-3 xl:col-span-2 flex flex-col justify-start">
                        <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl uppercase">
                            <AccentText text={t("headline")} />
                        </h1>
                    </div>
                </div>
                <div className="pl-2 pt-3 grid grid-cols-3">
                    <div className="col-span-2 lg:col-span-1">
                        <p className="font-light">{t("subheadline")}</p>
                    </div>
                </div>
            </div>
            <div className="self-start mt-auto w-full flex justify-center md:justify-start">
                <Button className="m-5 font-light text-1xl p-7 mb-20 md:text-2xl md:p-10 rounded-full">
                    {t("contact_us_button")}
                </Button>
            </div>
        </Section>
    );
}
