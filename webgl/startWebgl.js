var gl; // webgl컨텍스트에서의 전역변수

// 함수의 기능 -> webgl 컨텍스트 설정 후 콘텐츠 렌더링 시작
function start() {
    // 반복적인 canvas 참조할 필요 없기 때문에 전역변수 지정 X
    // 지역변수나 객체의 필드 멤버로서 canvas에 대한 참조 얻기
  var canvas = document.getElementById("glcanvas");

  // canvas 이용하여 webgl 컨텍스트 초기화 작업 (함수 일시적 정의)
  // 컨텍스트가 성공적으로 초기화되면 gl은 이를 참조
  gl = initWebGL(canvas); // Initialize the GL context

  // webgl이 활성화일 경우 계속 진행

  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set clear color to black, fully opaque
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear the color as well as the depth buffer.
  }
}
