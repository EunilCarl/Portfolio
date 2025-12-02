"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const techStacks = [
  // Front-End
  {
    id: 1,
    name: "HTML5",
    designation: "Front-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    designation: "Front-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "Front-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    designation: "Front-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  
  // Libraries
  {
    id: 4,
    name: "React",
    designation: "Libraries",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "Libraries",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    id: 14,
    name: "shadcn/ui",
    designation: "Libraries",
    image: "https://avatars.githubusercontent.com/u/139895814?v=4",
  },
  {
    id: 16,
    name: "Bootstrap",
    designation: "Libraries",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  // Back-End
  {
    id: 7,
    name: "Node.js",
    designation: "Back-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 12,
    name: "PHP",
    designation: "Back-End",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
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
    designation: "BaaS / Database",
    image: "supabase.svg",
  },
  {
    id: 10,
    name: "MySQL",
    designation: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: 15,
    name: "ASP.NET",
    designation: "Back-End",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
  },
  {
    id: 18,
    name: "MongoDB",
    designation: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  
  // Tools
  {
    id: 11,
    name: "Git & GitHub",
    designation: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 13,
    name: "Figma",
    designation: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: 17,
    name: "VS Code",
    designation: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    id: 19,
    name: "Visual Studio",
    designation: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
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