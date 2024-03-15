"use client";
import Image from "next/image";

import bgImg from '../../../../public/background/projects-background.png';

import ProjectList from "@/components/projects";

import { projectsData } from '../../data';

import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
const Staff = dynamic(() => import("@/components/models/Staff"), {
    ssr: false,
});

export default function Projects() {
    return (
        <>
            <Image
                src={bgImg} alt="background"
                priority
                sizes="100vw"
                className="w-full h-full fixed top-0 left-0 object-cover object-center 
                    -z-50 opacity-25"
            />

            {/* projects page */}
            <ProjectList projects={projectsData} />

            <div className="flex items-center justify-center fixed top-16 lg:top-20 
                -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}

