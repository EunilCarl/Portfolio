"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ProjectsBG } from "./ProjectsBG";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Mass Guide Web App",
      description:
        "A progressive web application engineered to digitize liturgical guides, featuring real-time database synchronization via Supabase and a highly optimized Next.js frontend for instant page loads.",
      imageUrl: "/favicon.svg",
      link: "#",
      tags: ["Next.js", "Supabase", "Tailwind"],
      year: "2024",
    },
    {
      title: "BPSU Bulletin Identity",
      description:
        "A strategic visual identity system developed for the university's official student publication, incorporating modern vector aesthetics while preserving institutional heritage across digital and print media.",
      imageUrl: "/favicon.svg",
      link: "#",
      tags: ["Branding", "Vector Design", "Typography"],
      year: "2023",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <ProjectsBG />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-yellow-300">Projects</span>
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A glimpse into my recent digital explorations, ranging from full-stack web applications to strategic visual identity systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <Link
              href={project.link}
              key={i}
              className="group relative flex flex-col h-full"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 mb-6 group-hover:border-zinc-600 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/50 border border-zinc-700 backdrop-blur-md text-xs font-medium text-zinc-300">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex w-full justify-center">
          <Link href="/all-projects">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-black text-white flex items-center space-x-3 px-8 py-3"
            >
              <span className="text-base font-medium">All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}