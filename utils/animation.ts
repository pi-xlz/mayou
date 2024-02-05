import type { Variants } from "framer-motion";

export const navVariants: Variants = {
  isBlind: { y: 70, scale: 0.6, transition: { duration: 0.8 } },
  isNotBlind: { scale: 1, y: 0, transition: { duration: 0.8 } },
};

export const nerdAlertVariants: Variants = {
  isBlind: { opacity: 1, transition: { duration: 0.7 } },
  isNotBlind: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.05 },
  },
};

export const headlineVariants: Variants = {
  isBlind: { scale: 0.8, transition: { duration: 0.5 } },
  isNotBlind: { scale: 1, transition: { duration: 0.8 } },
};
