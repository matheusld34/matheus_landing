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
import foto from "@/assets/landing.jpg"

interface CarouselItem {
    id: number;
    title: string;
    image?: string | { src: string };
    url?: string;
}

const data: CarouselItem[] = [
    { id: 1, title: "landing page xyz", image: "https://unsplash.com/pt-br/fotografias/familia-colhendo-macas-de-uma-arvore-em-um-pomar-0VIqR7HmDZw", url: "https://github.com/matheusld34/landing-page-com-grid-agencia-xyz" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
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
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={typeof item.image === 'string' ? item.image : item.image?.src} alt={item.title} className="rounded-md mb-4" />
                                            <span className="text-3xl font-semibold">{item.title}</span>
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
