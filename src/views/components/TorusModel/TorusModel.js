import React, { useEffect } from "react";
import * as THREE from "three";
import "./torusModel.css";

let scene, camera, renderer, torus;

function TorusModel() {
  useEffect(() => {
    document.querySelector("section.torusModel").appendChild(init());
    animate();
  });

  function init() {
    //creating scene
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

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;

    //renderer
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //add geometry
    let geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    let material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(0xff0000);
    torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    return renderer.domElement;
  }

  const clock = new THREE.Clock();
  //animation
  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Update objects
    torus.rotation.y = 0.5 * elapsedTime;

    renderer.render(scene, camera);
  }

  return <section className="torusModel"></section>;
}

export default TorusModel;
