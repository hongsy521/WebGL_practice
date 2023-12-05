import { scene, camera, renderer } from './initialization.js';
import { model } from './modelLoading.js';

function animate() {
  requestAnimationFrame(animate);

  // 여기에서 모델이나 카메라 등의 변화를 추가할 수 있습니다.

  renderer.render(scene, camera);
}

animate();