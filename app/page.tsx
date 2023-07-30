"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import astro from "@/lottie/astro.json";
import { Info } from "@/components/about/Info";
import { Status } from "@/components/home/Status";
import { Welcome } from "@/components/home/Welcome";
import { Skills } from "@/components/about/Skills";

export default function Home() {
  return (
    <main className="container">
      <section id="home" className="pt-28 pb-24 lg:pt-44 lg:pb-32">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center px-4 lg:w-1/2">
            <Welcome />
            <Status />
          </div>
          <div className="w-full px-4 pt-4 self-center lg:w-1/2 border-2 shadow-lg border-borderColor rounded-md bg-secondary">
            <Lottie animationData={astro} style={{ width: "350px", height: "350px" }} className="mx-auto blur-none" />
          </div>
        </div>
      </section>
      <section id="about" className="pb-16 pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center px-4 lg:w-1/2 text-justify">
            <Info />
          </div>
          <div className="w-full px-4 pt-4 self-center lg:w-1/2 shadow-lg border-2 border-borderColor rounded-md bg-tertiary">
            <Image src="/vincent1.png" alt="Vincent" className="w-auto h-auto mx-auto" width={300} height={300} />
          </div>
        </div>
        <Skills />
      </section>
    </main>
  );
}
