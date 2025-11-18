"use client";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiPrisma, SiGit, SiGithub, SiStripe } from "react-icons/si";
import GlareHover from "@/components/GlareHover";



export function Tecnologies() {
    return (
        <div className="mt-10 md:mt-20 ">



            <h2 className="text-3xl md:text-4xl text-white text-center font-bold mb-8">Tecnologias que utilizo</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-0 mx-auto mb-12">

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <FaHtml5 className="w-12 h-12 text-red-600 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />

                </GlareHover>


                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <FaCss3Alt className="w-12 h-12 text-blue-600 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>



                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <FaNodeJs className="w-12 h-12 text-amber-300 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <FaReact className="w-12 h-12 text-blue-400 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>
                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <FaSass className="w-12 h-12 text-rose-400 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <RiTailwindCssFill className="w-12 h-12 text-blue-400 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>
                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <RiNextjsFill className="w-12 h-12 text-slate-800 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>
                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <SiTypescript className="w-12 h-12 text-blue-600 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <SiPrisma className="w-12 h-12 text-white animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>
                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <SiGit className="w-12 h-12 text-orange-600 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <SiGithub className="w-12 h-12 text-white animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

                <GlareHover
                    className=" p-2"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <SiStripe className="w-12 h-12 text-violet-500 animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear" />
                </GlareHover>

            </div>
        </div >
    )
}