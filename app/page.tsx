import { Footer, Navbar } from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-20">
        <h1>Main Content</h1>
      </main>
      <Footer />
    </>
  );
}
