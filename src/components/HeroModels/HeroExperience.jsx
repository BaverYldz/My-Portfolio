import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { memo, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room'
import HeroLights from './HeroLights';
import { usePerformance } from '../../hooks/usePerformance';

// Loading fallback component
const CanvasLoader = () => (
    <div className="w-full h-full flex items-center justify-center bg-black/20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
);

const HeroExperience = memo(() => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { isLowPerformance } = usePerformance();

    // Reduce quality for low-performance devices
    const pixelRatio = isLowPerformance ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;

    return (
        <Canvas 
            camera={{ position: [0, 0, 15], fov: 45 }} 
            className='hover:cursor-grab'
            dpr={pixelRatio}
            performance={{ min: 0.5 }}
            gl={{ 
                antialias: !isLowPerformance,
                alpha: false,
                powerPreference: "high-performance"
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                    enableDamping
                    dampingFactor={0.05}
                />
                
                {!isLowPerformance && <HeroLights />}
                
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
    )
});

HeroExperience.displayName = 'HeroExperience';

export default HeroExperience