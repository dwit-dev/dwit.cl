import React, { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Dropdown {
    toggle: boolean;
    onClick: () => void;
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    dropdown?: Dropdown;
    children: React.ReactNode;
}

export const HeaderLink: React.FC<Props> = ({ href, dropdown, className, children, ...props }) => {
    const router = useRouter();

    // Determine if the link is active
    const pathname = router.state.location.pathname;
    const isActive = href === pathname || href === `/${pathname.split("/")[1]}`;

    // Add hover gradient behavior
    useEffect(() => {
        const hoverGradientElements = document.querySelectorAll(".hover-gradient");

        hoverGradientElements.forEach((hoverGradient) => {
            const onMouseMove = (e: Event) => {
                const event = e as MouseEvent;
                const target = event.currentTarget as HTMLElement;
                const { left, width } = target.getBoundingClientRect();
                const x = event.clientX - left;
                const midpoint = width / 2;

                const isHoveringLeft = x < midpoint;
                const gradientStyle = isHoveringLeft
                    ? "linear-gradient(to right, #ffffff, transparent)"
                    : "linear-gradient(to left, #ffffff, transparent)";

                target.style.backgroundImage = gradientStyle;
            };

            const onMouseLeave = (e: Event) => {
                const event = e as MouseEvent;
                const target = event.currentTarget as HTMLElement;
                target.style.backgroundImage = ""; // Reset the background
            };

            hoverGradient.addEventListener("mousemove", onMouseMove);
            hoverGradient.addEventListener("mouseleave", onMouseLeave);

            return () => {
                hoverGradient.removeEventListener("mousemove", onMouseMove);
                hoverGradient.removeEventListener("mouseleave", onMouseLeave);
            };
        });
    }, []);

    return (
        <>
            {dropdown !== undefined && (
                <button className={`${className}`} onClick={dropdown.onClick}>
                    <div className={`relative rounded-full ${isActive ? "bg-[#f3f3f3]" : ""}`}>
                        {isActive && (
                            <div className="absolute inset-0 flex justify-center -top-1 pointer-events-none">
                                <div className="bg-gray-800 rounded-full w-6 h-2"></div>
                            </div>
                        )}
                        <div className="hover-gradient py-1 pl-5 pr-3 rounded-full flex gap-1">
                            {children}
                            {dropdown.toggle && (
                                <ChevronDown />
                            ) || (
                                <ChevronRight />
                            )}
                        </div>
                    </div>
                </button>
            ) || (
                <a href={href} className={`${className}`} {...props}>
                    <div className={`relative rounded-full ${isActive ? "bg-[#f3f3f3]" : ""}`}>
                        {isActive && (
                            <div className="absolute inset-0 flex justify-center -top-1 pointer-events-none">
                                <div className="bg-gray-800 rounded-full w-6 h-2"></div>
                            </div>
                        )}
                        <div className="hover-gradient py-1 px-5 rounded-full">{children}</div>
                    </div>
                </a>
            )}
        </>
    );
};
