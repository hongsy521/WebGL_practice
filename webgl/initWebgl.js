function initWebGL(canvas) {
    gl = null;
  
    try {
      // webgl 컨텍스트를 얻기 위해 canvas로 "webgl"컨텍스트 요청. 실패할 경우, "experimental-webgl"로 시도
      gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) {}
  
    // 모두 실패시, 사용중인 브라우저가 webgl 지원하지 않음 경고
    if (!gl) {
      alert("Unable to initialize WebGL. Your browser may not support it.");
      gl = null;
    }
  
    return gl;
  }
  