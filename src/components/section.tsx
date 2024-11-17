import React from "react";

interface SectionProps {
    children?: React.ReactNode;
}

export function Section(props: SectionProps) {
    return (
        <section
            className={`
            h-screen w-full pt-32 p-8 max-w-screen-2xl mx-auto
            flex flex-col
            `}
        >
            {props.children}
        </section>
    );
}