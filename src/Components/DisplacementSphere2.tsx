import { useEffect, useRef } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

interface ExtendedMesh extends THREE.Mesh {
  modifier?: number;
}

interface DisplacementSphereProps {
  sphereColor?: number;
}

const DisplacementSphere: React.FC<DisplacementSphereProps> = ({
  sphereColor = 0xbd9f67,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const start = useRef(Date.now());

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    const scene = new THREE.Scene();

    let sphereRadius = 10;

    // Create custom shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(sphereColor) },
        tipColor: { value: new THREE.Color(0xd3d3d3) },
        fogColor: { value: new THREE.Color(0x111111) },
        fogStart: { value: 25.0 },
        fogEnd: { value: 58.0 },
      },
      vertexShader: `
        uniform float time;
        
        float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
        
        float noise(vec3 p){
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);

            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = perm(b.xyxy);
            vec4 k2 = perm(k1.xyxy + b.zzww);

            vec4 c = k2 + a.zzzz;
            vec4 k3 = perm(c);
            vec4 k4 = perm(c + 1.0);

            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));

            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

            return o4.y * d.y + o4.x * (1.0 - d.y);
        }
        
        float turbulence(vec3 p) {
            float sum = 0.0;
            float freq = 1.0;
            float amp = 1.0;
            
            for(int i = 0; i < 8; i++) {
                sum += abs(noise(p * freq)) * amp;
                freq *= 2.5;
                amp *= 0.6;
            }
            
            return sum;
        }

        varying float vNoise;
        varying vec3 vNormal;
        varying float vFogDepth;
        
        void main() {
            vNormal = normal;
            vec3 pos = position;
            
            float noiseValue = turbulence(normal * 3.5 + time);
            vNoise = noiseValue;
            
            pos += normal * noiseValue * 15.0;  // amplitude control
             
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vFogDepth = -mvPosition.z;
        }
      `,
      fragmentShader: `
        uniform vec3 baseColor;
        uniform vec3 tipColor;
        uniform vec3 fogColor;
        uniform float fogStart;
        uniform float fogEnd;
        
        varying float vNoise;
        varying vec3 vNormal;
        varying float vFogDepth;
        
        void main() {
            vec3 color = mix(baseColor, tipColor, smoothstep(0.0, 1.0, vNoise * 0.5));
            
            float rimLight = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.0);
            color += rimLight * 0.2;
            
            float fogFactor = smoothstep(fogStart, fogEnd, vFogDepth);
            color = mix(color, fogColor, fogFactor);
            
            gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const geometry = new THREE.SphereGeometry(sphereRadius, 96, 96);
    const sphere = new THREE.Mesh(geometry, material) as ExtendedMesh;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 52;

    scene.add(sphere);
    sphere.position.z = 0;
    sphere.modifier = Math.random();

    scene.background = new THREE.Color(0x111111);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(100, 100, 200);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    container.appendChild(renderer.domElement);

    const updateSphereProperties = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 696) {
        sphere.geometry.dispose();
        sphere.geometry = new THREE.SphereGeometry(1, 96, 96);

        sphere.position.set(10, 25, 0);
      } else if (windowWidth <= 1024) {
        sphere.geometry.dispose();
        sphere.geometry = new THREE.SphereGeometry(1, 96, 96);

        sphere.position.set(17, 20, 0);
      } else {
        sphere.geometry.dispose();
        sphere.geometry = new THREE.SphereGeometry(10, 96, 96);

        sphere.position.set(40, 20, 0);
      }
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const fullHeight = windowHeight + windowHeight * 0.3;

      renderer.setSize(windowWidth, fullHeight);
      camera.aspect = windowWidth / fullHeight;
      camera.updateProjectionMatrix();

      updateSphereProperties();
    };

    const onMouseMove = (event: MouseEvent) => {
      const animateMouse = () => {
        const position = {
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        };

        new TWEEN.Tween(sphere.rotation)
          .to({ x: position.y / 2, y: position.x / 2 }, 2000)
          .easing(TWEEN.Easing.Quartic.Out)
          .start();
      };

      requestAnimationFrame(animateMouse);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize();

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.time.value = 0.00005 * (Date.now() - start.current);
      sphere.rotation.z += 0.001;
      renderer.render(scene, camera);
      TWEEN.update();
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default DisplacementSphere;
