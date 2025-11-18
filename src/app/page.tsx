import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Tecnologies } from "./components/tecnlogies";
import { CarouselSize } from "./components/carousel";
import { Footer } from "./components/footer"


export default function Home() {
  return (
    <div className="bg-stone-950">
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Tecnologies />
        <CarouselSize />

      </div>
      <Footer />
    </div>

  );
}
