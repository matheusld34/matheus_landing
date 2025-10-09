import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Tecnologies } from "./components/tecnlogies";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Tecnologies />
      </div>
    </div>

  );
}
