"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SplitText from "@/components/SplitText";

const socials = [
    { icon: FaGithub, href: "https://github.com/matheusld34", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/matheuslopes95b93bb499/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/matheus_lop_san/", label: "Instagram" },
    { icon: MdEmail, href: "", label: "E-mail" },
];

export function Header() {
    return (
        <header
            id="header"
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-stone-950/70 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:px-6 md:flex-row md:justify-between md:gap-0 md:py-5 lg:px-8">
                <a href="#header" className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-emerald-600 text-sm font-black text-stone-950 shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        MS
                    </span>
                    <span className="relative flex items-baseline gap-1">
                        <SplitText
                            text="Matheus"
                            className="text-2xl font-bold tracking-tight text-white md:text-3xl"
                            delay={500}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />
                        <span className="relative text-2xl font-black tracking-tight md:text-3xl">
                            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(52,211,153,0.45)]">
                                Dev
                            </span>
                            <span className="animate-pulse text-emerald-400">!</span>
                            <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-400/0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        </span>
                    </span>
                </a>

                <nav aria-label="Redes sociais" className="flex items-center gap-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
