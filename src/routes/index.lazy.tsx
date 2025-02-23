import { Experience } from "@/components/3d/experience";
import { Canvas } from "@react-three/fiber";
import { createLazyFileRoute } from "@tanstack/react-router";
import { LanguageContextProvider } from "@/components/providers/language-provider";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TeamSection } from "@/components/landing/team-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { StudioShowcaseSection } from "@/components/landing/studio-showcase-section";
import { useEffect, useState } from "react";
// import { LanguageSelector } from "@/components/language-selector";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const [section, setSection] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        const observerOptions = {
            root: null, // Viewport
            threshold: 0.5, // Trigger when 50% of a section is visible
          };
      
          const observerCallback = (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log(entry.target.id);
              }
            });
          };
      
          const observer = new IntersectionObserver(observerCallback, observerOptions);
          const sections = document.querySelectorAll('.section');
      
          document.addEventListener("scroll", () => {
            sections.forEach((ref) => {
              if (ref) observer.observe(ref);
            });
          })

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LanguageContextProvider>
            <div className="h-screen">
                <div className="fixed w-full h-screen z-[-1000]">
                    <Canvas shadows camera={{
                        position: [3, 3, 3],
                        fov: 30,
                    }}>
                        <color attach="background" args={["#ececec"]} />
                        <Experience section={section} windowWidth={windowWidth} />
                    </Canvas>
                </div>
                <div className="scroller">
                    <HeroSection section={0} />
                    <ServicesSection section={1} />
                    <StudioShowcaseSection section={2} />
                    <TeamSection section={3} />
                    <CallToActionSection section={4} />
                </div>
            </div>
        </LanguageContextProvider>
    );
}
