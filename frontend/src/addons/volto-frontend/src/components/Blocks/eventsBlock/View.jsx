import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import './style.css';

const MeshBanner = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    const nodeCount = 40;
    const maxDistance = 120;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 300;
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          pulse: 0,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 255, 200, 0.15)';
      ctx.fillStyle = '#00ffc8';

      for (let i = 0; i < nodes.length; i++) {
        let p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (Math.random() > 0.995 && p.pulse === 0) p.pulse = 1;

        for (let j = i + 1; j < nodes.length; j++) {
          let p2 = nodes[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        if (p.pulse > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.pulse * 30, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 200, ${1 - p.pulse})`;
          ctx.stroke();
          p.pulse += 0.02;
          if (p.pulse > 1) p.pulse = 0;
        }
      }
      requestRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    requestRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <div className="banner-container">
      <canvas ref={canvasRef} id="meshCanvas" />
      <div className="banner-content">
        <h1>UPCOMING EVENTS</h1>
      </div>
    </div>
  );
};

export default withBlockExtensions(MeshBanner);
