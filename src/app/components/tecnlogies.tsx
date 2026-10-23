"use client";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiPrisma, SiGit, SiGithub, SiStripe } from "react-icons/si";
import GlareHover from "@/components/GlareHover";
import LogoLoop from "@/components/LogoLoop";
import TrueFocus from "@/components/TrueFocus";

const technologies = [
    { name: "HTML5", icon: FaHtml5, color: "text-red-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-amber-300" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Sass", icon: FaSass, color: "text-rose-400" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-blue-400" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-slate-800" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Prisma", icon: SiPrisma, color: "text-white" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Stripe", icon: SiStripe, color: "text-violet-500" },
];

const cards = technologies.map(({ name, icon: Icon, color }) => ({
    title: name,
    node: (
        <GlareHover width="150px" className="p-2">
            <Icon
                className={`h-full w-full ${color} animate-rotate-x animate-infinite animate-duration-[2000ms] animate-ease-linear`}
            />
        </GlareHover>
    ),
}));

export function Tecnologies() {
    return (
        <div className="mt-10 md:mt-20 ">

            <div className="text-3xl md:text-4xl text-white text-center border-b border-gray-700 font-bold pb-10 md:pb-20 gap-10  mb-8">
                <TrueFocus
                    sentence="Tecnologias Utilizadas Nos Meus Projetos"
                    manualMode={false}
                    blurAmount={6}
                    borderColor="#5fe398"
                    glowColor="rgba(95, 227, 152, 0.55)"
                    animationDuration={1.5}
                    pauseBetweenAnimations={1}
                />
            </div>

            <LogoLoop
                logos={cards}
                speed={70}
                gap={24}
                pauseOnHover
                fadeOut
                fadeOutColor="#0c0a09"
                ariaLabel="Tecnologias utilizadas nos meus projetos"
                className="mt-10 mb-12 px-4 py-6 md:px-0"
            />
        </div >
    )
}
