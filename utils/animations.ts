import { Variants } from 'framer-motion';

export const heroAnimationVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

export const heroVideoAnimationVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

export const leftAndRightAnimationVariants = (index: number): Variants => {
  if (index % 2 === 0) {
    return {
      offscreen: {
        x: -100,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          // staggerChildren: 1 * (index + 1),
          when: 'beforeChildren',
          stiffness: 100,
        },
      },
    };
  } else {
    return {
      offscreen: {
        x: 100,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          // staggerChildren: 1 * (index + 1),
          when: 'afterChildren',
        },
      },
    };
  }
};

export const featuresAnimationVariants = (index: number): Variants => {
  return {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7 + index * 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };
};

export const projectsAnimationVariants = (index: number): Variants => {
  return {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 1 * (index + 1),
      },
    },
  };
};

export const downloadAppVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
};

export const imageVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
};

export const imageFadeInVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 3,
    },
  },
};

export const rightBottomCorner_SLOW_Variants: Variants = {
  offscreen: {
    opacity: 0,
    x: 190,
    y: 90,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 5,
    },
  },
};

export const rightBottomCorner_FAST_Variants: Variants = {
  offscreen: {
    opacity: 0,
    x: 190,
    y: 90,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 2,
    },
  },
};

export const bottomUpVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 80,
    x: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 2,
    },
  },
};

export const rightToLeftVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 0,
    x: 100,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 1,
    },
  },
};

export const leftToRightVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 0,
    x: -100,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 5,
    },
  },
};

export const bottomToTopVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
    x: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
};

export const TopToBottomVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -40,
    x: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
};

export const staggerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.5, // Adjust the delay timing
    },
  }),
};
