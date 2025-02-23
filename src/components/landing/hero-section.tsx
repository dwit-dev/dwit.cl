import "@/styles/landing.css";
import { Section, ISectionProps } from "@/components/section";
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/hooks/language-context";

interface AccentTextProps {
    text: string;
}

const AccentText: React.FC<AccentTextProps> = ({ text }) => {
    const parseText = (input: string): React.ReactNode[] => {
        const parts = input.split(/(@.*?@)/);

        return parts.map((part, index) => {
            if (part.startsWith("@") && part.endsWith("@")) {
                const accentContent = part.slice(1, -1);
                return (
                    <span key={index} className="text-gradient-shadow">
                        <span className="font-bold bg-gradient-to-r from-pink-500 to-green-400 text-transparent bg-clip-text">
                            {accentContent}
                        </span>
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    return <>{parseText(text)}</>;
};

export function HeroSection(props: ISectionProps) {
    const { t } = useLanguageContext();

    return (
        <Section section={props.section}>
            <div className="flex-grow h-screen">
                <div className="grid grid-cols-3">
                    <div className="col-span-3 xl:col-span-2 flex flex-col justify-start">
                        <h1 className="font-medium text-title uppercase">
                            <AccentText text={t("headline")} />
                        </h1>
                    </div>
                </div>
                <div className="pl-2 pt-3 pb-16 grid grid-cols-3">
                    <div className="col-span-2 xl:col-span-1">
                        <p className="font-light text-subtitle">{t("subheadline")}</p>
                    </div>
                </div>
                <div
                    className="flex md:contents justify-center items-center"
                >
                    <Button className="font-light text-1xl p-7 mx-5 mb-20 md:text-2xl md:p-10 rounded-full">
                        {t("contact_us_button")}
                    </Button>
                </div>
            </div>
        </Section>
    );
}
