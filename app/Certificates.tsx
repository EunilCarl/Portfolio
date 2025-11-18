import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MobileCerts } from "./MobileCerts";
import Link from "next/link";
import Image from "next/image";

export function Certificates() {
  const items = [
    {
      title: "GitHub Foundations",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/GitHubFoundations.png?updatedAt=1763198432410",
      className: "absolute top-2 left-[22%] rotate-[-6deg]",
      issuer: "GitHub",
    },
    {
      title: "Google Cybersecurity Specialization",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_Cybersecurity.png?updatedAt=1763198918603",
      className: "absolute top-37 left-[20%] rotate-[7deg]",
      issuer: "Google",
    },
    {
      title: "HTML, CSS, Javascript, React Certification",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/HTML-CSS-JS-React.png",
      className: "absolute top-72 left-[24%] rotate-[4deg]",
      issuer: "Udemy",
    },
    {
      title: "IT Specialist - Software Development",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/SoftwareDevelopment.png?updatedAt=1763198418561",
      className: "absolute top-10 left-1/2 -translate-x-1/2 rotate-[12deg]",
      issuer: "Certiport",
    },
    {
      title: "IC3 Digital Literacy Certification GS6 Level 1",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level1.png?updatedAt=1763198432596",
      className: "absolute top-42 left-1/2 -translate-x-1/2 rotate-[2deg]",
      issuer: "Certiport",
    },
    {
      title: "IC3 Digital Literacy Certification GS6 Level 2",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level2.png?updatedAt=1763198432581",
      className: "absolute top-70 left-1/2 -translate-x-1/2 rotate-[9deg]",
      issuer: "Certiport",
    },
    {
      title: "Google AI Essentials",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/AI.png",
      className: "absolute top-2 right-[22%] rotate-[-5deg]",
      issuer: "Google",
    },
    {
      title: "Google UX Design Specialization",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_UXDesign.png?updatedAt=1763198918547",
      className: "absolute top-32 right-[20%] rotate-[10deg]",
      issuer: "Google",
    },
    {
      title: "DICT-WD001 Principles of Web Development & HTML",
      image:
        "https://ik.imagekit.io/6j61dmdpg/Certificates/DICT_HTML.png?updatedAt=1763198918243",
      className: "absolute top-70 right-[22%] rotate-[-7deg]",
      issuer: "DICT",
    },
  ];

  return (
    <div className="mx-auto w-full">
      <h2 className="mb-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        My Certifications
      </h2>
      <p className="mb-12 text-center text-base font-normal text-neutral-300 md:text-lg">
        A collection of my recent certifications and completed courses.
        <br />
        <span className="hidden sm:block">Feel free to drag them around.</span>
      </p>
      <div className="hidden sm:block">
        <DraggableCardContainer className="relative flex min-h-150 w-full items-center justify-center overflow-clip">
          {items.map((item, idx) => (
            <DraggableCardBody
              key={idx}
              className={`
                  ${item.className}
                  w-[350px] 
                  aspect-[4/3]
                  rounded-xl 
                  bg-zinc-900/90 
                  border border-zinc-800/50 
                  shadow-2xl shadow-black/80
                  backdrop-blur-md 
                  hover:scale-105 hover:z-50 hover:border-zinc-600 
                  transition-all duration-300 ease-out
                  group cursor-grab active:cursor-grabbing
                `}
            >
              <div className="relative w-full h-full p-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-bold truncate">
                        {item.title}
                      </p>
                      <p className="text-zinc-400 text-xs uppercase tracking-wider mt-1">
                        Issued by {item.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                  <span className="material-symbols-outlined text-[16px] text-white">
                    open_with
                  </span>
                </div>
              </div>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
      <div className="block sm:hidden">
        <MobileCerts></MobileCerts>
      </div>
      <div className="mt-12 flex w-full justify-center">
        <Link
            href="https://drive.google.com/drive/folders/1s5BjJuZy2RT1h7ziZjk2Lbnv0ydW4oUw"
            target="_blank"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="cursor-pointer bg-zinc-900/50 backdrop-blur-md text-white flex items-center space-x-3 px-6 py-3 group"
            >
              <span className="material-symbols-outlined text-yellow-500 group-hover:rotate-12 transition-transform">
                folder_open
              </span>
              <span className="font-medium tracking-wide">View All Certificates</span>
              <span className="material-symbols-outlined text-zinc-500 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
  );
}
