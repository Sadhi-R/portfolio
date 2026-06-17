import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sparkles, Preload } from "@react-three/drei";
import { easing } from "maath";

const ACCENT = { dark: "#7c3aed", light: "#6d28d9" };

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

const Stars = ({ theme = "dark" }) => {
  const outerRef = useRef();
  const innerRef = useRef();
  const accent = theme === "light" ? ACCENT.light : ACCENT.dark;
  const [sphere] = useState(() => createSpherePoints(1800, 1.4));

  useFrame((state, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta / 12;
      innerRef.current.rotation.y -= delta / 16;
    }

    if (outerRef.current) {
      easing.damp3(
        outerRef.current.rotation,
        [state.pointer.y * 0.1, state.pointer.x * 0.1, 0],
        0.2,
        delta
      );
    }
  });

  return (
    <group ref={outerRef}>
      <group ref={innerRef} rotation={[0, 0, Math.PI / 4]}>
        <Points positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color={accent}
            size={0.0022}
            sizeAttenuation
            depthWrite={false}
            opacity={0.75}
          />
        </Points>
        <Sparkles count={55} scale={3.5} size={1.5} speed={0.25} color={accent} opacity={0.4} />
      </group>
    </group>
  );
};

const StarsCanvas = ({ theme = "dark" }) => (
  <div className='stars-canvas' aria-hidden='true'>
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Stars theme={theme} />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
