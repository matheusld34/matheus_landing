import type { SpringOptions } from 'motion/react';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltedCardProps {
  imageSrc: React.ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 18,
  stiffness: 150,
  mass: 0.7
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}: TiltedCardProps) {
  const figureRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [hovered, setHovered] = useState(false);
  const [lastY, setLastY] = useState(0);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([latestGlareX, latestGlareY]: number[]) =>
      `radial-gradient(circle at ${latestGlareX}px ${latestGlareY}px, rgba(255,255,255,0.25), rgba(255,255,255,0.05) 40%, transparent 70%)`
  );

  function updateGlare(e: React.MouseEvent<HTMLElement>) {
    if (!cardRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    glareX.set(e.clientX - cardRect.left);
    glareY.set(e.clientY - cardRect.top);
  }

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!figureRef.current) return;

    const rect = figureRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    updateGlare(e);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    updateGlare(e);
    scale.set(scaleOnHover);
    opacity.set(1);
    setHovered(true);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setHovered(false);
  }

  return (
    <figure
      ref={figureRef}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        ref={cardRef}
        className={`relative rounded-[15px] [transform-style:preserve-3d] transition-shadow duration-500 ${
          hovered
            ? 'shadow-[0_30px_60px_-15px_rgba(16,185,129,0.45)]'
            : 'shadow-[0_12px_35px_-20px_rgba(0,0,0,0.9)]'
        }`}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className={`absolute top-0 left-0 object-cover rounded-[15px] transition-shadow duration-500 will-change-transform [transform:translateZ(0)] ${
            hovered ? 'ring-2 ring-emerald-400/40' : 'ring-1 ring-white/10'
          }`}
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />

        {/* Reflexo que acompanha o cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[3] rounded-[15px]"
          style={{
            background: glareBackground,
            opacity
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
