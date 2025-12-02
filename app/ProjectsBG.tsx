"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ProjectsBG() {
  const images = [
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Home%20Page%20(Sidebar%20Off)@2x.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Index%20Dark%20(1).png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/BlocktopiaWiki.png?updatedAt=1762974338984",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Blog%20Post%20Page.png?updatedAt=1762974422140",
    "unitrack.png",
    "blocktopia.png",
    "bpsubulletin.png",
    "gawaph.png",
    "unil.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/gawaph_bg_v3.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/gawaph_bg_v3.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Gig%20Post%20Page.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Home%20Page%20(1).png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Mockup%202%20(1).png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/screencapture-blocktopia-wiki-vercel-app-2025-11-30-19_59_12.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/image.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/blocktopia.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/mass-guide.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/tree.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/work.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Screenshot%202025-11-19%20223737.png?updatedAt=1763569819565",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/countries.gif?updatedAt=1763570177391",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/contact.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/UniTrack%20(1).png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/fav.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/pro.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/mass-guide.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/Mockup%201%20(2).png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/BlocktopiaWiki.png?updatedAt=1762974338984",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/tree.png",
    "https://ik.imagekit.io/6j61dmdpg/ProjectsBG/screencapture-blocktopia-wiki-vercel-app-2025-11-30-19_59_12.png",
  ];
  return (
    <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden">
      <ThreeDMarquee images={images} className="opacity-40 h-screen"/>
    </div>
  );
}
