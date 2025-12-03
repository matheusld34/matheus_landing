"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TrueFocus from "@/components/TrueFocus";
import foto from "../../assets/landing.jpg"
import foto2 from "../../assets/PetDev.jpg"
import foto3 from "../../assets/DevControle.jpg"
import foto4 from "../../assets/DalyGames.jpg"
import foto5 from "../../assets/Street.jpg"
import foto6 from "../../assets/Pizza.jpg"
import { Button } from "@/components/ui/button";

interface CarouselItem {
    id: number;
    title: string;
    image?: string | { src: string };
    url?: string;
}

const data: CarouselItem[] = [
    { id: 1, title: "landing page xyz", image: foto, url: "https://github.com/matheusld34/landing-page-com-grid-agencia-xyz" },
    { id: 2, title: "Projeto PetDev", image: foto2, url: "https://github.com/matheusld34/PetDev" },
    { id: 3, title: "Projeto DevControle", image: foto3, url: "https://github.com/matheusld34/DevControle" },
    { id: 4, title: "Projeto DalyGames", image: foto4, url: "https://github.com/matheusld34/DalyGames" },
    { id: 5, title: "Projeto Street Fighter", image: foto5, url: "https://github.com/matheusld34/Projeto-Street-Fighter" },
    { id: 6, title: "Projeto Pizza", image: foto6, url: "https://github.com/matheusld34/Automatiza-o_de_restaurante" },

]

export function CarouselSize() {
    return (
        <>

            <div className="border-t border-gray-700 font-bold pb-5 md:pb-20 gap-8">

            </div>

            <div className="text-3xl md:text-4xl text-white text-center border-b border-gray-700 font-bold pb-10 md:pb-20 gap-10  mb-8">
                <TrueFocus
                    sentence="Alguns Projetos Desenvolvidos Por Mim"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#5fe398"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                />
            </div>

            <div>
                <Carousel
                    opts={{

                    }}
                    className="w-full max-w-7xl max-h-fit container mx-auto"
                >
                    <CarouselContent>
                        {data.map((item) => (
                            <CarouselItem key={item.id} className="sm:pl-2 md:basis-1/3 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col aspect-square items-center justify-center">
                                            <img src={typeof item.image === 'string' ? item.image : item.image?.src} alt={item.title} className="rounded-md mb-4 " />
                                            <span className="text-3xl font-semibold">{item.title}</span>
                                            <Button variant="link" className="mt-4" asChild>
                                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                    Ver Projeto
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}
