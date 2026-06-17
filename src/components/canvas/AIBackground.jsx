import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sparkles, Preload } from "@react-three/drei";
import { easing } from "maath";
import * as THREE from "three";

const COLORS = {
  dark: { accent: "#7c3aed", success: "#14b8a6" },
  light: { accent: "#6d28d9", success: "#0f766e" },
};

const createSpherePoints = (count, radius) => {
  const points = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    const index = i * 3;

    points[index] = r * Math.sin(phi) * Math.cos(theta);
    points[index + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[index + 2] = r * Math.cos(phi);
  }

  return points;
};

const createNeuralGraph = (nodeCount, spread, linkDistance) => {
  const nodes = Array.from({ length: nodeCount }, () => [
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread * 0.75,
    (Math.random() - 0.5) * spread * 0.45,
  ]);

  const linePositions = [];

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dz = nodes[i][2] - nodes[j][2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < linkDistance) {
        linePositions.push(
          nodes[i][0], nodes[i][1], nodes[i][2],
          nodes[j][0], nodes[j][1], nodes[j][2]
        );
      }
    }
  }

  return {
    nodes: new Float32Array(nodes.flat()),
    lines: new Float32Array(linePositions),
    nodeCount,
  };
};

const ParticleCloud = ({ color }) => {
  const outerRef = useRef();
  const innerRef = useRef();
  const [positions] = useState(() => createSpherePoints(900, 2.2));

  useFrame((state, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.04;
      innerRef.current.rotation.x -= delta * 0.02;
    }

    if (outerRef.current) {
      easing.damp3(
        outerRef.current.rotation,
        [state.pointer.y * 0.12, state.pointer.x * 0.12, 0],
        0.18,
        delta
      );
    }
  });

  return (
    <group ref={outerRef}>
      <group ref={innerRef}>
        <Points positions={positions} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color={color}
            size={0.003}
            sizeAttenuation
            depthWrite={false}
            opacity={0.7}
          />
        </Points>
      </group>
    </group>
  );
};

const NeuralMesh = ({ accent, success }) => {
  const groupRef = useRef();
  const pulseRef = useRef(0);

  const graph = useMemo(() => createNeuralGraph(20, 4.5, 1.6), []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(graph.lines, 3));
    return geometry;
  }, [graph.lines]);

  useFrame((state, delta) => {
    pulseRef.current += delta;

    if (groupRef.current) {
      easing.damp3(
        groupRef.current.rotation,
        [state.pointer.y * 0.1, state.pointer.x * 0.1, 0],
        0.15,
        delta
      );
      groupRef.current.position.y = Math.sin(pulseRef.current * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0.8, 0, -0.2]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={accent} transparent opacity={0.28} />
      </lineSegments>
      <Points positions={graph.nodes} stride={3}>
        <PointMaterial
          transparent
          color={success}
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.95}
        />
      </Points>
      <Points positions={graph.nodes} stride={3}>
        <PointMaterial
          transparent
          color={accent}
          size={0.025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
};

const AIScene = ({ theme }) => {
  const colors = theme === "light" ? COLORS.light : COLORS.dark;

  return (
    <>
      <ambientLight intensity={0.4} />
      <ParticleCloud color={colors.accent} />
      <NeuralMesh accent={colors.accent} success={colors.success} />
      <Sparkles
        count={35}
        scale={[7, 5, 3]}
        size={2}
        speed={0.22}
        color={colors.accent}
        opacity={0.45}
      />
      <Sparkles
        count={20}
        scale={[5, 4, 2]}
        size={1.5}
        speed={0.15}
        color={colors.success}
        opacity={0.3}
      />
      <Preload all />
    </>
  );
};

const AIBackground = ({ theme = "dark" }) => (
  <div className='ai-background-canvas' aria-hidden='true'>
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 55 }}
      dpr={[1, 1.25]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
    >
      <Suspense fallback={null}>
        <AIScene theme={theme} />
      </Suspense>
    </Canvas>
  </div>
);

export default AIBackground;
