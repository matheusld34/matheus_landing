import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const CORNERS = [
  'top-[-7px] left-[-7px] border-r-0 border-b-0',
  'top-[-7px] right-[-7px] border-l-0 border-b-0',
  'bottom-[-7px] left-[-7px] border-r-0 border-t-0',
  'bottom-[-7px] right-[-7px] border-l-0 border-t-0'
];

// Folga da moldura em relação ao texto, para que os cantos nunca cruzem as letras.
const PAD_X = 12;
const PAD_Y = 8;

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(52, 211, 153, 0.55)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const [measured, setMeasured] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  // Duração curta e constante para o feedback de cada palavra (blur/escala),
  // independente da duração usada no deslocamento da moldura.
  const wordTransition = Math.min(animationDuration, 0.7);

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  const measure = useCallback(() => {
    if (currentIndex === null || currentIndex === -1) return;
    const activeWord = wordRefs.current[currentIndex];
    if (!activeWord) return;

    // Usa medidas de layout (não afetadas por transforms) para a moldura
    // acompanhar a palavra sem herdar o scale/deslocamento da animação.
    setFocusRect({
      x: activeWord.offsetLeft - PAD_X,
      y: activeWord.offsetTop - PAD_Y,
      width: activeWord.offsetWidth + PAD_X * 2,
      height: activeWord.offsetHeight + PAD_Y * 2
    });
    setMeasured(true);
  }, [currentIndex]);

  useEffect(() => {
    measure();
  }, [measure, words.length]);

  // Recalcula a moldura em mudanças de layout (resize, scroll por fontes, etc.)
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex!);
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <motion.span
            key={`${word}-${index}`}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className="relative inline-block cursor-pointer select-none whitespace-nowrap text-[2rem] font-black leading-tight sm:text-[2.5rem] md:text-[3rem]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animate={{
              filter: isActive ? `blur(0px) drop-shadow(0 0 18px ${glowColor})` : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.4,
              scale: isActive ? 1.05 : 1
            }}
            transition={{ duration: wordTransition, ease: 'easeOut' }}
          >
            <span className="relative block whitespace-nowrap text-white/85">{word}</span>
            <motion.span
              aria-hidden
              className="absolute inset-0 block whitespace-nowrap bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 bg-clip-text text-transparent"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: wordTransition, ease: 'easeOut' }}
            >
              {word}
            </motion.span>
          </motion.span>
        );
      })}

      <motion.div
        className="pointer-events-none absolute left-0 top-0 box-border"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: measured ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.6 }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as React.CSSProperties
        }
      >
        {/* Halo suave atrás da palavra ativa */}
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(closest-side, var(--glow-color), transparent 75%)',
            filter: 'blur(12px)',
            opacity: 0.45
          }}
        />

        {/* Contorno interno sutil */}
        <span
          className="absolute inset-0 rounded-xl border opacity-30"
          style={{ borderColor: 'var(--border-color)' }}
        />

        {/* Cantos de foco com brilho pulsante */}
        {CORNERS.map(position => (
          <motion.span
            key={position}
            className={`absolute h-3.5 w-3.5 rounded-[4px] border-2 ${position}`}
            style={{
              borderColor: 'var(--border-color)',
              filter: 'drop-shadow(0 0 6px var(--border-color))'
            }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrueFocus;
