import { Button, Footer, Lens, Navbar, NerdAlert } from "./components";

export default function Home() {
  return (
    <main className="grid h-full">
      <Lens>
        <NerdAlert />
      </Lens>
      <article className="col-span-full row-span-full flex flex-col h-full">
        <Navbar />
        <section className="text-small grow grid">
          <section className="col-span-full row-span-full text-[43.75rem] leading-[0] flex items-center justify-center overflow-hidden">
            <p className="font-black text-clr-accent-300 text-stroke">404</p>
          </section>
          <article className="px-20 col-span-full row-span-full flex items-center justify-center">
            <span className="flex flex-col gap-[2.75rem]">
              <div className="text-center">
                <h1 className="text-[4rem] text-clr-scndry leading-tight">
                  You Got Lost!
                </h1>
                <p className="text-[.875rem] font-bold">
                  Always keep your lens in hand. Mind your lenses, sharpen your
                  senses.
                </p>
              </div>
              <div className="flex flex-col items-center gap-[.5rem]">
                <span className="text-[0.625rem]">Be on your way now.</span>
                <Button className="px-24 ">Get Found</Button>
              </div>
            </span>
          </article>
        </section>
        <Footer />
      </article>
    </main>
  );
}
