import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

interface ScrollManagerProps {
    section: number;
    onSectionChange: (section: number) => void;
}

export function ScrollManager({ section, onSectionChange }: ScrollManagerProps) {
    const data = useScroll();
    const lastScroll = useRef<number>(0);
    const isAnimating = useRef<boolean>(false);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: data.el.clientHeight * section,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            },
        });
    }, [section]);

    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.offset;
            return;
        }

        const currentSection = Math.floor(data.offset * data.pages);

        if (data.offset > lastScroll.current && currentSection === 0) {
            onSectionChange(currentSection + 1 >= 5 ? currentSection : currentSection + 1);
        }

        if (data.offset < lastScroll.current &&
            data.offset < 1 / (data.pages - 1)
        ) {
            onSectionChange(currentSection - 1 < 0 ? 0 : currentSection - 1);
        }

        lastScroll.current = data.offset;
    });

    return <></>;
}