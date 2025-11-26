"use client"

import CardSwap, { Card } from "@/components/CardSwap";

export function About() {
    return (

        <div className="flex flex-col-reverse md:flex-row md:justify-between border-b border-gray-700 pb-10 md:pb-20 ">

            <div className="flex-[2] space-y-8 max-w-3xl flex flex-col justify-center mt-50 md:mt-20 px-4 md:px-0">
                <article className="space-y-8 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-5xl text-white text-center font-bold mb-4 animate-fade-up animate-duration-[2000ms]">Um pouco da minha História !</h2>
                    <p className="text-md font-bold text-gray-300 text-start mt-7 animate-fade-up animate-duration-[2000ms]">Com as formações de técnico de informática, e análise e desenvolvimento de sistemas sou um profissional de TI com sólida base em desenvolvimento de software, análise de requisitos e lógica de programação. Possui experiência com manutenção, suporte técnico, adquirida por meio da formação técnica e prática.
                        Demonstrou facilidade em aprender novas tecnologias, boa capacidade de resolução de problemas e forte compromisso com a qualidade das entregas. Preparado para atuar em equipes de desenvolvimento ou suporte, contribuindo para soluções eficientes e inovadoras na área de tecnologia.</p>
                </article>
            </div>
            <div className="flex-[1] flex flex-col sm:justify-center sm:items-center ml-20  md:justify-end md:items-end md:py-50 ">

                <div style={{ height: '400px', position: 'relative' }} className="">
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <h3 className="text-white">Card 1</h3>
                            <p className="text-white jus">Your content here</p>
                        </Card>
                        <Card>
                            <h3>Card 2</h3>
                            <p>Your content here</p>
                        </Card>
                        <Card>
                            <h3>Card 3</h3>
                            <p>Your content here</p>
                        </Card>
                    </CardSwap>
                </div>


            </div>

        </div >


        /*
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 text-white px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-10 md:mt-20">Sobre Mim</h1>
            <div className="max-w-3xl text-center">
                <p className="text-lg md:text-xl mb-6">
                    Olá! Meu nome é Matheus Santos e sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Com habilidades em React, Next.js, JavaScript e TypeScript, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
                </p>
                <p className="text-lg md:text-xl mb-6">
                    Ao longo da minha jornada como desenvolvedor, tive a oportunidade de trabalhar em diversos projetos que me permitiram aprimorar minhas habilidades técnicas e criativas. Adoro colaborar com equipes talentosas e contribuir para o sucesso de cada projeto.
                </p>
                <p className="text-lg md:text-xl">
                    Quando não estou codificando, gosto de explorar novas tecnologias, participar de comunidades de desenvolvedores e compartilhar meu conhecimento por meio de blogs e redes sociais. Acredito que o aprendizado contínuo é essencial para se manter atualizado neste campo em constante evolução.
                </p>
            </div>
        </div>*/
    );
}