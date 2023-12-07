// main.js
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Scene 생성
const scene = new THREE.Scene();

// Camera 생성
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer 생성
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 폰트 로딩
const fontLoader = new THREE.FontLoader();
let font;
fontLoader.load('https://unpkg.com/three/examples/fonts/gentilis_bold.typeface.json', (loadedFont) => {
  font = loadedFont;

  // 텍스트 생성
  const textGeometry = new THREE.TextBufferGeometry('Hello, 3D Text!', {
    font: font,
    size: 0.5,
    height: 0.1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Scene에 추가
  scene.add(textMesh);

  // 렌더링
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
});
