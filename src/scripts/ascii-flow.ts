declare global {
  interface Window {
    __asciiFlowFieldTeardown__?: () => void;
  }
}

type Character = {
  x: number;
  y: number;
  tone: number;
  phaseX: number;
  phaseY: number;
  periodX: number;
  periodY: number;
  amplitudeX: number;
  amplitudeY: number;
  glyph: string;
  alpha: number;
  offsetX: number;
  offsetY: number;
  velocityX: number;
  velocityY: number;
};

const canvas = document.querySelector<HTMLCanvasElement>('[data-ascii-flow-field]');

if (canvas) {
  window.__asciiFlowFieldTeardown__?.();

  const context = canvas.getContext('2d');
  if (context) {
    const glyphs = ['.', ':', '+', '-', '*'];
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(any-hover: hover) and (any-pointer: fine)');
    const radius = 140;
    const displacementCap = 28;
    const velocityCap = 180;
    const spring = 120;
    const damping = 22;
    let width = 1;
    let height = 1;
    let frame = 0;
    let previous = 0;
    let time = 0;
    let visible = !document.hidden;
    let colors = { primary: '', secondary: '', structural: '' };
    let characters: Character[] = [];
    const pointer = { x: -9999, y: -9999, active: false };

    const cacheColors = () => {
      const styles = getComputedStyle(document.documentElement);
      colors = {
        primary: styles.getPropertyValue('--flow-primary').trim(),
        secondary: styles.getPropertyValue('--flow-secondary').trim(),
        structural: styles.getPropertyValue('--flow-structural').trim(),
      };
    };

    const restingPosition = (character: Character) => ({
      x: character.x + Math.sin((time * Math.PI * 2) / character.periodX + character.phaseX) * character.amplitudeX,
      y: character.y + Math.cos((time * Math.PI * 2) / character.periodY + character.phaseY) * character.amplitudeY,
    });

    const settle = (character: Character, restX: number, restY: number, delta: number) => {
      let targetX = 0;
      let targetY = 0;
      if (pointer.active && finePointer.matches && !reducedMotion.matches) {
        const dx = restX - pointer.x;
        const dy = restY - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < radius) {
          const falloff = (1 - distance / radius) ** 1.25;
          const directionX = distance > 0.001 ? dx / distance : Math.cos(character.phaseX);
          const directionY = distance > 0.001 ? dy / distance : Math.sin(character.phaseY);
          targetX = directionX * displacementCap * falloff;
          targetY = directionY * displacementCap * falloff;
        }
      }
      const accelerationX = spring * (targetX - character.offsetX) - damping * character.velocityX;
      const accelerationY = spring * (targetY - character.offsetY) - damping * character.velocityY;
      character.velocityX += accelerationX * delta;
      character.velocityY += accelerationY * delta;
      const velocity = Math.hypot(character.velocityX, character.velocityY);
      if (velocity > velocityCap) {
        character.velocityX = (character.velocityX / velocity) * velocityCap;
        character.velocityY = (character.velocityY / velocity) * velocityCap;
      }
      character.offsetX += character.velocityX * delta;
      character.offsetY += character.velocityY * delta;
      const displacement = Math.hypot(character.offsetX, character.offsetY);
      if (displacement > displacementCap) {
        character.offsetX = (character.offsetX / displacement) * displacementCap;
        character.offsetY = (character.offsetY / displacement) * displacementCap;
      }
    };

    const draw = (delta: number) => {
      if (reducedMotion.matches) delta = 0;
      time += delta;
      context.clearRect(0, 0, width, height);
      context.font = `${width <= 640 ? 10 : 12}px "Fragment Mono", monospace`;
      context.textBaseline = 'top';
      for (const character of characters) {
        const rest = restingPosition(character);
        settle(character, rest.x, rest.y, delta);
        context.globalAlpha = character.alpha;
        context.fillStyle = character.tone === 0 ? colors.primary : character.tone === 1 ? colors.secondary : colors.structural;
        context.fillText(character.glyph, rest.x + character.offsetX, rest.y + character.offsetY);
      }
      context.globalAlpha = 1;
    };

    const rebuild = () => {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = width <= 640;
      const columns = mobile ? 24 : 76;
      const rows = mobile ? 42 : 40;
      const columnStep = width / columns;
      const rowStep = height / rows;
      context.font = `${mobile ? 10 : 12}px "Fragment Mono", monospace`;
      context.textBaseline = 'top';
      characters = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const seed = column * 37 + row * 61;
        return {
          x: (column + 0.5) * columnStep,
          y: (row + 0.5) * rowStep,
          tone: seed % 3,
          phaseX: ((seed * 17) % 360) * (Math.PI / 180),
          phaseY: ((seed * 29 + 47) % 360) * (Math.PI / 180),
          periodX: 4 + (seed % 31) / 10,
          periodY: 4 + ((seed * 7 + 19) % 31) / 10,
          amplitudeX: 10 + ((seed * 5) % 61) / 10,
          amplitudeY: 10 + ((seed * 13 + 3) % 61) / 10,
          glyph: glyphs[(column * 3 + row * 5 + seed) % glyphs.length] ?? '.',
          alpha: mobile ? 0.14 + ((column + row * 2) % 11) * 0.01 : 0.12 + ((column * 2 + row) % 13) * 0.01,
          offsetX: 0,
          offsetY: 0,
          velocityX: 0,
          velocityY: 0,
        };
      });
      cacheColors();
      draw(0);
    };

    const hasMomentum = () => characters.some((character) => Math.hypot(character.offsetX, character.offsetY) > 0.25 || Math.hypot(character.velocityX, character.velocityY) > 0.5);
    const stop = () => { if (frame) cancelAnimationFrame(frame); frame = 0; };
    const tick = (now: number) => {
      if (!visible || reducedMotion.matches) return stop();
      const interval = pointer.active || hasMomentum() ? 24 : 50;
      if (!previous || now - previous >= interval) {
        const delta = previous ? Math.min((now - previous) / 1000, 0.12) : 0;
        draw(delta);
        previous = now;
      }
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame && visible && !reducedMotion.matches) {
        previous = 0;
        frame = requestAnimationFrame(tick);
      }
    };
    const resetPointer = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.active = false;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !finePointer.matches || reducedMotion.matches) {
        resetPointer();
        return;
      }
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = event.clientX >= 0 && event.clientY >= 0 && event.clientX <= width && event.clientY <= height;
      start();
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) resetPointer();
    };
    const onVisibilityChange = () => { visible = !document.hidden; if (visible) start(); else stop(); };
    const onPreferenceChange = () => { resetPointer(); rebuild(); if (reducedMotion.matches) stop(); else start(); };
    const onThemeChange = () => { cacheColors(); draw(0); };
    const onPageHide = () => window.__asciiFlowFieldTeardown__?.();
    const observer = new ResizeObserver(rebuild);

    observer.observe(document.documentElement);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerout', onPointerOut, { passive: true });
    window.addEventListener('pointercancel', resetPointer, { passive: true });
    window.addEventListener('blur', resetPointer);
    document.addEventListener('visibilitychange', onVisibilityChange);
    reducedMotion.addEventListener('change', onPreferenceChange);
    finePointer.addEventListener('change', onPreferenceChange);
    window.addEventListener('portfolio:theme-change', onThemeChange);
    window.addEventListener('pagehide', onPageHide, { once: true });
    window.__asciiFlowFieldTeardown__ = () => {
      stop();
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('pointercancel', resetPointer);
      window.removeEventListener('blur', resetPointer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reducedMotion.removeEventListener('change', onPreferenceChange);
      finePointer.removeEventListener('change', onPreferenceChange);
      window.removeEventListener('portfolio:theme-change', onThemeChange);
      window.removeEventListener('pagehide', onPageHide);
      if (window.__asciiFlowFieldTeardown__) delete window.__asciiFlowFieldTeardown__;
    };
    rebuild();
    start();
  }
}

export {};
