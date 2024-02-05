import { useBlindCtx } from "@/utils/BlindContext";

export const nerdAdvice = [
  "Go home!!....",
  "Hmmm...Touch grass?",
  "Uhhh, what are you doing?",
  "That's it you're outta here.....",
  "Did you know......that you could do better? \u{1F913}",
];

const Footer = () => {
  const { setIsBlind, setNerdTips } = useBlindCtx();
  const handleNerd = () => {
    const rndNo = Math.floor(Math.random() * 5);
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
