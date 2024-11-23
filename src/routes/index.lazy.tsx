import { Experience } from "@/components/3d/experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { createLazyFileRoute } from "@tanstack/react-router";
import { LanguageContextProvider } from "@/components/providers/language-provider";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TeamSection } from "@/components/landing/team-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { StudioShowcaseSection } from "@/components/landing/studio-showcase-section";
import { useState } from "react";
import { ScrollManager } from "@/components/3d/scroll-manager";
// import { LanguageSelector } from "@/components/language-selector";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const [section, setSection] = useState<number>(0);

    return (
        <div className="h-screen">
            <Canvas shadows camera={{
                position: [3, 3, 3],
                fov: 30,
            }}>
                <color attach="background" args={["#ececec"]} />
                <ScrollControls pages={5} damping={0.1}>
                    <ScrollManager section={section} onSectionChange={setSection} />
                    <Experience section={section} />
                    <Scroll html>
                        <LanguageContextProvider>
                            <div className="w-screen overflow-y-scroll">
                                {/* <LanguageSelector /> */}
                                <HeroSection />
                                <ServicesSection />
                                <StudioShowcaseSection />
                                <TeamSection />
                                <CallToActionSection />
                            </div>
                        </LanguageContextProvider>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}
