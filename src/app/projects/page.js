"use client";
import Image from "next/image";

import bgImg from '../../../public/background/projects-background.png';

import ProjectList from "@/components/projects";

import { projectsData } from '../data';

import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image
                src={bgImg} alt="background"
                fill
                className="w-full h-full object-cover object-center -z-50 opacity-25"
            />

            {/* projects page */}
            <ProjectList projects={projectsData} />

            <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </main>
    );
}

