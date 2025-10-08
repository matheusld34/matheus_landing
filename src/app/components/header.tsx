import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Header() {
    return (
        <header className="w-full text-white p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Matheus <span className="text-white hover:text-slate-400 duration-300">Dev</span></h1>
                </div>
                <div className="flex mt-4 md:mt-0">
                    <FaGithub size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer mr-4" />
                    <FaLinkedin size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer" />
                    <FaInstagram size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer ml-4" />
                    <MdEmail size={24} className="text-white hover:text-slate-400 duration-300 cursor-pointer ml-4" />
                </div>
            </div>

        </header>
    );
}