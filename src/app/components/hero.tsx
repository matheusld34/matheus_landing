import Image from "next/image";
import doctorImg from "../../../public/matheus1.png";
export function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row md:justify-between  justify-center px-4 md:px-0 mt-10 md:mt-20 border-b border-gray-700 pb-10 md:pb-20 gap-10 ">

            <div className="flex-[2] space-y-8 max-w-3xl flex flex-col justify-center">
                <article className="space-y-8 max-w-3xl flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-4">Prazer em conhecer você !</h2>
                    <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-4">Meu nome é <span className="underline decoration-emerald-400"> Matheus Santos</span></h2>
                    <p className="text-sm text-gray-300 text-center mt-7">Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com habilidades em React, Next.js, JavaScript e TypeScript, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.</p>
                </article>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <Image
                    src={doctorImg}
                    alt="Doctor Hero"
                    width={340}
                    height={400}
                    className="object-contain rounded-lg animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out"
                    quality={100}
                    priority={true} />
            </div>

        </div>

    )
}