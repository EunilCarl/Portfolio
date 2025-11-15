import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Certificates() {
  const items = [
    // ---------- LEFT SIDE ----------
    {
      title: "GitHub Foundations",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/GitHubFoundations.png?updatedAt=1763198432410",
      className: "absolute top-2 left-[20%] rotate-[-6deg]",
    },
    {
      title: "Google Cybersecurity Specialization",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_Cybersecurity.png?updatedAt=1763198918603",
      className: "absolute top-37 left-[20%] rotate-[7deg]",
    },
    {
      title: "HTML, CSS, Javascript, React Certification",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
      className: "absolute top-72 left-[24%] rotate-[4deg]",
    },

    // ---------- CENTER GROUP ----------
    {
      title: "IT Specialist - Software Development",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/SoftwareDevelopment.png?updatedAt=1763198418561",
      className: "absolute top-10 left-1/2 -translate-x-1/2 rotate-[12deg]",
    },
    {
      title: "IC3 Digital Literacy Certification GS6 Level 1",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level1.png?updatedAt=1763198432596",
      className: "absolute top-42 left-1/2 -translate-x-1/2 rotate-[2deg]",
    },
    {
      title: "IC3 Digital Literacy Certification GS6 Level 2",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level2.png?updatedAt=1763198432581",
      className: "absolute top-70 left-1/2 -translate-x-1/2 rotate-[9deg]",
    },

    // ---------- RIGHT SIDE ----------
    {
      title: "Google AI Essentials",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NJ3H612VAAS7/CERTIFICATE_LANDING_PAGE~NJ3H612VAAS7.jpeg",
      className: "absolute top-2 right-[22%] rotate-[-5deg]",
    },
    {
      title: "Google UX Design Specialization",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_UXDesign.png?updatedAt=1763198918547",
      className: "absolute top-32 right-[20%] rotate-[10deg]",
    },
    {
      title: "DICT-WD001 Principles of Web Development & HTML",
      image: "https://ik.imagekit.io/6j61dmdpg/Certificates/DICT_HTML.png?updatedAt=1763198918243",
      className: "absolute top-70 right-[19%] rotate-[-7deg]",
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
        Feel free to drag them around.
      </p>
    <DraggableCardContainer className="relative flex min-h-150 w-full items-center justify-center overflow-clip">
  
      {items.map((item) => (
  <DraggableCardBody
    className={`
      ${item.className}
      w-[22rem]
      h-[15rem]
      rounded-lg
      bg-card
      shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)]
      dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]
      ring-1
      ring-ring/20
      backdrop-blur-sm
      flex
      flex-col
      items-center
      justify-center
    `}
  >
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-inner bg-gradient-to-br from-background to-muted">
      <img
        src={item.image}
        alt={item.title}
        className="pointer-events-none w-full h-full object-cover rounded-lg"
      />
    </div>
  </DraggableCardBody>
))}

    </DraggableCardContainer>
    <div className="mt-12 flex w-full justify-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2"
        >
          <a href="https://drive.google.com/drive/folders/1s5BjJuZy2RT1h7ziZjk2Lbnv0ydW4oUw">View All Certificates</a>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
