"use strict";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedGradient() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!sphereRef.current) return;
        const { clock, mouse } = state;
        sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.1);
        sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.1);
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
                <MeshDistortMaterial
                    color="#0ea5e9"
                    speed={3}
                    distort={0.4}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

export const Scene3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-slate-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <AnimatedGradient />
            </Canvas>
        </div>
    );
};