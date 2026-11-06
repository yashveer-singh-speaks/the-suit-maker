"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeFabricCanvas({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // Dynamic Fabric Plane Geometry (Mimicking undulating raw silk / wool weave)
    const planeGeo = new THREE.PlaneGeometry(36, 24, 40, 30);
    const posAttr = planeGeo.attributes.position;
    const initialZ = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      initialZ[i] = posAttr.getZ(i);
    }

    // Material with antique gold sheen highlights
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x0B1F3A, // Deep Navy base
      roughness: 0.65,
      metalness: 0.25,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const fabricMesh = new THREE.Mesh(planeGeo, planeMat);
    fabricMesh.rotation.x = -Math.PI / 5;
    fabricMesh.position.y = -2;
    scene.add(fabricMesh);

    // Golden ambient particle system (Private dressing room atmosphere)
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 40;
      particlePos[i + 1] = (Math.random() - 0.5) * 30;
      particlePos[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xC6A15B, // Antique Gold
      size: 0.18,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle ambient and directional warm lights
    const ambientLight = new THREE.AmbientLight(0xF8F3E8, 0.7);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xC6A15B, 2, 50);
    goldLight.position.set(10, 10, 15);
    scene.add(goldLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Gentle undulating fabric waves
      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const wave =
          Math.sin(u * 0.35 + elapsed * 1.2 + mouseX * 2) * 0.8 +
          Math.cos(v * 0.35 + elapsed * 0.9 + mouseY * 2) * 0.8;
        pos.setZ(i, initialZ[i] + wave);
      }
      pos.needsUpdate = true;

      // Slow drift of golden particles
      particles.rotation.y = elapsed * 0.04 + mouseX * 0.1;
      particles.rotation.x = elapsed * 0.02 - mouseY * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
