import React, { useEffect } from "react";
import * as THREE from "three";
import "./ballModel.css";
import * as dat from "dat.gui";

let scene, camera, renderer, sphere;

function BallModell() {
  useEffect(() => {
    document.querySelector("section.ballModel").appendChild(init());
    animate();
  });

  function init() {
    //creating scene
    scene = new THREE.Scene();

    // Loading
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load("assets/textures/normalMap.jpg");

    // Debug
    const gui = new dat.GUI();

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

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 3;
    camera.position.z = 2;

    //renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //add geometry
    let sphereGeometry = new THREE.SphereBufferGeometry(0.5, 64, 64);
    let material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.normalMap = normalTexture;
    material.color = new THREE.Color(0x292929);
    material.color = new THREE.Color(0xff0000);
    sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);

    // Lights and GUI folders
    const redLightFolder = gui.addFolder("Red Light");
    const blueLightFolder = gui.addFolder("Blue Light");

    // standar poinlight
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    // red point light
    const redPointLight = new THREE.PointLight(0x377ba0, 2);
    redPointLight.position.set(10, 0, 0);
    redPointLight.intensity = 3;
    scene.add(redPointLight);
    redLightFolder.add(redPointLight.position, "y").min(-10).max(10).step(1);
    redLightFolder.add(redPointLight.position, "x").min(-10).max(10).step(1);
    redLightFolder.add(redPointLight.position, "z").min(-10).max(10).step(1);
    redLightFolder.add(redPointLight, "intensity").min(0).max(10).step(0.1);

    // blue point light
    const blueLightColor = {
      color: 0xffff,
    };
    const bluePointLight = new THREE.PointLight(blueLightColor.color, 2);
    bluePointLight.position.set(-10, -5, -4);
    bluePointLight.intensity = 10;
    scene.add(bluePointLight);
    blueLightFolder.add(bluePointLight.position, "y").min(-10).max(10).step(1);
    blueLightFolder.add(bluePointLight.position, "x").min(-10).max(10).step(1);
    blueLightFolder.add(bluePointLight.position, "z").min(-10).max(10).step(1);
    blueLightFolder.add(bluePointLight, "intensity").min(0).max(10).step(0.1);

    // to add a set color on the GUI
    blueLightFolder.addColor(blueLightColor, "color").onChange(() => {
      bluePointLight.color.set(blueLightColor.color);
    });

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

  // This is for responsive Scroll animations
  const updateSphere = (event) => {
    sphere.position.y = window.scrollY * 0.002;
  };
  window.addEventListener("scroll", updateSphere);

  //animation
  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Update objects
    sphere.rotation.y = 0.5 * elapsedTime;

    sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);
    sphere.position.z += -0.5 * (targetY - sphere.rotation.x);

    renderer.render(scene, camera);
  }

  return <section className="ballModel"></section>;
}

export default BallModell;
