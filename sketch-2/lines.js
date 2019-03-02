// Get the WebGL context
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup
gl.clearColor(1, 1, 1, 1);
gl.lineWidth(1.0);
gl.frontFace(gl.CCW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT);

// Compile a vertex shader
var vsSource = 'attribute vec2 pos;' +
  'void main(){ gl_Position = vec4(pos * 0.3, 1.0, 1.0);}';
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile a fragment shader
var fsSource = 'void main() { gl_FragColor = vec4(0.1, 0.1, 0.1, 1); }';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSource);
gl.compileShader(fs);

// Link together into a program
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

// Load vertex data into a buffer
var vertices = new Float32Array([
  -2.0, -0.5,
  -1.2,-1.1,
  -0.8, -0.4,
  -2.0, -0.5,
  -1.0, 1,
  -2.0, 1.4,
  -2.0, -0.5,
  -0.8, -0.4,
  -1.0, 1,
  -0.2, 0.7,
  -0.8, -0.4,
  0.5, -0.6,
  -0.2, 0.7,
  0.5, 1,
  0.5, -0.6,
  1.5, 0.2,
  0.5, 1,
  1.4, 1.1,
  1.5, 0.2,
  2.2, -0.4,
  2.8, 0,
  1.5, 0.2,
  2.8, 0,
  1.4, 1.1,
  2.8, 0,
  2.0, 1.5,
  1.4, 1.1,
  2.0, 1.5,
  2.5, 2,
  1.8, 2.5,
  2.0, 1.5,
  1.8, 2.5,
  1.0, 2,
  2.0, 1.5,
  1.0, 2,
  1.4, 1.1,
  1.0, 2,
  0.5, 1,
  1.0, 2,
  0.2, 2.5,
  0.5, 1,
  0.2, 2.5,
  -0.2, 0.7,
  0.2, 2.5,
  -0.8, 1.7,
  -0.2, 0.7,
  -0.8, 1.7,
  -1.0, 1,
  -0.8, 1.7,
  -2.0, 1.4,
  -2.5, 1.9,
  -1.7, 2.3,
  -2.0, 1.4,
  -1.7, 2.3,
  -0.8, 1.7
]);

var vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Bind vertex buffer to attribute variable
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// Clear framebuffer and render primitives
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.LINE_STRIP, 0, vertices.length / 2);