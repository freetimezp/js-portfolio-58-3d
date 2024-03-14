import Image from "next/image";

import bgImg from '../../public/background/home-background.png';

import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";

import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Image
        src={bgImg} alt="background"
        className="w-full h-full fixed top-0 left-0 object-cover object-center -z-50 opacity-25"
      />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />

        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </>
  );
}
