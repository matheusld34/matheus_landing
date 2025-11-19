"use client";
import Image from "next/image";
import FotoImg from "../../../public/matheus1.png";
import TiltedCard from "@/components/TiltedCard";


export function Hero() {
    return (

        <div className="flex flex-col-reverse md:flex-row md:justify-between px-4 md:px-0 mt-10 md:mt-20 border-b border-gray-700 pb-10 md:pb-20 gap-10 ">

            <div className="flex-[2] space-y-8 max-w-3xl flex flex-col justify-center">
                <article className="space-y-8 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-4 animate-fade-up animate-duration-[2000ms]">Prazer em te conhecer !</h2>
                    <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-4 animate-fade-up animate-duration-[2000ms]">Meu nome é <span className="underline decoration-emerald-400"> Matheus Santos</span></h2>
                    <p className="text-md font-bold text-gray-300 text-start mt-7 animate-fade-up animate-duration-[2000ms]">Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com habilidades em React, Next.js, JavaScript e TypeScript, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.</p>
                </article>
            </div>
            <div className="flex-1 flex justify-center items-center">

                <div className="object-contain rounded-lg animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out">
                    <TiltedCard
                        imageSrc={FotoImg.src}
                        altText="Matheus Santos - Developer"
                        captionText="Matheus Santos - Developer"
                        containerHeight="400px"
                        containerWidth="350px"
                        imageHeight="400px"
                        imageWidth="340px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}

                    />
                </div>



            </div>

        </div >

    )
}