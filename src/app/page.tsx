import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="min-h-screen max-w-7xl mx-auto">
        <Header />
      </div>
    </div>

  );
}
