import { scene } from './initialization.js';

const loader = new THREE.GLTFLoader();
let model;

loader.load('path/to/your/model.gltf', (gltf) => {
  model = gltf.scene;
  scene.add(model);
});

export { model };