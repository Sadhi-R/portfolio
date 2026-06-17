import { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sparkles, Line, Preload } from "@react-three/drei";
import { easing } from "maath";

const ACCENT = { dark: "#7c3aed", light: "#6d28d9" };
const SUCCESS = { dark: "#14b8a6", light: "#0f766e" };

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

const createNeuralNodes = (count, spread) => {
  const nodes = [];

  for (let i = 0; i < count; i += 1) {
    nodes.push([
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread * 0.7,
      (Math.random() - 0.5) * spread * 0.5,
    ]);
  }

  return nodes;
};

const createNeuralConnections = (nodes, maxDistance) => {
  const connections = [];

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dz = nodes[i][2] - nodes[j][2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < maxDistance) {
        connections.push([...nodes[i], ...nodes[j]]);
      }
    }
  }

  return connections;
};

const ParticleField = ({ theme }) => {
  const outerRef = useRef();
  const innerRef = useRef();
  const accent = theme === "light" ? ACCENT.light : ACCENT.dark;
  const [sphere] = useState(() => createSpherePoints(2200, 1.6));

  useFrame((state, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta / 18;
      innerRef.current.rotation.y -= delta / 22;
    }

    if (outerRef.current) {
      easing.damp3(
        outerRef.current.rotation,
        [state.pointer.y * 0.14, state.pointer.x * 0.14, 0],
        0.22,
        delta
      );
    }
  });

  return (
    <group ref={outerRef}>
      <group ref={innerRef} rotation={[0, 0, Math.PI / 5]}>
        <Points positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color={accent}
            size={0.0018}
            sizeAttenuation
            depthWrite={false}
            opacity={0.85}
          />
        </Points>
      </group>
    </group>
  );
};

const NeuralNetwork = ({ theme }) => {
  const groupRef = useRef();
  const accent = theme === "light" ? ACCENT.light : ACCENT.dark;
  const success = theme === "light" ? SUCCESS.light : SUCCESS.dark;

  const { nodes, connections } = useMemo(() => {
    const neuralNodes = createNeuralNodes(28, 3.2);
    return {
      nodes: neuralNodes,
      connections: createNeuralConnections(neuralNodes, 1.35),
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    easing.damp3(
      groupRef.current.rotation,
      [state.pointer.y * 0.18, state.pointer.x * 0.18, 0],
      0.2,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[1.2, 0.1, -0.4]}>
      {connections.map((connection, index) => (
        <Line
          key={`connection-${index}`}
          points={[
            [connection[0], connection[1], connection[2]],
            [connection[3], connection[4], connection[5]],
          ]}
          color={accent}
          lineWidth={0.6}
          transparent
          opacity={0.22}
        />
      ))}
      {nodes.map((node, index) => (
        <mesh key={`node-${index}`} position={node}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? success : accent} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
};

const AiSparkles = ({ theme }) => {
  const accent = theme === "light" ? ACCENT.light : ACCENT.dark;

  return (
    <>
      <Sparkles count={90} scale={[5, 3.5, 2]} size={1.8} speed={0.35} color={accent} opacity={0.55} />
      <Sparkles count={40} scale={[3, 2.5, 1.5]} size={2.4} speed={0.2} color={theme === "light" ? SUCCESS.light : SUCCESS.dark} opacity={0.35} />
    </>
  );
};

const HeroScene = ({ theme }) => (
  <>
    <ambientLight intensity={0.35} />
    <ParticleField theme={theme} />
    <NeuralNetwork theme={theme} />
    <AiSparkles theme={theme} />
    <Preload all />
  </>
);

const HeroParticles = ({ theme = "dark" }) => (
  <div className='hero-particles-canvas' aria-hidden='true'>
    <Canvas camera={{ position: [0, 0, 2.4], fov: 58 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <HeroScene theme={theme} />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroParticles;
