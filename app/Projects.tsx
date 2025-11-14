"use client";
import React from "react";
// Removed BentoGrid imports
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ProjectsBG } from "./ProjectsBG"; 

export function Projects() {
  const projects = [
    {
      title: "Mass Guide Web App",
      description: "A web application to guide users, built with Next.js and Supabase.",
      imageUrl: "favicon.svg", // Replace with your project image
      link: "#", // Replace with your project link
      // 'className' is no longer needed
    },
    {
      title: "BPSU Bulletin Logo",
      description: "Logo and branding design for a university publication.",
      imageUrl: "favicon.svg", // Replace with your project image
      link: "#",
    },
    {
      title: "Parol Contest Entry",
      description: "A design project focusing on recycled materials.",
      imageUrl: "favicon.svg", // Replace with your project image
      link: "#",
    },
    {
      title: "Personal Portfolio",
      description: "The very site you're on, built with Aceternity UI.",
      imageUrl: "favicon.svg", // Replace with your project image
      link: "#",
    },
  ];

  return (
    <div className="relative w-full py-20">
      
      <ProjectsBG />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <h2 className="mb-12 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              href={project.link}
              key={i}
              // This is our new "glassmorphic" card, consistent with the site
              className="group relative block w-full overflow-hidden rounded-xl border border-neutral-700/80 bg-neutral-900/60 p-4 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* [Image of a project thumbnail] */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-neutral-100">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {project.description}
                </p>
              </div>
              
              {/* Subtle hover icon */}
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex w-full justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="a" 
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}