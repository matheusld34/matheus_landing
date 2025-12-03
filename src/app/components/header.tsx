"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SplitText from "@/components/SplitText";


export function Header() {

    return (
        <header id="header" className="w-full text-white p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <SplitText
                    text="Matheus Dev !"
                    className="text-2xl font-bold text-center text-white"
                    delay={500}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"

                />
                <div className="flex mt-4 md:mt-0">
                    <a target="_blank" href="https://github.com/matheusld34"><FaGithub size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer mr-4" /> </a>
                    <a target="_blank" href="https://www.linkedin.com/in/matheuslopes95b93bb499/"><FaLinkedin size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer" /> </a>
                    <a target="_blank" href="https://www.instagram.com/matheus_lop_san/"> <FaInstagram size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer ml-4" /></a>
                    <a target="_blank" href=""><MdEmail size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer ml-4" /> </a>
                </div>
            </div>

        </header>
    );
}