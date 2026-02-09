import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let mouseMoved = false;
    let effectEnabled = true;

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber).fill(0).map(() => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const updateMousePosition = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
    };

    // Disable effect inside form elements
    const checkTarget = (target: EventTarget | null) => {
      const el = target as HTMLElement;
      if (!el) return;

      const tag = el.tagName?.toLowerCase();
      effectEnabled = !["input", "textarea", "button"].includes(tag);
    };

    window.addEventListener("mousemove", (e) => {
      mouseMoved = true;
      checkTarget(e.target);
      updateMousePosition(e.clientX, e.clientY);
    });

    window.addEventListener("resize", resizeCanvas);

    const update = (t: number) => {
      if (!effectEnabled) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(update);
        return;
      }

      if (!mouseMoved) {
        pointer.x =
          (0.5 +
            0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 +
            0.2 * Math.cos(0.005 * t) +
            0.1 * Math.cos(0.01 * t)) *
          window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, i) => {
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * params.spring : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      // SyncDraw Gradient
      const gradient = ctx.createLinearGradient(
        pointer.x - 100,
        pointer.y - 100,
        pointer.x + 100,
        pointer.y + 100
      );

      gradient.addColorStop(0, "#2EA7FF");
      gradient.addColorStop(1, "#22C55E");

      ctx.strokeStyle = gradient;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) * 0.5;
        const yc = (trail[i].y + trail[i + 1].y) * 0.5;

        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth =
          params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }

      requestAnimationFrame(update);
    };

    update(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default CursorTrail;
