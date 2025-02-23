import { useLanguageContext } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section, ISectionProps } from "@/components/section";
import { Mail } from "lucide-react";
import LinkedinIcon from "@/assets/linkedin.svg?react";
import InstagramIcon from "@/assets/instagram.svg?react";
import GithubIcon from "@/assets/github.svg?react";

export function CallToActionSection(props: ISectionProps) {
    const { t } = useLanguageContext();
    return (
        <Section section={props.section}>
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                        {t("call_to_action_title")}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        {t("call_to_action_description")}
                    </p>
                    <Button size="lg" className="w-full sm:w-auto rounded-full">
                        {t("contact_us_button")}
                    </Button>
                </div>
            </div>

            <footer className="container mx-auto px-4 py-8">
                <Separator className="mb-8 bg-slate-700" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">{t("contact")}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>dwit@dwit.cl</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">{t("follow_us")}</h3>
                        <div className="flex gap-4">
                            <a href="#">
                                <LinkedinIcon className="w-12 h-12 text-indigo-600 hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="#">
                                <InstagramIcon className="w-12 h-12 text-indigo-600 hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="#">
                                <GithubIcon className="w-12 h-12 text-indigo-600 hover:text-blue-400 transition-colors"/>
                            </a>
                        </div>
                    </div>
                    {/* <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <div className="space-y-2">
                            <a href="#" className="block hover:text-blue-400 transition-colors">
                                About Us
                            </a>
                            <a href="#" className="block hover:text-blue-400 transition-colors">
                                Careers
                            </a>
                            <a href="#" className="block hover:text-blue-400 transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div> */}
                </div>
                <Separator className="my-8 bg-slate-700" />
                <div className="text-center">
                    {t("dwit_rights")}
                </div>
            </footer>
        </Section>
    );
}
