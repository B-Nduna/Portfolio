import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const vertexShader = `
varying vec3 vNormal;
varying vec3 vPos;
void main(){
  vNormal = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vNormal;
varying vec3 vPos;
void main(){
  vec3 viewDir = normalize(-vPos);
  float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 2.2);
  float shift = sin(uTime * 0.6 + vPos.y * 1.4) * 0.5 + 0.5;
  vec3 grad = mix(uColorA, uColorB, shift);
  grad = mix(grad, uColorC, sin(uTime * 0.4 + vPos.x) * 0.5 + 0.5);
  vec3 color = grad * (fresnel * 1.8 + 0.12);
  gl_FragColor = vec4(color, fresnel * 0.85 + 0.06);
}
`;

function makeUniforms(a, b, c) {
  return {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color(a) },
    uColorB: { value: new THREE.Color(b) },
    uColorC: { value: new THREE.Color(c) },
  };
}

function Particles() {
  const positions = useMemo(() => {
    const count = 260;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, []);
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current && !prefersReduced) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={0xcbb8ff}
        size={0.028}
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Crystal() {
  const group = useRef();
  const crystalRef = useRef();
  const wireRef = useRef();
  const innerRef = useRef();
  const target = useRef({ x: 0, y: 0 });
  const scrollFactor = useRef(0);

  const outerUniforms = useMemo(() => makeUniforms(0xb18bfa, 0x4fd8e8, 0xf3a8e0), []);
  const innerUniforms = useMemo(
    () => ({ ...makeUniforms(0x4fd8e8, 0xf3a8e0, 0xb18bfa), uTime: outerUniforms.uTime }),
    [outerUniforms]
  );

  useEffect(() => {
    const onScroll = () => {
      const heroH = document.querySelector(".hero")?.clientHeight || 1;
      scrollFactor.current = Math.min(window.scrollY / heroH, 1.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    outerUniforms.uTime.value = t;

    if (prefersReduced) return;

    crystalRef.current.rotation.set(t * 0.12, t * 0.22, 0);
    wireRef.current.rotation.copy(crystalRef.current.rotation);
    innerRef.current.rotation.set(0, -t * 0.3, t * 0.18);

    target.current.x += (state.pointer.x - target.current.x) * 0.04;
    target.current.y += (state.pointer.y - target.current.y) * 0.04;
    group.current.rotation.y = target.current.x * 0.3;
    group.current.rotation.x = -target.current.y * 0.2;

    const sf = scrollFactor.current;
    state.camera.position.y = -sf * 1.4;
    group.current.position.y = sf * -0.6;
  });

  return (
    <group ref={group}>
      <mesh ref={crystalRef}>
        <icosahedronGeometry args={[2, 1]} />
        <shaderMaterial
          uniforms={outerUniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={wireRef} scale={1.015}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color={0xffffff} wireframe transparent opacity={0.14} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.15, 0]} />
        <shaderMaterial
          uniforms={innerUniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Particles />
    </group>
  );
}

export default function HeroCrystal() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <Crystal />
      </Canvas>
    </div>
  );
}
