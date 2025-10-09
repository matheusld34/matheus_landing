import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
export function Tecnologies() {
    return (
        <div className="mt-10 md:mt-20 ">
            <h2 className="text-3xl md:text-4xl text-white text-center font-bold mb-8">Tecnologias que utilizo</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-0 mx-auto mb-12">
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <FaHtml5 className="w-12 h-12 text-red-600" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <FaCss3Alt className="w-12 h-12 text-blue-600" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <FaNodeJs className="w-12 h-12 text-amber-300" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <FaReact className="w-12 h-12 text-blue-400" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <FaSass className="w-12 h-12 text-rose-400" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <RiTailwindCssFill className="w-12 h-12 text-blue-400" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <RiNextjsFill className="w-12 h-12 text-slate-800" />
                </div>
                <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                    <SiTypescript className="w-12 h-12 text-blue-600" />
                </div>

            </div>
        </div>
    )
}