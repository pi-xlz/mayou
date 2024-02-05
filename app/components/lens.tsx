import { useBlindCtx } from "@/utils/BlindContext";
import { cn } from "@/utils/helpers";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type IProps = PropsWithChildren;

const Lens = ({ children }: IProps) => {
  const { isBlind } = useBlindCtx();
  return (
    <motion.section
      className={cn(
        "col-span-full row-span-full bg-clr-accent-500 flex items-center justify-center w-full h-full z-50 lens",
        { visible: isBlind }
      )}
    >
      {children}
    </motion.section>
  );
};

export default Lens;
