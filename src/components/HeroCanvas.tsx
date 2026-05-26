import { useEffect, useRef } from "react";

/**
 * A quiet ambient canvas: an arched windcatcher silhouette drawn as a
 * slowly-rotating wireframe with parallax dots. Cheap, no Three.js.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    function resize() {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Particles drifting upward, evoking warm air rising through a windcatcher
    const dots: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    function spawn() {
      const r = canvas!.getBoundingClientRect();
      for (let i = 0; i < 80; i++) {
        dots.push({
          x: Math.random() * r.width,
          y: r.height + Math.random() * r.height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -0.18 - Math.random() * 0.45,
          r: 0.5 + Math.random() * 1.4,
          a: 0.08 + Math.random() * 0.3,
        });
      }
    }
    spawn();

    let t = 0;
    function frame() {
      const r = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, r.width, r.height);

      // Background — translucent gradient sweep
      ctx!.fillStyle = "rgba(14,14,12,1)";
      ctx!.fillRect(0, 0, r.width, r.height);

      // Sand glow at the bottom
      const grad = ctx!.createRadialGradient(
        r.width * 0.78,
        r.height * 0.95,
        20,
        r.width * 0.78,
        r.height * 0.95,
        Math.max(r.width, r.height) * 0.7
      );
      grad.addColorStop(0, "rgba(184, 69, 31, 0.42)");
      grad.addColorStop(0.4, "rgba(198, 183, 154, 0.08)");
      grad.addColorStop(1, "rgba(14, 14, 12, 0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, r.width, r.height);

      // Windcatcher silhouette (wireframe)
      const cx = r.width * 0.78;
      const cy = r.height * 0.62;
      const w = Math.min(r.width, r.height) * 0.38;
      const h = w * 1.6;
      ctx!.save();
      ctx!.translate(cx, cy);
      const breathe = Math.sin(t * 0.012) * 0.015;
      ctx!.scale(1 + breathe, 1 + breathe);
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = "rgba(244, 239, 230, 0.28)";

      // The body of the windcatcher: stacked rectangles
      const cols = 5;
      const rows = 8;
      const colW = w / cols;
      const rowH = h / rows;
      ctx!.beginPath();
      for (let i = 0; i <= cols; i++) {
        const x = -w / 2 + i * colW;
        ctx!.moveTo(x, -h);
        ctx!.lineTo(x, 0);
      }
      for (let j = 0; j <= rows; j++) {
        const y = -j * rowH;
        ctx!.moveTo(-w / 2, y);
        ctx!.lineTo(w / 2, y);
      }
      ctx!.stroke();

      // Top arch
      ctx!.beginPath();
      ctx!.moveTo(-w / 2, -h);
      ctx!.quadraticCurveTo(0, -h - rowH * 2, w / 2, -h);
      ctx!.stroke();

      // Inner shaft lines (the slot)
      ctx!.lineWidth = 1.4;
      ctx!.strokeStyle = "rgba(184, 69, 31, 0.4)";
      const slotW = colW * 0.35;
      ctx!.beginPath();
      ctx!.moveTo(-slotW / 2, -h);
      ctx!.lineTo(-slotW / 2, 0);
      ctx!.moveTo(slotW / 2, -h);
      ctx!.lineTo(slotW / 2, 0);
      ctx!.stroke();

      ctx!.restore();

      // Rising particles (warm air)
      ctx!.fillStyle = "rgba(244, 239, 230, 1)";
      for (const d of dots) {
        if (!reduced.current) {
          d.x += d.vx;
          d.y += d.vy;
        }
        if (d.y < -10) {
          d.y = r.height + 10;
          d.x = Math.random() * r.width;
        }
        ctx!.globalAlpha = d.a;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      t++;
      if (!reduced.current) raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}
