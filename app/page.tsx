"use client";

import { Button, Footer, Lens, Navbar, NerdAlert } from "./components";
import { motion } from "framer-motion";
import { useBlindCtx } from "@/utils/BlindContext";
import { headlineVariants } from "@/utils/animation";

export default function Home() {
  const { isBlind } = useBlindCtx();

  return (
    <motion.main
      animate={isBlind ? "isBlind" : "isNotBlind"}
      className="grid h-full"
    >
      <Lens>
        <NerdAlert />
      </Lens>
      <article className="col-span-full row-span-full flex flex-col h-full">
        <Navbar />
        <section className="text-small grow grid">
          <section className="col-span-full row-span-full text-[43.75rem] leading-[0] flex items-center justify-center overflow-hidden">
            <p className="font-black text-clr-accent-800">404</p>
          </section>
          <article className="px-20 col-span-full row-span-full flex items-center justify-center">
            <span className="flex flex-col gap-[2.75rem]">
              <div className="text-center">
                <motion.h1
                  variants={headlineVariants}
                  className="text-[4rem] text-clr-scndry leading-[1.5]"
                >
                  You Got Lost!
                </motion.h1>
                <p className="text-[.875rem] font-bold">
                  Always keep your lens in hand... Mind your lenses, sharpen
                  your senses.
                </p>
              </div>
              <div className="flex flex-col items-center gap-[.5rem]">
                <span className="text-[0.625rem]">Be on your way now.</span>
                <a href="https://later.com/social-media-glossary/touch-grass/#:~:text=What%20does%20it%20mean%20when,in%20virtual%20or%20digital%20environments.">
                  <Button className="px-24">Get Found</Button>
                </a>
              </div>
            </span>
          </article>
        </section>
        <Footer />
      </article>
    </motion.main>
  );
}
