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

                        <Card className="bg-green-500 p-6 rounded-lg shadow-lg justify-center items-center">
                            <div className="border-b border-white pb-4 mb-4">
                                <h2 className="text-white font-bold text-lg">Tecnologias</h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">React </h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">NextJs </h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Tailwindcss</h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Prisma </h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">TypeScript </h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Github </h2>
                            </div>
                        </Card>
                        <Card className="bg-blue-600 p-6 rounded-lg shadow-lg">
                            <div className="border-b border-white pb-4 mb-4">
                                <h2 className="text-white font-bold text-lg">Técnico de Informática </h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Instituição: </h2><p className="text-white ml-1.5"> Etec Doutora Ruth Cardoso</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Formação: </h2><p className="text-white ml-1.5">Técnico em informática</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Início: </h2><p className="text-white ml-1.5"> Junho de 2017</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">término: </h2><p className="text-white ml-1.5"> Dezembro de 2018</p>
                            </div>

                        </Card>

                        <Card className="bg-red-400 p-6 rounded-lg shadow-lg">
                            <div className="border-b border-white pb-4 mb-4">
                                <h2 className="text-white font-bold text-lg">Análise e Desenvolvimento de Sistemas</h2>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Instituição: </h2><p className="text-white ml-1.5"> Fatec Rubens Lara</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Formação: </h2><p className="text-white ml-1.5">Análise e Desenvolvimento de sistemas</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">Início: </h2><p className="text-white ml-1.5"> Fevereiro de 2019</p>
                            </div>
                            <div className="flex mb-2">
                                <h2 className="text-white font-bold">término: </h2><p className="text-white ml-1.5"> Dezembro de 2022</p>
                            </div>

                        </Card>


                    </CardSwap>
                </div>


            </div>

        </div >

    );
}