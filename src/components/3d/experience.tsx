import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

interface ExperienceProps {
    section: number;
}

export function Experience(props: ExperienceProps) {
    const laptop = useGLTF("models/laptop.glb");
    const phone = useGLTF("models/phone.glb");
    const vr = useGLTF("models/vr.glb");

    const start_y = -0.5; // 0 desktop
    const start_x = 0.1; // 0.7 desktop
    const scale = 0.8; // 1 desktop

    return (
        <>
            <mesh>
                <ambientLight intensity={1} />
                <motion.primitive
                    object={laptop.scene}
                    position={[(0 + start_x) * scale, 0 + start_y, 0]}
                    scale={[0.3 * scale, 0.3 * scale, 0.3 * scale]}
                />
                <motion.primitive
                    object={phone.scene}
                    position={[(0.6 + start_x) * scale, 0 + start_y, 0]}
                    scale={[0.006 * scale, 0.006 * scale, 0.006 * scale]}
                    rotation={[0, Math.PI / 2, 0]}
                />
                <motion.primitive
                    object={vr.scene}
                    position={[(-0.75 + start_x) * scale, 0 + start_y, 0]}
                    scale={[0.4 * scale, 0.4 * scale, 0.4 * scale]}
                    rotation={[0, Math.PI / -2, 0]}
                    animate={{
                        x: props.section === 1 ? 1 : (-0.75 + start_x) * scale,
                        y: props.section === 1 ? 0.2 : 0 + start_y,
                        scaleX: props.section === 1 ? 0.4 * 2 : 0.4 * scale,
                        scaleY: props.section === 1 ? 0.4 * 2 : 0.4 * scale,
                        scaleZ: props.section === 1 ? 0.4 * 2 : 0.4 * scale,
                        rotateX: props.section === 1 ? Math.PI : 0,
                        rotateY: props.section === 1 ? Math.PI / 64 : Math.PI / -2,
                        rotateZ: props.section === 1 ? Math.PI / -1.05 : 0,
                    }}
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