import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

interface ExperienceProps {
    section: number;
    windowWidth: number;
}

interface Animation {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
}

interface AnimationType {
    desktop: Record<number, Animation>;
    mobile: Record<number, Animation>;
}

const vrAnimations: AnimationType = {
    desktop: {
        0: {
            x: -0.52,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        },
        2: {
            x: 1,
            y: 0.7,
            scaleX: 0.4 * 2,
            scaleY: 0.4 * 2,
            scaleZ: 0.4 * 2,
            rotateX: Math.PI,
            rotateY: Math.PI / 64,
            rotateZ: Math.PI / -1.05,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        },
        4: {
            x: 10,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        }
    },
    mobile: {
        0: {
            x: -0.52,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        },
        4: {
            x: 10,
            y: -1,
            scaleX: 0.32,
            scaleY: 0.32,
            scaleZ: 0.32,
            rotateX: 0,
            rotateY: Math.PI / -2,
            rotateZ: 0,
        },
    }
};

const laptopAnimations: AnimationType = {
    desktop: {
        0: {
            x: 0.08,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
        1: {
            x: 1,
            y: 0.2,
            scaleX: 0.3,
            scaleY: 0.3,
            scaleZ: 0.3,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
        4: {
            x: 10,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
    },
    mobile: {
        0: {
            x: 0.08,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
        1: {
            x: 0,
            y: 0.6,
            scaleX: 0.4,
            scaleY: 0.4,
            scaleZ: 0.4,
            rotateX: 0,
            rotateY: Math.PI / 4,
            rotateZ: 0,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
        4: {
            x: 10,
            y: -1,
            scaleX: 0.24,
            scaleY: 0.24,
            scaleZ: 0.24,
            rotateX: 0,
            rotateY: Math.PI / 64,
            rotateZ: 0,
        },
    }
};

const phoneAnimations: AnimationType = {
    desktop: {
        0: {
            x: 0.56,
            y: -1,
            scaleX: 0.0048,
            scaleY: 0.0048,
            scaleZ: 0.0048,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.0048,
            scaleY: 0.0048,
            scaleZ: 0.0048,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
        },
        4: {
            x: 0,
            y: 0,
            scaleX: 0.05,
            scaleY: 0.05,
            scaleZ: 0.05,
            rotateX: 0,
            rotateY: Math.PI / -4,
            rotateZ: Math.PI / -6,
        },
    },
    mobile: {
        0: {
            x: 0.56,
            y: -1,
            scaleX: 0.0048,
            scaleY: 0.0048,
            scaleZ: 0.0048,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
        },
        3: {
            x: 10,
            y: -1,
            scaleX: 0.0048,
            scaleY: 0.0048,
            scaleZ: 0.0048,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
        },
        4: {
            x: 0,
            y: 0,
            scaleX: 0.04,
            scaleY: 0.04,
            scaleZ: 0.04,
            rotateX: 0,
            rotateY: Math.PI / -4,
            rotateZ: Math.PI / -6,
        },
    }
};

const getAnimation = (animations: AnimationType, section: number, windowWidth: number) => {
    if (windowWidth < 1024) {
        const value = animations.mobile[section];
        if (value) {
            return value;
        } else {
            return animations.mobile[0];
        }
    } else {
        const value = animations.desktop[section];
        if (value) {
            return value;
        } else {
            return animations.desktop[0];
        }
    }
};

export function Experience(props: ExperienceProps) {
    const laptop = useGLTF("models/laptop.glb");
    const phone = useGLTF("models/phone.glb");
    const vr = useGLTF("models/vr.glb");

    return (
        <>
            <mesh>
                <ambientLight intensity={1} />
                <motion.primitive
                    object={laptop.scene}
                    position={[0.08, -1, 0]}
                    scale={[0.24, 0.24, 0.24]}
                    animate={getAnimation(laptopAnimations, props.section, props.windowWidth)}
                />
                <motion.primitive
                    object={phone.scene}
                    position={[0.56, -1, 0]}
                    scale={[0.0048, 0.0048, 0.0048]}
                    rotation={[0, Math.PI / 2, 0]}
                    animate={getAnimation(phoneAnimations, props.section, props.windowWidth)}
                />
                <motion.primitive
                    object={vr.scene}
                    position={[-0.52, -1, 0]}
                    scale={[0.32, 0.32, 0.32]}
                    rotation={[0, Math.PI / -2, 0]}
                    animate={getAnimation(vrAnimations, props.section, props.windowWidth)}
                />
                {/* <primitive
                    object={vr.scene}
                    position={[1, 0.2, 0]}
                    scale={[0.4 * 2, 0.4 * 2, 0.4 * 2]}
                    rotation={[Math.PI, Math.PI / 64, Math.PI / -1.05]}
                    children-0-castShadow
                /> */}
                {/* <primitive
                    object={phone.scene}
                    position={[0.9, 0.1, 0.9]}
                    scale={[0.006 * 3, 0.006 * 3, 0.006 * 3]}
                    rotation={[0, Math.PI / -4, Math.PI / -8]}
                    children-0-castShadow
                /> */}
                {/* <primitive
                    object={phone.scene}
                    position={[-0.3, 0, 1.68]}
                    scale={[0.006 * 4, 0.006 * 4, 0.006 * 4]}
                    rotation={[0, Math.PI / -4, Math.PI / -8]}
                    children-0-castShadow
                /> */}
            </mesh>
        </>
    );
};