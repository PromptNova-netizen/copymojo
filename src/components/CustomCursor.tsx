import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Use springs for smooth following
  const cursorX = useSpring(0, { stiffness: 400, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28, mass: 0.5 });
  
  // Slower spring for the glowing trail
  const trailX = useSpring(0, { stiffness: 150, damping: 30, mass: 1.5 });
  const trailY = useSpring(0, { stiffness: 150, damping: 30, mass: 1.5 });

  useEffect(() => {
    // Only show on devices with a mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY, trailX, trailY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] h-screen w-screen overflow-hidden">
      {/* Primary dot */}
      <motion.div
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-primary-400 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Glowing trail */}
      <motion.div
        className="absolute left-0 top-0 h-24 w-24 rounded-full bg-primary-500/10 blur-xl mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
