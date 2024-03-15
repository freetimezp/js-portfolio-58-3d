"use client";
import Image from "next/image";

import bgImg from '../../../../public/background/contact-background.png';

import Form from "@/components/contact/Form";

export default function Contact() {
    return (
        <>
            <Image
                src={bgImg} alt="background"
                className="w-full h-full fixed top-0 left-0 object-cover object-center 
                    -z-50 opacity-25"
            />

            {/* contact page */}
            <article className="relative w-full flex flex-col items-center justify-center
                space-y-8">
                <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
                    <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Summon the Wizard
                    </h1>
                    <p className="text-center font-light text-sm xs:text-base">
                        Step into the circle of enchantment and weave your words into the
                        fabric of the cosmos. Whether you seek to conjure collaborations,
                        unlock mysteries, or simply share tales of adventure, your messages
                        are treasured scrolls within this realm. Use the form below to send
                        your missives through the ethereal network, and await the whisper of
                        magic in response.
                    </p>
                </div>

                <Form />
            </article>
        </>
    );
}

