import * as THREE from 'three';

const sizes = { width: window.innerWidth/1.5, height: window.innerHeight/1.5}
const scene = new THREE.Scene();

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas});
renderer.setSize(sizes.width, sizes.height);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({color: 0x0000ff});

    // create geometry
const points = [];
points.push( new THREE.Vector3(-10, 0, 0));
points.push( new THREE.Vector3(0, 10, 0));
points.push( new THREE.Vector3(10, 0, 0));
points.push( new THREE.Vector3(-10, 0, 0));


const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);