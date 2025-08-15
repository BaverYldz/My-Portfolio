import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    Math.random() * 10 + 5,
                    (Math.random() - 0.5) * 10,
                ],
                speed: 0.005 + Math.random() * 0.005,
            });
        }
        return temp;
    }, [count]);

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        particles.forEach((p, i) => {
            positions[i * 3] = p.position[0];
            positions[i * 3 + 1] = p.position[1];
            positions[i * 3 + 2] = p.position[2];
        });
        return positions;
    }, [particles, count]);

    useFrame(() => {
        if (mesh.current) {
            const positionAttribute = mesh.current.geometry.attributes.position;
            const positions = positionAttribute.array;

            for (let i = 0; i < count; i++) {
                let y = positions[i * 3 + 1];
                y -= particles[i].speed;
                if (y < -2) y = Math.random() * 10 + 5;
                positions[i * 3 + 1] = y;
            }
            positionAttribute.needsUpdate = true;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.1}
                transparent
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default Particles;