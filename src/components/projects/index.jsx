"use client";
import React from 'react';
import ProjectLayout from './ProjectLayout';

const ProjectList = ({ projects }) => {
    return (
        <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center
            py-10">
            {projects.map((project, index) => (
                <ProjectLayout {...project} key={index} />
            ))}
        </div>
    );
}

export default ProjectList;
