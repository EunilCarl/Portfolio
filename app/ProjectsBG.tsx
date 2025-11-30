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
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden">
      <ThreeDMarquee images={images} className="opacity-40 h-screen"/>
    </div>
  );
}
