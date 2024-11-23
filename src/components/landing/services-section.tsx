import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/section";
import { useLanguageContext } from "@/hooks/language-context";
import VrIcon from "@/assets/vr.svg?react";
import { Code2, Cpu } from "lucide-react";

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    features: string[];
}

function ServiceCard(props: ServiceCardProps) {
    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
                <div className="flex items-start space-x-4 h-16">
                    <div className="h-full flex items-center justify-center space-x-5">
                        <props.icon className="w-12 h-12 text-indigo-600" />
                        <div className="text-lg font-bold">{props.title}</div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {props.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export function ServicesSection() {
    const { t } = useLanguageContext();

    const services: ServiceCardProps[] = [
        {
            icon: Code2,
            title: t("services_software_title"),
            features: [t("services_software_bullet_1"), t("services_software_bullet_2")],
        },
        {
            icon: Cpu,
            title: t("services_iot_title"),
            features: [t("services_iot_bullet_1"), t("services_iot_bullet_2")],
        },
        {
            icon: VrIcon,
            title: t("services_vr_3d_title"),
            features: [t("services_vr_3d_bullet_1"), t("services_vr_3d_bullet_2")],
        },
    ];

    return (
        <Section>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8">{t("services_title")}</h2>
            </div>
            <div className="flex-grow grid grid-cols-2">
                <div className="col-span-2 lg:col-span-1 space-y-2 my-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
