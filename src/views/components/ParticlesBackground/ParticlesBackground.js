import React, { useEffect } from "react";
import * as THREE from "three";
import "./particlesBackground.css";

let scene, camera, renderer, particlesMesh;

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load("/assets/textures/normalMap.jpg");

function ParticlesBackground() {
  useEffect(() => {
    document.querySelector("section.particlesBackground").appendChild(init());
    animate();
  });

  function init() {
    //Creating scene
    scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Add camera
    camera = new THREE.PerspectiveCamera(
      55,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    camera.focus = 1000;

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: false, depth: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("white"), 1);

    // Add geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;

    const positionArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      // positionArray[i] = Math.random();
      // positionArray[i] = Math.random() - 0.5;
      positionArray[i] = (Math.random() - 0.5) * 7;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3)
    );

    // Material
    let particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      transparent: true,
      color: "grey",
    });

    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    return renderer.domElement;
  }

  // Mouse animation
  document.addEventListener("mousemove", particlesAnimation);

  let mouseX = 0;
  let mouseY = 0;

  function particlesAnimation(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
  }

  const clock = new THREE.Clock();

  //animation
  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y = 0.01 * elapsedTime;

    // if (mouseX > 0) {
    //   particlesMesh.rotation.y = mouseY * (elapsedTime * 0.00002);
    //   particlesMesh.rotation.x = mouseX * (elapsedTime * 0.00002);
    // }

    renderer.render(scene, camera);
  }

  return <section className="particlesBackground"></section>;
}

export default ParticlesBackground;
