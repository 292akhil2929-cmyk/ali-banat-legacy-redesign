"use client";

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";
import "./CircularGallery.css";

const lerp = (from, to, amount) => from + (to - from) * amount;

function makeTextTexture(gl, text, color, font) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = font;
  const width = Math.ceil(ctx.measureText(text).width) + 28;
  canvas.width = width;
  canvas.height = 54;
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, width / 2, 27);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, aspect: width / 54 };
}

class GalleryItem {
  constructor({ gl, geometry, scene, item, index, length, screen, viewport, bend, textColor, borderRadius, font }) {
    this.gl = gl;
    this.index = index;
    this.length = length;
    this.screen = screen;
    this.viewport = viewport;
    this.bend = bend;
    this.extra = 0;
    const texture = new Texture(gl, { generateMipmaps: true });
    this.program = new Program(gl, {
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertex: `precision highp float; attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; uniform float uTime; uniform float uSpeed; varying vec2 vUv; void main(){vUv=uv;vec3 p=position;p.z=(sin(p.x*4.0+uTime)+cos(p.y*2.0+uTime))*(0.08+uSpeed*.42);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,
      fragment: `precision highp float; uniform sampler2D tMap; uniform vec2 uImageSizes; uniform vec2 uPlaneSizes; uniform float uBorderRadius; varying vec2 vUv; float box(vec2 p,vec2 b,float r){vec2 d=abs(p)-b;return length(max(d,vec2(0.)))+min(max(d.x,d.y),0.)-r;} void main(){vec2 ratio=vec2(min((uPlaneSizes.x/uPlaneSizes.y)/(uImageSizes.x/uImageSizes.y),1.),min((uPlaneSizes.y/uPlaneSizes.x)/(uImageSizes.y/uImageSizes.x),1.));vec2 uv=vec2(vUv.x*ratio.x+(1.-ratio.x)*.5,vUv.y*ratio.y+(1.-ratio.y)*.5);vec4 color=texture2D(tMap,uv);float d=box(vUv-.5,vec2(.5-uBorderRadius),uBorderRadius);float alpha=1.-smoothstep(-.002,.002,d);gl_FragColor=vec4(color.rgb,alpha);}`,
      uniforms: { tMap: { value: texture }, uImageSizes: { value: [1, 1] }, uPlaneSizes: { value: [1, 1] }, uSpeed: { value: 0 }, uTime: { value: Math.random() * 100 }, uBorderRadius: { value: borderRadius } }
    });
    this.plane = new Mesh(gl, { geometry, program: this.program });
    this.plane.setParent(scene);
    const image = new Image();
    image.src = item.image;
    image.onload = () => {
      texture.image = image;
      this.program.uniforms.uImageSizes.value = [image.naturalWidth, image.naturalHeight];
    };
    const title = makeTextTexture(gl, item.text, textColor, font);
    this.title = new Mesh(gl, { geometry: new Plane(gl), program: new Program(gl, {
      transparent: true,
      vertex: `attribute vec3 position;attribute vec2 uv;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragment: `precision highp float;uniform sampler2D tMap;varying vec2 vUv;void main(){vec4 c=texture2D(tMap,vUv);if(c.a<.1)discard;gl_FragColor=c;}`,
      uniforms: { tMap: { value: title.texture } }
    }) });
    this.title.scale.set(0.62 * title.aspect, 0.62, 1);
    this.title.setParent(this.plane);
    this.resize({ screen, viewport });
  }

  resize({ screen, viewport }) {
    this.screen = screen; this.viewport = viewport;
    const scale = screen.height / 1500;
    this.plane.scale.y = (viewport.height * (800 * scale)) / screen.height;
    this.plane.scale.x = (viewport.width * (610 * scale)) / screen.width;
    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.title.position.y = -this.plane.scale.y / 2 - .43;
    this.width = this.plane.scale.x + 1.7;
    this.total = this.width * this.length;
    this.x = this.width * this.index;
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;
    const x = this.plane.position.x, half = this.viewport.width / 2;
    if (this.bend) {
      const bend = Math.abs(this.bend), radius = (half * half + bend * bend) / (2 * bend), effective = Math.min(Math.abs(x), half), arc = radius - Math.sqrt(radius * radius - effective * effective);
      this.plane.position.y = this.bend > 0 ? -arc : arc;
      this.plane.rotation.z = (this.bend > 0 ? -1 : 1) * Math.sign(x) * Math.asin(effective / radius);
    }
    this.program.uniforms.uTime.value += .04;
    this.program.uniforms.uSpeed.value = scroll.current - scroll.last;
    const before = this.plane.position.x + this.plane.scale.x / 2 < -half;
    const after = this.plane.position.x - this.plane.scale.x / 2 > half;
    if (direction === "right" && before) this.extra -= this.total;
    if (direction === "left" && after) this.extra += this.total;
  }
}

class GalleryApp {
  constructor(container, options) {
    this.container = container; this.options = options; this.scroll = { current: 0, target: 0, last: 0 }; this.speed = options.scrollSpeed;
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(devicePixelRatio, 2) });
    this.gl = this.renderer.gl; this.container.appendChild(this.gl.canvas);
    this.camera = new Camera(this.gl); this.camera.fov = 45; this.camera.position.z = 20; this.scene = new Transform(); this.geometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 });
    this.resize(); this.createItems(); this.bind(); this.update();
  }
  createItems() { const items = [...this.options.items, ...this.options.items]; this.items = items.map((item, index) => new GalleryItem({ gl: this.gl, geometry: this.geometry, scene: this.scene, item, index, length: items.length, screen: this.screen, viewport: this.viewport, bend: this.options.bend, textColor: this.options.textColor, borderRadius: this.options.borderRadius, font: this.options.font })); }
  resize = () => { this.screen = { width: this.container.clientWidth, height: this.container.clientHeight }; this.renderer.setSize(this.screen.width, this.screen.height); this.camera.perspective({ aspect: this.screen.width / this.screen.height }); const height = 2 * Math.tan(this.camera.fov * Math.PI / 360) * this.camera.position.z; this.viewport = { width: height * this.camera.aspect, height }; this.items?.forEach(item => item.resize({ screen: this.screen, viewport: this.viewport })); };
  down = e => { this.downAt = e.touches ? e.touches[0].clientX : e.clientX; this.start = this.scroll.current; this.isDown = true; };
  move = e => { if (!this.isDown) return; const x = e.touches ? e.touches[0].clientX : e.clientX; this.scroll.target = this.start + (this.downAt - x) * (this.speed * .025); };
  up = () => { this.isDown = false; };
  wheel = e => { this.scroll.target += (e.deltaY > 0 ? this.speed : -this.speed) * .2; };
  keys = e => { if (e.key === "ArrowRight") this.scroll.target += this.speed * 5; if (e.key === "ArrowLeft") this.scroll.target -= this.speed * 5; };
  bind() { addEventListener("resize", this.resize); this.container.addEventListener("wheel", this.wheel); this.container.addEventListener("mousedown", this.down); this.container.addEventListener("mousemove", this.move); this.container.addEventListener("mouseup", this.up); this.container.addEventListener("touchstart", this.down); this.container.addEventListener("touchmove", this.move); this.container.addEventListener("touchend", this.up); this.container.addEventListener("keydown", this.keys); }
  update = () => { this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.options.scrollEase); const direction = this.scroll.current > this.scroll.last ? "right" : "left"; this.items?.forEach(item => item.update(this.scroll, direction)); this.renderer.render({ scene: this.scene, camera: this.camera }); this.scroll.last = this.scroll.current; this.raf = requestAnimationFrame(this.update); };
  destroy() { cancelAnimationFrame(this.raf); removeEventListener("resize", this.resize); ["wheel", "mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend", "keydown"].forEach(name => this.container.removeEventListener(name, this[name === "wheel" ? "wheel" : name === "keydown" ? "keys" : name === "mousedown" || name === "touchstart" ? "down" : name === "mousemove" || name === "touchmove" ? "move" : "up"])); this.gl.canvas.remove(); }
}

export default function CircularGallery({ items, bend = 1, textColor = "#ffffff", borderRadius = .05, font = "bold 30px Figtree", scrollSpeed = 2, scrollEase = .05 }) {
  const ref = useRef(null);
  useEffect(() => { if (!ref.current) return; const app = new GalleryApp(ref.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase }); return () => app.destroy(); }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
  return <div className="circular-gallery" ref={ref} tabIndex={0} role="region" aria-label="Circular image gallery. Use the arrow keys, wheel, or drag to browse." />;
}
