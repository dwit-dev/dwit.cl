import { Experience } from "@/components/3d/experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { createLazyFileRoute } from "@tanstack/react-router";
import { LanguageContextProvider } from "@/components/providers/language-provider";
import { HeroSection } from "@/components/landing/hero-section";
import { Section } from "@/components/section";
// import { LanguageSelector } from "@/components/language-selector";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="h-screen">
            <Canvas shadows camera={{
                position: [3, 3, 3],
                fov: 30,
            }}>
                <color attach="background" args={["#ececec"]} />
                <ScrollControls pages={6} damping={0.1}>
                    <Experience />
                    <Scroll html>
                        <LanguageContextProvider>
                            <div className="w-screen overflow-y-scroll">
                                {/* <LanguageSelector /> */}
                                <HeroSection />
                                <Section>
                                    <h1>About Us</h1>
                                </Section>
                                <Section>
                                    <h1>Services</h1>
                                </Section>
                                <Section>
                                    <h1>Showcase</h1>
                                </Section>
                                <Section>
                                    <h1>Why Choose Us</h1>
                                </Section>
                                <Section>
                                    <h1>Call to Action / Footer</h1>
                                </Section>
                            </div>
                        </LanguageContextProvider>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}
