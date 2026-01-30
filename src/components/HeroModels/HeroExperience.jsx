import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { memo, Suspense, useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room'
import HeroLights from './HeroLights';

import { usePerformance } from '../../hooks/usePerformance';


const CanvasLoader = () => (
    <div className="w-full h-full flex items-center justify-center bg-black/20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
);

const HeroExperience = memo(() => {
    const [isVisible, setIsVisible] = useState(true); // Hero always visible initially
    const canvasRef = useRef(null);
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { isLowPerformance } = usePerformance();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting || entry.intersectionRatio > 0.1);
            },
            { threshold: 0.1 }
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

    const pixelRatio = isLowPerformance ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;

    return (
        <div ref={canvasRef} className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                className='hover:cursor-grab'
                dpr={pixelRatio}
                performance={{ min: 0.5 }}
                frameloop={isVisible ? 'always' : 'never'}
                gl={{
                    antialias: !isLowPerformance,
                    alpha: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false
                }}
            >
                <Suspense fallback={null}>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        maxDistance={20}
                        minDistance={5}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                        enableDamping
                        dampingFactor={0.05}
                    />

                    {!isLowPerformance && <HeroLights />}

                    {/* Fallback light for low performance mode */}
                    {isLowPerformance && <ambientLight intensity={1} />}



                    <group
                        scale={isMobile ? 0.7 : 1}
                        position={[0, -3.5, 0]}
                        rotation={[0, -Math.PI / 4, 0]}
                    >
                        <Room isLowPerformance={isLowPerformance} />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    )
});

HeroExperience.displayName = 'HeroExperience';

export default HeroExperience