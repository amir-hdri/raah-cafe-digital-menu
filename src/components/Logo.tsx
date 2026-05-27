import { motion } from 'motion/react';

export const Logo = ({ size = 'md', animated = true }: { size?: 'sm' | 'md' | 'lg'; animated?: boolean }) => {
  const containerSizes = {
    sm: 'w-32 h-24',
    md: 'w-48 h-36',
    lg: 'w-72 h-56 md:w-[360px] md:h-[260px]',
  };

  // Define variants for the parent container to control the group states (initial, animate, hover)
  const containerVariants = {
    initial: animated ? { opacity: 0, scale: 0.96 } : {},
    animate: animated ? { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.16, 1, 0.3, 1],
      }
    } : {},
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.3 },
    animate: animated ? {
      scale: [1, 1.12, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }
    } : { opacity: 0.3 },
    hover: {
      scale: 1.25,
      opacity: 0.8,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pathVariants = {
    initial: animated ? { opacity: 0, scale: 0.88, y: 12, rotate: -1 } : {},
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotate: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    hover: {
      scale: 1.01,
      x: -3,
      y: -1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const tallBarVariants = {
    initial: animated ? { opacity: 0, scaleY: 0 } : {},
    animate: { 
      opacity: 1, 
      scaleY: 1, 
      transition: { delay: 0.25, duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    hover: {
      x: 3,
      y: -2,
      scaleY: 1.02,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const shortBarVariants = {
    initial: animated ? { opacity: 0, scaleY: 0 } : {},
    animate: { 
      opacity: 1, 
      scaleY: 1, 
      transition: { delay: 0.45, duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    hover: {
      x: 5,
      y: 2,
      scaleY: 0.98,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const text1Variants = {
    initial: animated ? { opacity: 0, y: 15 } : {},
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.65, duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    hover: {
      y: -3,
      opacity: 0.95,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const text2Variants = {
    initial: animated ? { opacity: 0, y: 15 } : {},
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.85, duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    hover: {
      y: 3,
      opacity: 0.95,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={containerVariants}
      style={{ willChange: 'transform, opacity' }}
      className={`${containerSizes[size]} relative flex items-center justify-center group cursor-pointer`}
    >
      {/* Atmosphere Glow */}
      <motion.div 
        variants={glowVariants}
        className="absolute w-[120%] h-[120%] bg-white/[0.02] rounded-full blur-[45px] -z-10 transition-all duration-700 pointer-events-none" 
        style={{ transform: 'translateZ(0)', left: '-10%', top: '-10%' }}
      />

      {/* RAH SVG LOGO */}
      <svg 
        viewBox="0 0 840 620" 
        className="w-full h-full text-matte-white select-none pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal Box with Cutouts */}
        <motion.path
          fill="currentColor"
          fillRule="evenodd"
          d="M 120,180 h 460 v 170 h -460 z M 150,210 h 185 v 110 h -185 z M 365,210 h 185 v 110 h -185 z"
          variants={pathVariants}
          className="origin-center"
        />

        {/* Tall Vertical Bar */}
        <motion.rect
          x="620"
          y="100"
          width="35"
          height="400"
          fill="currentColor"
          variants={tallBarVariants}
          className="origin-top"
        />

        {/* Shorter Vertical Bar */}
        <motion.rect
          x="690"
          y="230"
          width="35"
          height="175"
          fill="currentColor"
          variants={shortBarVariants}
          className="origin-top"
        />

        {/* TEXT LINE 1: IT'S NOT COFFEE */}
        <motion.text
          x="422.5"
          y="465"
          textAnchor="middle"
          fill="currentColor"
          className="font-sans font-extrabold"
          style={{ 
            fontSize: '36px', 
            letterSpacing: '0.15em',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          variants={text1Variants}
        >
          IT'S NOT COFFEE
        </motion.text>

        {/* TEXT LINE 2: IT'S THE WAY FOR SOUL */}
        <motion.text
          x="422.5"
          y="535"
          textAnchor="middle"
          fill="currentColor"
          className="font-sans font-extrabold"
          style={{ 
            fontSize: '36px', 
            letterSpacing: '0.15em',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          variants={text2Variants}
        >
          IT'S THE WAY FOR SOUL
        </motion.text>
      </svg>
    </motion.div>
  );
};

export const PathDecoration = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform, opacity', translateZ: 0 }}
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] liquid-blob" 
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform, opacity', translateZ: 0 }}
        className="absolute bottom-[20%] right-[0%] w-[35vw] h-[35vw] bg-white/[0.03] rounded-full blur-[80px] liquid-blob" 
      />
    </div>
  );
};
