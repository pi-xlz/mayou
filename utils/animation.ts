import type { Variants } from "framer-motion";

export const navVariants: Variants = {
  isBlind: {},
  isNotBlind: {},
};

export const nerdAlertVariants: Variants = {
  isBlind: { opacity: 1, transition: { duration: 0.8 } },
  isNotBlind: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.05 },
  },
};
