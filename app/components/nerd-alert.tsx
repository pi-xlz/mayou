import { NerdIcon } from "@/public/assets/icons";
import { Button } from ".";
import { motion } from "framer-motion";
import { nerdAlertVariants } from "@/utils/animation";
import { useBlindCtx } from "@/utils/BlindContext";
import { nerdAdvice } from "./footer";

const NerdAlert = () => {
  const { setIsBlind, nerdTips } = useBlindCtx();

  return (
    <motion.div
      variants={nerdAlertVariants}
      className="flex gap-[7.4375rem] items-center justify-between bg-clr-accent-600 py-[.625rem] pr-[0.5625rem] pl-[1.1875rem] rounded-xl border border-clr-accent-700"
    >
      <div className="flex gap-3 text-clr-scndry grow-0 items-center">
        <div>
          <NerdIcon />
        </div>
        <p>{nerdTips}</p>
      </div>
      <Button
        onClick={() => {
          if (nerdTips === nerdAdvice[3])
            window.open("https://www.youtube.com/shorts/dMObcjEI50w");
          setIsBlind(false);
        }}
        className="text-clr-scndry font-normal text-sm px-[1.375rem] py-[0.625rem] bg-base rounded-[0.625rem] border border-clr-accent-100 hover:bg-clr-accent-600 transition active:scale-95"
      >
        Use Lens
      </Button>
    </motion.div>
  );
};

export default NerdAlert;
