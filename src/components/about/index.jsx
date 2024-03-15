/* eslint-disable @next/next/no-img-element */
import React from 'react';

import ItemLayout from './ItemLayout';

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-8 w-full">
                <ItemLayout className={`col-span-8 row-span-2 flex-col items-start`}>
                    <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                        Architect of Enchantment
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                        My journey in web development is powered by an array of mystical
                        tools and languages, with JavaScript casting the core of my
                        enchantments. I wield frameworks like React.js and Next.js with
                        precision, crafting seamless portals (websites) that connect realms
                        (users) across the digital universe. The ancient arts of the
                        Jamstack empower me to create fast, secure, and dynamic experiences,
                        while my design skills ensure every creation is not only functional
                        but visually captivating. Join me as I continue to explore new
                        spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        25+ <sub className="font-semibold text-base">clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        5+{" "}
                        <sub className="font-semibold text-base">years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-4 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=freetimezp&
                        &theme=transparent&hide_border=true&title_color=FEFE5B&text_bold=false"
                        alt="github"
                        loading='lazy'
                        className='w-full h-auto'
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-8 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=freetimezp&
                        &theme=transparent&hide_border=true&title_color=FEFE5B&text_bold=false"
                        alt="github"
                        loading='lazy'
                        className='w-full h-auto'
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full !p-4"}>
                    <img
                        src="https://skillicons.dev/icons?i=js,html,css,appwrite,bootstrap,codepen,express,figma,firebase,github,gmail,graphql,gulp,ai,instagram,jquery,linkedin,materialui,mongodb,mysql,netlify,nextjs,nodejs,npm,php,phpstorm,powershell,prisma,react,redux,sass,stackoverflow,sublime,svg,tailwind,threejs,twitter,ts,vercel,visualstudio,vite,vscode,webpack,windows,wordpress,yarn"
                        alt="github"
                        loading='lazy'
                        className='w-full h-auto'
                    />
                </ItemLayout>


                <ItemLayout className={"col-span-6 !p-0"}>
                    <img src="https://github-readme-streak-stats.herokuapp.com?user=Freetimezp&theme=dark&hide_border=true&ring=E3EB30&currStreakNum=E3EB30&background=EB545400"
                        alt="GitHub Streak" loading='lazy'
                        className='w-full h-auto'
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-6 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=freetimezp&repo=js-portfolio-58-3d&
                        &theme=transparent&hide_border=true&title_color=FEFE5B&text_bold=false"
                        alt="github"
                        loading='lazy'
                        className='w-full h-auto'
                    />
                </ItemLayout>


            </div>
        </section>
    )
}

export default AboutDetails;
