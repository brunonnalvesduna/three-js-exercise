import React, { ExoticComponent, ReactNode, useState } from 'react'
import * as THREE from 'three'
import reactLogo from './assets/react.svg'
import './App.css'
import { BufferGeometry, PointsMaterial } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


function App() {
  const sizes = { width: window.innerWidth/1.5, height: window.innerHeight/1.5}
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  
  const triangle = () => {
    scene.clear();
    renderer.clear();
    
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 500);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({color: 0x0000ff});
    
    // create geometry
    const points = [];
    points.push( new THREE.Vector3(-1, 0, 0));
    points.push( new THREE.Vector3(0, 1, 0));
    points.push( new THREE.Vector3(1, 0, 0));
    points.push( new THREE.Vector3(-1, 0, 0));
    
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const line = new THREE.Line(geometry, material);
    
    scene.add(line);
    renderer.setSize(sizes.width, sizes.height);
    if(document.getElementById("renderContainer")?.firstElementChild!){
      document.getElementById("renderContainer")?.removeChild(document.getElementById("renderContainer")?.firstElementChild!);
    };
    document.getElementById("renderContainer")?.appendChild(renderer.domElement);
    renderer.render(scene, camera);
  }

  const cube = () => {
    scene.clear();
    renderer.clear();

    // Red Cube - Create Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Red Cube - Create Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 500);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    // Red Cube - Create Renderer
    renderer.setSize(sizes.width, sizes.height);
    if(document.getElementById("renderContainer")?.firstElementChild!){
      console.log(document.getElementById("renderContainer")?.firstElementChild);
      document.getElementById("renderContainer")?.removeChild(document.getElementById("renderContainer")?.firstElementChild!);
  };
    document.getElementById("renderContainer")?.appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
        animate();
  }

  const pointCloud = () => {
    scene.clear();
    renderer.clear();

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 500);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    for (let i=0; i<100; i++) {
      const pointColor = new THREE.PointsMaterial({color: `${'#' + Math.floor(Math.random()*16777215).toString(16)}`, size: 0.2})
      const point = new THREE.Vector3((Math.random() - 0.5) * 2.5,(Math.random() - 0.5) * 2.5,(Math.random() - 0.5) * 2.5);
      const geometry = new THREE.BufferGeometry().setFromPoints([point]);
      const pointRendered = new THREE.Points(geometry, pointColor);
      scene.add(pointRendered);
    };

    renderer.setSize(sizes.width, sizes.height);
    if(document.getElementById("renderContainer")?.firstElementChild!){
      console.log(document.getElementById("renderContainer")?.firstElementChild);
      document.getElementById("renderContainer")?.removeChild(document.getElementById("renderContainer")?.firstElementChild!);
    };
    document.getElementById("renderContainer")?.appendChild(renderer.domElement);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    animate();
  }

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={cube}>Cube</button>
          <button onClick={triangle}>Triangle</button>
          <button onClick={pointCloud}>Point Cloud</button>
        </div>
        <div id='renderContainer'>
        </div>
      </div>
    </div>
  )
}

export default App
