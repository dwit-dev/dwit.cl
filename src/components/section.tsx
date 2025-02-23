import React from "react";

interface SectionProps {
    section?: number;
    disableClasses?: boolean;
    children?: React.ReactNode;
}

export interface ISectionProps {
    section: number;
}

export function Section(props: SectionProps) {
    return (
        <section
            id={`section-${props.section || 0}`}
            className={`
            min-h-screen w-full ${
                props.disableClasses ? "" : "p-8 pt-20 md:pt-16 max-w-screen-2xl mx-auto flex flex-col"}
            `}
        >
            {props.children}
        </section>
    );
}