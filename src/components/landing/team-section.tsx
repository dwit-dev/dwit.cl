import { useLanguageContext } from "@/hooks/language-context";
import { Section } from "@/components/section";

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
}

function TeamMember({ image, name, role }: TeamMemberProps) {
    return (
        <div className="space-y-4 flex flex-col items-center">
            <div className="w-full max-w-[8rem] aspect-square rounded-full overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-center">{name}</h3>
            <p className="text-indigo-600 text-center">{role}</p>
        </div>
    );
}

export function TeamSection() {
    const { t } = useLanguageContext();

    const team = [
        {
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256",
            name: "David Chen",
            role: "Chief Executive Officer",
        },
        {
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256",
            name: "Sarah Martinez",
            role: "Chief Technology Officer",
        },
        {
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256",
            name: "Michael Foster",
            role: "Head of IoT Solutions",
        },
        {
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256",
            name: "Emily Zhang",
            role: "Director of VR Development",
        },
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256",
            name: "James Wilson",
            role: "Head of Game Engineering",
        },
    ];

    return (
        <Section>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 md:mb-16">{t("team_title")}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-h-full flex-grow lg:place-items-center">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className={`${
                            index === team.length - 1 && team.length % 2 !== 0
                                ? "col-span-2 lg:col-span-1"
                                : ""
                        }`}
                    >
                        <TeamMember {...member} />
                    </div>
                ))}
            </div>
        </Section>
    );
}
