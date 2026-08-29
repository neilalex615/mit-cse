(function () {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const chars = "アイウエオカキクケコサシスセソ0123456789GPA8951";
  const fontSize = 16;
  let width, height, columns, drops, animationId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -40));
  }

  window.addEventListener("resize", resize);
  resize();

  function frame() {
    ctx.fillStyle = "rgba(16, 21, 27, 0.15)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#34d399";
    ctx.font = fontSize + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    animationId = requestAnimationFrame(frame);
  }

  window.MatrixEffect = {
    start() {
      ctx.fillStyle = "#10151b";
      ctx.fillRect(0, 0, width, height);
      if (prefersReduced) return;
      if (!animationId) frame();
    },
    stop() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  };
})();
