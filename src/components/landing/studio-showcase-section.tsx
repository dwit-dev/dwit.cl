import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Section, ISectionProps } from "@/components/section";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <Card className="overflow-hidden w-full">
            <div className="flex flex-row sm:flex-col h-full">
                <div className="w-1/3 sm:w-full h-auto sm:h-[200px]">
                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <CardContent className="w-2/3 sm:w-full p-4 flex flex-col justify-center">
                    <CardTitle className="text-lg font-semibold mb-2">{props.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                        {props.description}
                    </CardDescription>
                </CardContent>
            </div>
        </Card>
    );
}

export function StudioShowcaseSection(props: ISectionProps) {
    const projects: ProjectCardProps[] = [
        {
            image: "",
            title: "Parque Virtual",
            description: "This card uses the full width of its parent component, making it suitable for grid layouts.",
        },
        {
            image: "",
            title: "Parque Virtual",
            description: "This card uses the full width of its parent component, making it suitable for grid layouts.",
        },
        {
            image: "",
            title: "Parque Virtual",
            description: "This card uses the full width of its parent component, making it suitable for grid layouts.",
        }
    ]; 

    return (
        <Section section={props.section} disableClasses={true}>
            <div className="relative w-full h-full">
                <div className="absolute z-[-100] w-full h-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1">
                        <img src="brush-stroke.png" className="h-screen w-full scale-[1.2]" />
                    </div>
                </div>
                <div className="px-8 pt-20 md:pt-16 h-full max-w-screen-2xl mx-auto flex flex-col">
                    <h1 className="text-white text-7xl px-8 pt-16 md:pt-24">Studio</h1>
                    <h1 className="text-gray-500 text-5xl pt-4 px-16 pb-8">Showcase</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 flex-grow md:place-items-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
