import React, { useEffect } from "react";
import * as THREE from "three";
import "./guitarAnimation.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";

let scene, camera, renderer, sphere, tl;

function GuitarAnimation() {
  useEffect(() => {
    document.querySelector("section.guitarAnimation").appendChild(init());
    animate();
  });

  function init() {
    const gltfLoader = new GLTFLoader();

    //creating scene
    scene = new THREE.Scene();

    tl = gsap.timeline();

    // the guitar
    gltfLoader.load(
      "assets/3d-models/guitarrisha/guitarrisha.glb",
      (guitar) => {
        guitar.scene.scale.set(0.2, 0.2, 0.2);
        guitar.scene.position.set(0, 3, -3);
        scene.add(guitar.scene);

        tl.to(guitar.scene.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 2 });
        tl.to(guitar.scene.rotation, { y: 6.4, duration: 2 }, "-=2");
        tl.to(guitar.scene.position, { x: -1 }, "-=2");
        tl.to(guitar.scene.position, { x: 2, duration: 2 });
      }
    );

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight ,
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

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 3;

    //renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    return renderer.domElement;
  }

  //animation
  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  return <section className="guitarAnimation"></section>;
}

export default GuitarAnimation;
