import React, { useRef } from 'react';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  accentColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Converte hex (#rgb / #rrggbb) em rgba com a opacidade informada.
const toRgba = (color: string, alpha: number) => {
  const hex = color.replace('#', '');
  const expand = (h: string) => parseInt(h.length === 1 ? h + h : h, 16);

  if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    return `rgba(${expand(hex[0])}, ${expand(hex[1])}, ${expand(hex[2])}, ${alpha})`;
  }

  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4, 6), 16)}, ${alpha})`;
  }

  return color;
};

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '100%',
  height = 'auto',
  background = 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(12,10,9,0.92) 55%, #000 100%)',
  borderRadius = '1rem',
  borderColor = 'rgba(255,255,255,0.08)',
  accentColor = '#34d399',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const glareRgba = toRgba(glareColor, glareOpacity);
  const accentGlow = toRgba(accentColor, 0.35);
  const accentSoft = toRgba(accentColor, 0.16);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const setSpotlight = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  const animateIn = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;

    // Posiciona o spotlight já no primeiro frame para evitar o "salto" do brilho.
    setSpotlight(event);
    el.style.borderColor = accentColor;
    el.style.boxShadow = `0 22px 45px -18px ${accentGlow}, 0 0 0 1px ${accentSoft}, inset 0 1px 0 0 rgba(255,255,255,0.08)`;

    overlay.style.transition = 'none';
    overlay.style.backgroundPosition = '-100% -100%, 0 0';
    overlay.style.transition = `${transitionDuration}ms ease`;
    overlay.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = cardRef.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;

    el.style.borderColor = borderColor;
    el.style.boxShadow = '';

    if (playOnce) {
      overlay.style.transition = 'none';
      overlay.style.backgroundPosition = '-100% -100%, 0 0';
    } else {
      overlay.style.transition = `${transitionDuration}ms ease`;
      overlay.style.backgroundPosition = '-100% -100%, 0 0';
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${glareRgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none'
  };

  return (
    <div
      ref={cardRef}
      className={`group relative isolate grid aspect-square w-full cursor-pointer place-items-center justify-self-center overflow-hidden border transition-all duration-500 ease-out hover:-translate-y-1 [&_svg]:transition-[filter] [&_svg]:duration-500 hover:[&_svg]:brightness-110 hover:[&_svg]:drop-shadow-[0_0_18px_var(--accent)] ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        '--accent': accentColor,
        ...style
      } as React.CSSProperties}
      onMouseEnter={animateIn}
      onMouseMove={setSpotlight}
      onMouseLeave={animateOut}
    >
      {/* Spotlight que segue o cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(150px circle at var(--mx, 50%) var(--my, 50%), ${accentSoft}, transparent 70%)`
        }}
      />

      <div ref={overlayRef} style={overlayStyle} />

      <div className="relative z-10 flex h-[60%] w-[60%] items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
        {children}
      </div>
    </div>
  );
};

export default GlareHover;
