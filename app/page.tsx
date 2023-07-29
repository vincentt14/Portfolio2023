"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import astro from "@/lottie/astro.json"; 
import { Status } from "@/components/home/Status";
import { Welcome } from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="container">
      <section className="pt-28 pb-24 lg:pt-44 lg:pb-32">
        <div className="flex flex-col md:flex-row">
          <div className="w-full self-center px-4 lg:w-1/2">
            <Welcome />
            <Status />
          </div>
          <div className="w-full px-4 pt-4 self-center lg:w-1/2 border-2 shadow-lg border-borderColor rounded-md bg-secondary">
            <Lottie animationData={astro} style={{ width: "350px", height: "350px" }} className="mx-auto blur-none" />
          </div>
        </div>
      </section>
    </main>
  );
}

{/* <Image src="/vincent.png" alt="Vincent" className="w-auto h-auto mx-auto" width={526} height={526} /> */}