"use client";
import Image from "next/image";

import bgImg from '../../../../public/background/projects-background.png';

import ProjectList from "@/components/projects";

import { projectsData } from '../../data';

import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Projects() {
    return (
        <>
            <Image
                src={bgImg} alt="background"
                className="w-full h-full fixed top-0 left-0 object-cover object-center -z-50 opacity-25"
            />

            {/* projects page */}
            <ProjectList projects={projectsData} />

            <div className="flex items-center justify-center fixed top-20 left-24 h-screen">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}

