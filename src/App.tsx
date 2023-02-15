import React, { ExoticComponent, ReactNode, useState } from 'react'
import * as THREE from 'three'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const sizes = { width: window.innerWidth/1.5, height: window.innerHeight/1.5}
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();


  
  const triangle = () => {
    scene.clear();
    renderer.clear();
    
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 500);
    // camera.clear();
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
    if(document.getElementById("renderContainer")?.firstElementChild!)
    document.getElementById("renderContainer")?.removeChild(document.getElementById("renderContainer")?.firstElementChild!)
    document.getElementById("renderContainer")?.appendChild(renderer.domElement)
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
    const sizes = { width: 800, height: 600}
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 500 );
    // camera.clear();
    camera.position.set(0, 0, 5);


    // Red Cube - Create Renderer
    renderer.setSize(sizes.width, sizes.height);
    if(document.getElementById("renderContainer")?.firstElementChild!){
      console.log(document.getElementById("renderContainer")?.firstElementChild)
      document.getElementById("renderContainer")?.removeChild(document.getElementById("renderContainer")?.firstElementChild!)
  }
    document.getElementById("renderContainer")?.appendChild(renderer.domElement)

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
        animate();
  }

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={cube}>Cube</button>
          <button onClick={triangle}>Triangle</button>
        </div>
        <div id='renderContainer'>
        </div>
      </div>
    </div>
  )
}

export default App
