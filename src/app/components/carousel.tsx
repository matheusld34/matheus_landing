"use client"
import { ArrowUpRight } from "lucide-react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TrueFocus from "@/components/TrueFocus";
import foto from "../../assets/landing.jpg"
import foto2 from "../../assets/PetDev.jpg"
import foto3 from "../../assets/DevControle.jpg"
import foto4 from "../../assets/DalyGames.jpg"
import foto5 from "../../assets/Street.jpg"
import foto6 from "../../assets/Pizza.jpg"

interface Project {
    id: number;
    title: string;
    image?: string | { src: string };
    url?: string;
}

const data: Project[] = [
    { id: 1, title: "landing page xyz", image: foto, url: "https://github.com/matheusld34/landing-page-com-grid-agencia-xyz" },
    { id: 2, title: "Projeto PetDev", image: foto2, url: "https://github.com/matheusld34/PetDev" },
    { id: 3, title: "Projeto DevControle", image: foto3, url: "https://github.com/matheusld34/DevControle" },
    { id: 4, title: "Projeto DalyGames", image: foto4, url: "https://github.com/matheusld34/DalyGames" },
    { id: 5, title: "Projeto Street Fighter", image: foto5, url: "https://github.com/matheusld34/Projeto-Street-Fighter" },
    { id: 6, title: "Projeto Pizza", image: foto6, url: "https://github.com/matheusld34/Automatiza-o_de_restaurante" },
]

export function CarouselSize() {
    return (
        <section className="relative mt-10 border-b border-gray-700 pb-10 md:mt-20 md:pb-20">

            {/* Brilho decorativo de fundo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 right-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
            </div>

            <div className="relative">
                <div className="flex flex-col items-center gap-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 animate-fade-up animate-duration-[1500ms]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Projetos
                    </span>

                    <div className="text-3xl md:text-4xl text-white text-center border-b border-gray-700 font-bold pb-10 md:pb-20 gap-10 w-full mb-8">
                        <TrueFocus
                            sentence="Alguns Projetos Desenvolvidos Por Mim"
                            manualMode={false}
                            blurAmount={6}
                            borderColor="#5fe398"
                            glowColor="rgba(95, 227, 152, 0.55)"
                            animationDuration={1.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="py-6">
                        {data.map((item) => (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                                <article className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-stone-950/80 shadow-lg shadow-black/40 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-[0_25px_60px_-25px_rgba(16,185,129,0.55)]">

                                    <div className="relative overflow-hidden">
                                        <img
                                            src={typeof item.image === 'string' ? item.image : item.image?.src}
                                            alt={item.title}
                                            className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.06]"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-stone-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-300 backdrop-blur-md">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            {String(item.id).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                                        <h3 className="text-lg font-semibold capitalize leading-snug text-white transition-colors duration-300 group-hover/card:text-emerald-300">
                                            {item.title}
                                        </h3>

                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                                        >
                                            Ver projeto
                                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-3 z-20 size-10 border border-white/10 bg-stone-950/70 text-gray-200 backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300" />
                    <CarouselNext className="right-3 z-20 size-10 border border-white/10 bg-stone-950/70 text-gray-200 backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300" />
                </Carousel>
            </div>
        </section>
    )
}
