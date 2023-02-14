import * as THREE from 'three';
import WebGL from '../WebGL';

// Scene
const scene = new THREE.Scene();

// Red Cube - Create Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Red Cube - Create Camera
const sizes = { width: 800, height: 600}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera);

// Red Cube - Create Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

if(WebGL.isWebGLAvailable()) {
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}
