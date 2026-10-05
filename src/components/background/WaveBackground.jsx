import React from "react";
import { useEffect, useRef } from 'react';
import { WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, Float32BufferAttribute, ShaderMaterial, Points, Vector3 } from 'three';

const VERT = `
uniform float uTime; uniform float uSize;
varying float vH; varying float vFade;
void main() {
  vec3 p = position;
  float w = sin(p.x * 0.011 + uTime * 0.7) * 16.0
          + sin(p.z * 0.014 - uTime * 0.55) * 14.0
          + sin((p.x + p.z) * 0.006 + uTime * 0.35) * 24.0;
  p.y = w;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = -mv.z;
  gl_PointSize = uSize * (420.0 / d);
  vH = clamp((w + 50.0) / 100.0, 0.0, 1.0);
  vFade = 1.0 - smoothstep(300.0, 1700.0, d);
}`;
const FRAG = `
uniform vec3 uLow; uniform vec3 uHigh; uniform float uOpacity;
varying float vH; varying float vFade;
void main() {
  float r = length(gl_PointCoord - 0.5);
  if (r > 0.5) discard;
  vec3 c = mix(uLow, uHigh, smoothstep(0.45, 1.0, vH));
  gl_FragColor = vec4(c, (1.0 - smoothstep(0.2, 0.5, r)) * vFade * uOpacity * (0.3 + 0.7 * vH));
}`;

// Drifting ocean of points (a nod to the Three.js Ocean Store project). Fixed behind the whole page.
export default function WaveBackground({ opacity = 1.4 }) {
  const box = useRef(null);

  useEffect(() => {
    const el = box.current;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = innerWidth < 768;
    let renderer;
    try { renderer = new WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' }); } catch { return; }
    const pr = Math.min(devicePixelRatio, 1.5);
    renderer.setPixelRatio(pr);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    el.appendChild(renderer.domElement);

    const cols = small ? 90 : 150, rows = small ? 55 : 80, pos = [];
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) pos.push((i / (cols - 1) - 0.5) * 2400, 0, 100 - (j / (rows - 1)) * 1600);
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    const mat = new ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uSize: { value: 4 * pr }, uOpacity: { value: opacity },
        uLow: { value: new Vector3(0.38, 0.42, 0.78) }, uHigh: { value: new Vector3(0.96, 0.77, 0.0) } },
    });
    const scene = new Scene();
    scene.add(new Points(geo, mat));
    const cam = new PerspectiveCamera(55, 1, 1, 3000);
    let mx = 0;

    const draw = (t = 0) => {
      mat.uniforms.uTime.value = t * 0.001;
      cam.position.set(mx * 0.08, 180 - Math.min(scrollY, 3000) * 0.03, 420);
      cam.lookAt(0, 0, -400);
      renderer.render(scene, cam);
    };
    const resize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight, false);
      cam.aspect = el.clientWidth / el.clientHeight;
      cam.updateProjectionMatrix();
      draw();
    };
    const move = (e) => { if (e.pointerType === 'mouse') mx = e.clientX - innerWidth / 2; };
    const vis = () => renderer.setAnimationLoop(document.hidden ? null : draw);

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    if (!reduce) {
      addEventListener('pointermove', move, { passive: true });
      document.addEventListener('visibilitychange', vis);
      renderer.setAnimationLoop(draw);
    }
    return () => {
      ro.disconnect();
      removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', vis);
      renderer.setAnimationLoop(null);
      geo.dispose(); mat.dispose(); renderer.dispose();
      renderer.domElement.remove();
    };
  }, [opacity]);

  return <div ref={box} aria-hidden="true" className="wave" />;
}
