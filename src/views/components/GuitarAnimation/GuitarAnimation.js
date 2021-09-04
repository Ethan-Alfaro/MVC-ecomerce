import React, { useEffect } from "react";
import * as THREE from "three";
import "./guitarAnimation.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { _isUndefined } from "gsap/gsap-core";

let scene, camera, renderer, tl, guitarModel;

function GuitarAnimation() {
  useEffect(() => {
    document.querySelector("section.guitarAnimation").appendChild(init());
    // animate();
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
        guitar.scene.scale.set(1, 1, 1);
        guitar.scene.position.set(0, 2.3, -3);
        scene.add(guitar.scene);

        tl.to(guitar.scene.scale, { x: 0.27, y: 0.27, z: 0.27, duration: 2 });
        tl.to(guitar.scene.rotation, { y: 5, duration: 2 }, "-=2");
        tl.to(guitar.scene.position, { x: -3 }, "-=2");
        tl.to(guitar.scene.position, { x: 3.5, duration: 2 });

        guitarModel = guitar.scene.children[0];
        animate();
      }
    );

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 7);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 2;
    scene.add(pointLight);

    const pointLightTwo = new THREE.PointLight(0x0000ff, 3);
    pointLightTwo.position.x = -2;
    pointLightTwo.position.y = -3;
    pointLightTwo.position.z = -2;
    scene.add(pointLightTwo);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight - 160,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.focus = 0;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height - 160);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    //add camera
    camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 3;
    camera.focus = 1000;

    //renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    return renderer.domElement;
  }

  const clock = new THREE.Clock();
  // this is for make the geometry response on mouseMove on the screen
  document.addEventListener("mousemove", onDocumentMouseMove);
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerHeight / 2;
  const windowHalfY = window.innerHeight / 2;
  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  //animation
  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Update objects
    guitarModel.rotation.y = 0.5 * elapsedTime;

    guitarModel.rotation.y += 0.5 * (targetX - guitarModel.rotation.y);
    // guitarModel.rotation.x += 0.5 * (targetY - guitarModel.rotation.x);
    // guitarModel.position.z += -0.5 * (targetY - guitarModel.rotation.x);

    renderer.render(scene, camera);
  }

  return <section className="guitarAnimation"></section>;
}

export default GuitarAnimation;
