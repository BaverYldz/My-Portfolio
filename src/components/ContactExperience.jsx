import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, Suspense, useState, useRef, useEffect } from "react";
import { usePerformance } from '../hooks/usePerformance';

import { Computer } from "./Models/Computer-optimized";

const ContactExperience = memo(() => {
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef(null);
    const { isLowPerformance } = usePerformance();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting || entry.intersectionRatio > 0);
            },
            { threshold: 0 }
        );

        const currentRef = canvasRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={canvasRef} className="w-full h-full">
            <Canvas
                shadows={!isLowPerformance}
                camera={{ position: [0, 3, 7], fov: 45 }}
                dpr={isLowPerformance ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2)}
                performance={{ min: 0.5 }}
                frameloop={isVisible ? 'always' : 'never'}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} color="#aa7228ff" />

                    {!isLowPerformance && (
                        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
                    )}

                    <directionalLight
                        position={[5, 9, 1]}
                        castShadow={!isLowPerformance}
                        intensity={isLowPerformance ? 1.5 : 2.5}
                        color="#ffd9b3"
                    />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                        enableDamping
                        dampingFactor={0.05}
                    />

                    <group scale={[1, 1, 1]}>
                        <mesh
                            receiveShadow={!isLowPerformance}
                            position={[0, -1.5, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        >
                            <planeGeometry args={[30, 30]} />
                            <meshStandardMaterial color="#a46b2d" />
                        </mesh>
                    </group>

                    <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isLowPerformance}>
                        <Computer />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
});

ContactExperience.displayName = 'ContactExperience';

export default ContactExperience;