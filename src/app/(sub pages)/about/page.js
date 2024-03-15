"use client";
import Image from "next/image";

import bgImg from '../../../../public/background/about-background.png';

import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export default function About() {
    return (
        <>
            <Image
                src={bgImg} alt="background"
                className="w-full h-full fixed top-0 left-0 object-cover object-center 
                    -z-50 opacity-25"
            />

            {/* about page */}
            <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
                <RenderModel>
                    <HatModel />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-[60%]
                left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-bold text-9xl text-accent">Freetime</h1>
                    <p className="font-light text-foreground text-ls">
                        Meet the wizard behind this portfolio..
                    </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}

