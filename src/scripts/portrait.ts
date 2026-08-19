const canvas = document.querySelector<HTMLCanvasElement>('[data-ascii-portrait]');

if (canvas) {
  const context = canvas.getContext('2d');
  const source = canvas.dataset.source;

  if (context && source) {
    const image = new Image();
    image.decoding = 'async';
    image.src = source;
    let pixels: Uint8ClampedArray | null = null;
    let columns = 0;
    let rows = 0;
    const cellWidth = 10;
    const cellHeight = 14;
    let displayWidth = 0;
    let displayHeight = 0;

    const clamp = (value: number) => Math.max(0, Math.min(1, value));

    const drawPortrait = () => {
      if (!pixels || !columns || !rows) return;
      const styles = getComputedStyle(document.documentElement);
      const palette = {
        primary: styles.getPropertyValue('--portrait-primary').trim(),
        secondary: styles.getPropertyValue('--portrait-secondary').trim(),
        depth: styles.getPropertyValue('--portrait-depth').trim(),
      };
      const glyphRamp = ' .:-=+*#%@';
      context.clearRect(0, 0, displayWidth, displayHeight);
      context.font = '11px "Fragment Mono", monospace';
      context.textBaseline = 'top';

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const offset = (y * columns + x) * 4;
          const red = pixels[offset] ?? 0;
          const green = pixels[offset + 1] ?? 0;
          const blue = pixels[offset + 2] ?? 0;
          const alpha = pixels[offset + 3] ?? 0;
          const luminance = alpha === 0 ? 0 : (red * 0.2126 + green * 0.7152 + blue * 0.0722);
          const exposure = alpha === 0 ? 0 : clamp((luminance - 18) / 105);
          const darkSubject = alpha === 0 ? 0 : clamp((78 - luminance) / 55);
          const warmth = alpha === 0 ? 0 : clamp((red - ((green + blue) / 2) + 5) / 35);
          const subject = Math.max(darkSubject, warmth);
          const normalizedX = (((x + 0.5) / columns) - 0.5) / 0.55;
          const normalizedY = (((y + 0.5) / rows) - 0.46) / 0.64;
          const radialDistance = clamp(1 - normalizedX ** 2 - normalizedY ** 2);
          const vignette = radialDistance ** 2 * (3 - 2 * radialDistance);
          const ink = clamp(
            (
              (vignette ** 1.05)
              * (subject ** 0.72)
              * (0.3 + 0.7 * (exposure ** 0.85))
              - 0.08
            ) / 0.92,
          );
          const glyphIndex = Math.round(ink * (glyphRamp.length - 1));
          const glyph = glyphRamp[glyphIndex] ?? ' ';
          context.fillStyle = luminance > 92
            ? palette.primary
            : luminance > 48
              ? palette.secondary
              : palette.depth;
          context.fillText(glyph, x * cellWidth, y * cellHeight);
        }
      }

      canvas.closest('.wireportrait')?.classList.add('is-ready');
    };

    image.addEventListener('load', async () => {
      await document.fonts.ready;
      columns = window.matchMedia('(max-width: 540px)').matches ? 48 : 68;
      rows = Math.max(
        34,
        Math.round(columns * (image.height / image.width) * (cellWidth / cellHeight)),
      );
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      displayWidth = columns * cellWidth;
      displayHeight = rows * cellHeight;
      const sample = document.createElement('canvas');
      const sampleContext = sample.getContext('2d', { willReadFrequently: true });
      if (!sampleContext) return;

      sample.width = columns;
      sample.height = rows;
      sampleContext.drawImage(image, 0, 0, columns, rows);
      pixels = sampleContext.getImageData(0, 0, columns, rows).data;
      canvas.width = displayWidth * pixelRatio;
      canvas.height = displayHeight * pixelRatio;
      canvas.style.aspectRatio = `${displayWidth} / ${displayHeight}`;
      canvas.closest<HTMLElement>('.wireportrait__stage')?.style.setProperty(
        '--portrait-ratio',
        `${displayWidth} / ${displayHeight}`,
      );
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawPortrait();
    }, { once: true });

    window.addEventListener('portfolio:theme-change', drawPortrait);
  }
}
