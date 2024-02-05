import { useBlindCtx } from "@/utils/BlindContext";

const nerdAdvice = [
  "Looks like we've got another nerd....",
  "Hmmm...Touch grass?",
  "Uhhh, what are you doing?",
  "That's it you're outta here.....",
];

const Footer = () => {
  const { setIsBlind, setNerdTips } = useBlindCtx();
  const handleNerd = () => {
    const rndNo = Math.floor(Math.random() * 4);
    setNerdTips(nerdAdvice[rndNo]);
    setIsBlind(true);
  };

  return (
    <footer className="text-clr-scndry flex justify-between items-center px-20 py-3 border-t border-t-clr-accent-400">
      <button
        onClick={handleNerd}
        className="text-[0.625rem] hover:text-clr-prmry transition"
      >
        Remove Lens
      </button>
      <span className="text-[0.75rem] font-cursive">
        dnd by{" "}
        <span className="text-clr-prmry">
          <a
            target="_blank"
            href="https://github.com/pi-xlz/mayou"
          >
            px
          </a>
        </span>{" "}
      </span>
    </footer>
  );
};

export default Footer;
