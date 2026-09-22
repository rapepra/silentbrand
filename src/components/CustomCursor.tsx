import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only activate for fine pointer (desktop mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const interactive = target.closest('button, a, input, select, [role="button"]');
        if (interactive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central pinpoint */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full bg-silent-bone mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Atmospheric follower ring / disc */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] flex items-center justify-center rounded-full border border-white/20 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorText ? 36 : isHovered ? 24 : 14),
          y: mousePosition.y - (cursorText ? 36 : isHovered ? 24 : 14),
          width: cursorText ? 72 : isHovered ? 48 : 28,
          height: cursorText ? 72 : isHovered ? 48 : 28,
          backgroundColor: cursorText ? 'rgba(10, 10, 10, 0.85)' : isHovered ? 'rgba(36, 8, 12, 0.4)' : 'transparent',
          borderColor: cursorText ? 'rgba(237, 237, 237, 0.4)' : isHovered ? 'rgba(237, 237, 237, 0.5)' : 'rgba(237, 237, 237, 0.15)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.15 }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] tracking-[0.2em] text-silent-bone font-medium uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
