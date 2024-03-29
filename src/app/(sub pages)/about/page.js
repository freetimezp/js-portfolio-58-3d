"use client";
import Image from "next/image";

import bgImg from '../../../../public/background/about-background.png';

import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
    ssr: false,
});

// export const metadata = {
//     title: "About",
// };

import AboutDetails from "@/components/about";

export default function About() {
    return (
        <>
            <Image
                src={bgImg}
                alt="background"
                priority
                sizes="100vw"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover 
                    object-center opacity-50"
            />

            {/* about page */}
            <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 
                -translate-y-1/2 left-0 z-10">
                <RenderModel>
                    <HatModel />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-1/2 
                    sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl 
                        text-accent">Freetime</h1>
                    <p className="font-light text-foreground text-lg">
                        Meet the wizard behind this portfolio..
                    </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}

