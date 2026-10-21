import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg-option3.jpg";

/**
 * LiveBackground — the fixed global backdrop.
 *
 * The wireframe AI head image drifts smoothly with the cursor (parallax)
 * and scrolls at a slower rate than the page content, while a canvas of
 * softly glowing particles floats above it. Both layers react to the
 * cursor and scroll with eased (lerped) motion so nothing jumps.
 *
 * Honours prefers-reduced-motion: renders one static frame instead.
 */
const LiveBackground = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const canvas = canvasRef.current;
    if (!layer || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- particle field -------------------------------------------------
    type P = { x: number; y: number; z: number; r: number; vx: number; vy: number; a: number; ph: number };
    let particles: P[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;

    const seed = () => {
      const count = Math.min(70, Math.max(28, Math.floor(w / 22)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.35 + Math.random() * 0.65, // depth: small = far, large = near
        r: 0.8 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 6,
        vy: -(6 + Math.random() * 18),
        a: 0.12 + Math.random() * 0.35,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };
    resize();

    // --- primary colour (theme-aware) -----------------------------------
    let primary = "45 100% 55%";
    let colourFrame = 0;
    const readColour = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      if (v) primary = v;
    };
    readColour();

    // --- eased cursor + scroll state -------------------------------------
    let mx = 0; let my = 0; // target, normalised -0.5..0.5
    let smx = 0; let smy = 0; // smoothed
    let sScroll = 0; // smoothed scrollY
    let scrollTarget = 0;

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      scrollTarget = window.scrollY;
    };
    if (!reduced) {
      window.addEventListener("mousemove", onMouse, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    let raf = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      smx += (mx - smx) * 0.06;
      smy += (my - smy) * 0.06;
      sScroll += (scrollTarget - sScroll) * 0.1;

      // head image parallax
      layer.style.transform = `translate3d(${(smx * 34).toFixed(2)}px, ${(smy * 22 + sScroll * 0.05).toFixed(2)}px, 0)`;

      if (++colourFrame % 120 === 0) readColour();

      ctx.clearRect(0, 0, w, h);
      const t = now / 1000;
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx * dt * p.z;
          p.y += p.vy * dt * p.z;
          if (p.y < -12) p.y = h + 12;
          if (p.y > h + 12) p.y = -12;
          if (p.x < -12) p.x = w + 12;
          if (p.x > w + 12) p.x = -12;
        }
        const ox = smx * p.z * 28;
        const oy = smy * p.z * 20 - sScroll * p.z * 0.05;
        let px = p.x + ox;
        let py = p.y + oy;
        // wrap with the parallax offset applied
        px = ((px % w) + w) % w;
        py = ((py % h) + h) % h;
        const tw = 0.6 + 0.4 * Math.sin(t * 0.8 + p.ph);
        ctx.beginPath();
        ctx.arc(px, py, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primary} / ${(p.a * tw).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduced) {
      draw(performance.now());
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (!reduced) {
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* wireframe head, oversized so the drift never shows an edge */}
      <div ref={layerRef} className="absolute -inset-32 will-change-transform">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* readability overlay, theme-aware */}
      <div className="absolute inset-0 bg-background/60 dark:bg-background/85" />
      {/* floating particles above the overlay */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default LiveBackground;
