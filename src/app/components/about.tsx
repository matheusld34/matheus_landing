"use client"

import { useEffect, useState } from "react";
import { FaGraduationCap, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import CardSwap, { Card } from "@/components/CardSwap";

const technologies = ["React", "Next.js", "Tailwind CSS", "Prisma", "TypeScript", "GitHub"];

const cardSurface = (accent: string) => ({
    background: `linear-gradient(160deg, ${accent} 0%, rgba(9, 9, 11, 0.96) 55%)`,
    borderColor: "rgba(255, 255, 255, 0.12)",
});

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-gray-400">{label}</span>
            <span className="text-right font-medium text-white">{value}</span>
        </div>
    );
}

export function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const sync = () => setIsMobile(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    return (

        <div className="relative flex flex-col-reverse md:flex-row md:justify-between border-b border-gray-700 pb-10 md:pb-20 ">

            {/* Brilho decorativo de fundo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
            </div>

            <div className="relative flex-[2] space-y-8 max-w-3xl flex flex-col justify-center mt-10 md:mt-20 px-4 md:px-0">
                <article className="flex flex-col items-center gap-6 md:items-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 animate-fade-up animate-duration-[1500ms]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Sobre mim
                    </span>

                    <h2 className="text-4xl md:text-5xl text-white text-center md:text-left font-bold animate-fade-up animate-delay-150 animate-duration-[2000ms]">
                        Um pouco da minha{" "}
                        <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                            História
                        </span>{" "}
                        !
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-gray-400 text-center md:text-left animate-fade-up animate-delay-300 animate-duration-[2000ms]">
                        Com as formações de técnico de informática, e análise e desenvolvimento de sistemas sou um profissional de TI com sólida base em desenvolvimento de software, análise de requisitos e lógica de programação. Possui experiência com manutenção, suporte técnico, adquirida por meio da formação técnica e prática. Demonstrou facilidade em aprender novas tecnologias, boa capacidade de resolução de problemas e forte compromisso com a qualidade das entregas. Preparado para atuar em equipes de desenvolvimento ou suporte, contribuindo para soluções eficientes e inovadoras na área de tecnologia.
                    </p>
                </article>
            </div>
            <div className="flex w-full flex-col items-center justify-center pt-8 md:flex-1 md:items-end md:justify-end md:py-50">

                <div className="relative" style={{ width: isMobile ? 280 : 500, height: 400 }}>
                    <CardSwap
                        width={isMobile ? 280 : 500}
                        height={400}
                        cardDistance={isMobile ? 12 : 60}
                        verticalDistance={isMobile ? 14 : 70}
                        delay={5000}
                        pauseOnHover={false}
                        className="bottom-0 right-0 md:origin-bottom-right md:translate-x-[5%] md:translate-y-[20%]"
                    >

                        <Card
                            style={cardSurface("rgba(16, 185, 129, 0.28)")}
                            className="p-6 shadow-2xl shadow-black/60"
                        >
                            <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-5">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                                    <FaLayerGroup size={16} />
                                </span>
                                <h3 className="text-base font-semibold text-white">Tecnologias</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card>

                        <Card
                            style={cardSurface("rgba(59, 130, 246, 0.28)")}
                            className="p-6 shadow-2xl shadow-black/60"
                        >
                            <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-5">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/15 text-blue-300">
                                    <FaLaptopCode size={16} />
                                </span>
                                <h3 className="text-base font-semibold text-white">Técnico de Informática</h3>
                            </div>
                            <div className="space-y-3">
                                <DetailRow label="Instituição" value="Etec Doutora Ruth Cardoso" />
                                <DetailRow label="Formação" value="Técnico em informática" />
                                <DetailRow label="Início" value="Junho de 2017" />
                                <DetailRow label="Término" value="Dezembro de 2018" />
                            </div>
                        </Card>

                        <Card
                            style={cardSurface("rgba(244, 63, 94, 0.26)")}
                            className="p-6 shadow-2xl shadow-black/60"
                        >
                            <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-5">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-400/15 text-rose-300">
                                    <FaGraduationCap size={18} />
                                </span>
                                <h3 className="text-base font-semibold leading-tight text-white">Análise e Desenvolvimento de Sistemas</h3>
                            </div>
                            <div className="space-y-3">
                                <DetailRow label="Instituição" value="Fatec Rubens Lara" />
                                <DetailRow label="Formação" value="Análise e Desenvolvimento de Sistemas" />
                                <DetailRow label="Início" value="Fevereiro de 2019" />
                                <DetailRow label="Término" value="Dezembro de 2022" />
                            </div>
                        </Card>


                    </CardSwap>
                </div>


            </div>

        </div >

    );
}
