import { Logo } from "@/public/assets/icons";
import { Button } from ".";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/animation";

const Navbar = () => {
  return (
    <motion.header
      variants={navVariants}
      className="flex justify-between px-20 pt-14"
    >
      <a
        href="/"
        className="hover:brightness-50 transition ease-in-out duration-200"
      >
        <Logo />
      </a>
      <nav className="flex gap-3">
        <Button variant>Help</Button>
        <Button>Download</Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
