import { useEffect } from 'react';

export default function SnakeCursor({ enabled, color = '#00ffff', size = 10, count = 30 }) {
  useEffect(() => {
    if (!enabled) return;

    const trail = [];
    let positions = new Array(count).fill({ x: 0, y: 0 });

    // Create dots
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'snake-dot';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = color;
      dot.style.position = 'fixed';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = 9999;
      dot.style.opacity = `${1 - i / count}`;
      dot.style.willChange = 'transform';
      dot.style.filter = 'blur(0.5px)';
      document.body.appendChild(dot);
      trail.push(dot);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // insert new position and drop last
      const newPositions = [{ x: mouseX, y: mouseY }, ...positions.slice(0, count - 1)];
      positions = newPositions;

      // move each dot
      trail.forEach((dot, i) => {
        const { x, y } = positions[i];
        dot.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouse);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouse);
      trail.forEach(dot => dot.remove());
    };
  }, [enabled, color, size, count]);

  return null;
}
