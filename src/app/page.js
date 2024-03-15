import Image from "next/image";

import bgImg from '../../public/background/home-background.png';

import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bgImg} alt="background"
        fill
        priority
        sizes="100vw"
        className="w-full h-full fixed top-0 left-0 object-cover object-center -z-50 opacity-25"
      />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />

        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
