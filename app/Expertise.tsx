"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

// Updated Tech Stack with specific designations
const techStacks = [
  {
    id: 1,
    name: "HTML5",
    designation: "Front-End Structure",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    designation: "Front-End Styling",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "Core Language",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React",
    designation: "Front-End Library",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: 6,
    name: "Next.js",
    designation: "Full-Stack Framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 7,
    name: "Node.js",
    designation: "Back-End Runtime",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 8,
    name: "Firebase",
    designation: "BaaS / Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: 9,
    name: "Supabase",
    designation: "Baas / Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-icon.svg",
  },
  {
    id: 10,
    name: "MySQL",
    designation: "Relational Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: 11,
    name: "Git & GitHub",
    designation: "Version Control",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export function Expertise() {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full px-4">
      
      <h2 className="mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        My Tech Stack & Expertise
      </h2>
      
      <p className="text-neutral-300 text-center max-w-2xl mb-12 text-sm md:text-base leading-relaxed">
        I specialize in building modern, responsive web applications. From crafting pixel-perfect 
        interfaces with <span className="text-yellow-400 font-medium">React</span> and <span className="text-yellow-400 font-medium">Tailwind</span> to managing 
        databases with <span className="text-yellow-400 font-medium">MySQL</span> and <span className="text-yellow-400 font-medium">Supabase</span>, I ensure a seamless experience across the full stack.
      </p>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-16 w-full max-w-4xl">
        <AnimatedTooltip items={techStacks} />
      </div>

      <h3 className="text-neutral-200 font-semibold text-xl mb-6">Contribution Activity</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl items-center justify-items-center">

        <div className="w-full flex justify-center">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=eunilcarl&layout=compact&theme=transparent&hide_border=true&title_color=e1b815&text_color=eeeeee&icon_color=e1b815&hide=jupyter%20notebook" 
              alt="Top Languages" 
              className="w-full max-w-[350px] h-auto object-contain"
            />
        </div>

        <div className="w-full flex justify-center">
          <img
            src="https://streak-stats.vercel.app/api/?user=eunilcarl&theme=transparent&hide_border=true&title_color=e1b815&sideLabels=eeeeee&sideNums=eeeeee&currStreakLabel=eeeeee&currStreakNum=eeeeee&ring=e1b815&fire=e1b815&background=00000000"
            alt="Eunil's GitHub Streak"
            className="w-full max-w-lg"
          />
        </div>

        <div className="w-full flex justify-center md:col-span-2">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=eunilcarl&bg_color=00000000&color=eeeeee&line=e1b815&point=edece9&area=true&hide_title=true&hide_border=true" 
              alt="Github Activity Graph" 
              className="w-full h-auto object-contain"
            />
        </div>

      </div>

    </div>
  );
}