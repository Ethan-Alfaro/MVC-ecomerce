import React, { useEffect } from "react";
import * as THREE from "three";
import "./GuitarModel.css";
import * as dat from "dat.gui";

let scene, camera, renderer, cube;

function GuitarModel() {
  useEffect(() => {
    document.getElementById("webgl").appendChild(init());
		animate();
  });

  function init() {
    //creating scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a3b4c);

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    //add geometry
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    return renderer.domElement;
  }

  //animation
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  return <div id="webgl"></div>;
}

export default GuitarModel;
