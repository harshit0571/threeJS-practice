import * as THREE from "three";

// create camera , scene and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
camera.position.z = 20;

// add cube to scene
// scene.add(cube);

// render cube in html
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();

// creating a line
const material2 = new THREE.LineBasicMaterial({ color: 0x0000ff });
// add geometry
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(-10, 0, 0));
const geometry2 = new THREE.BufferGeometry().setFromPoints(points);

// create a line from geometry and material
const line = new THREE.Line(geometry2, material2);
scene.add(line);
renderer.render(scene, camera);
// render line in html
function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
