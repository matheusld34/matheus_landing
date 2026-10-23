"use client";
import FotoImg from "../../../public/matheus1.png";
import TiltedCard from "@/components/TiltedCard";


export function Hero() {
    return (

        <section className="relative flex flex-col-reverse md:flex-row md:items-center md:justify-between px-4 md:px-0 mt-0 md:mt-2 border-b border-gray-700 pb-10 md:pb-20 gap-10 ">

            {/* Brilhos decorativos de fundo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />
            </div>

            <div className="relative flex-[2] max-w-3xl flex flex-col justify-center">
                <article className="flex flex-col items-center gap-6 md:items-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 animate-fade-up animate-duration-[1500ms]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Desenvolvedor Full-Stack Jr
                    </span>

                    <h2 className="text-4xl md:text-5xl text-white text-center md:text-left font-bold animate-fade-up animate-delay-150 animate-duration-[2000ms]">
                        Prazer em te conhecer !
                    </h2>

                    <h2 className="text-3xl md:text-4xl text-white text-center md:text-left font-bold animate-fade-up animate-delay-300 animate-duration-[2000ms]">
                        Meu nome é{" "}
                        <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(52,211,153,0.35)]">
                            Matheus Santos
                        </span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-gray-400 text-center md:text-left animate-fade-up animate-delay-500 animate-duration-[2000ms]">
                        Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com habilidades em React, Next.js, JavaScript e TypeScript, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
                    </p>
                </article>
            </div>

            <div className="group relative flex-1 flex justify-center items-center">

                <div className="pointer-events-none absolute inset-0 m-auto h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-700 ease-out group-hover:h-72 group-hover:w-72 group-hover:bg-emerald-400/25" />

                <div className="relative animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out">
                    <TiltedCard
                        imageSrc={FotoImg.src}
                        altText="Matheus Santos - Developer"
                        captionText="Matheus Santos - Developer"
                        containerHeight="400px"
                        containerWidth="350px"
                        imageHeight="400px"
                        imageWidth="340px"
                        rotateAmplitude={14}
                        scaleOnHover={1.08}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}

                    />
                </div>



            </div>

        </section >

    )
}
