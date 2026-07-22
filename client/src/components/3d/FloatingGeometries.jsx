import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

export const FloatingGeometries = () => {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();

  useFrame((state, delta) => {
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.3;
      mesh1.current.rotation.y += delta * 0.4;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x -= delta * 0.2;
      mesh2.current.rotation.z += delta * 0.3;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y += delta * 0.5;
    }
    if (mesh4.current) {
      mesh4.current.rotation.x += delta * 0.15;
      mesh4.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Distorted Glowing Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={mesh1} position={[0.5, 0.2, 0]} scale={1.8}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#6C63FF"
            emissive="#00D4FF"
            emissiveIntensity={0.25}
            roughness={0.1}
            metalness={0.8}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Orbiting Wobble Torus Knot */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={mesh2} position={[-2.8, 1.2, -1]} scale={0.7}>
          <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
          <MeshWobbleMaterial
            color="#00D4FF"
            emissive="#6C63FF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.9}
            factor={0.4}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Secondary Floating Octahedron (Magenta Highlight) */}
      <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2.5}>
        <mesh ref={mesh3} position={[3.2, -1.2, -1]} scale={0.9}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#FF6EC7"
            emissive="#FF6EC7"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.75}
            wireframe
          />
        </mesh>
      </Float>

      {/* Background Floating Dodecahedron */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={mesh4} position={[-2.2, -1.8, -2]} scale={0.8}>
          <dodecahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#6C63FF"
            emissive="#00D4FF"
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>
      </Float>
    </group>
  );
};
