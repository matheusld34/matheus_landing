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
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="sm:pl-2 md:basis-1/3 lg:basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
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
