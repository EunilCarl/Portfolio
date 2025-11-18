"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function AllProjects() {
  const projects = [
    {
      title: "UniTrack",
      subtitle: "Lost & Found App",
      description:
        "A university lost & found system with maps, posting, and real-time updates.",
      image: "/unitrack.png",
      tech: ["Android", "Firebase", "OSMDroid"],
      link: "/all-projects/unitrack",
    },
    {
      title: "GawaPH",
      subtitle: "Freelance Job Portal",
      description:
        "A freelance marketplace for local communities built using ASP.NET MVC + Supabase.",
      image: "/gawaph.png",
      tech: ["ASP.NET", "Supabase", "MVC"],
      link: "/all-projects/gawaph",
    },
    {
      title: "Levenshtein Viz",
      subtitle: "Algorithm Visualizer",
      description:
        "Interactive visualization tool for edit distance algorithm with animations.",
      image: "/favicon.svg",
      tech: ["React", "Framer Motion", "TypeScript"],
      link: "/all-projects/levenshtein",
    },
    {
      title: "UniTrack",
      subtitle: "Lost & Found App",
      description:
        "A university lost & found system with maps, posting, and real-time updates.",
      image: "/favicon.svg",
      tech: ["Android", "Firebase", "OSMDroid"],
      link: "/all-projects/unitrack",
    },
    {
      title: "GawaPH",
      subtitle: "Freelance Job Portal",
      description:
        "A freelance marketplace for local communities built using ASP.NET MVC + Supabase.",
      image: "/gawaph.png",
      tech: ["ASP.NET", "Supabase", "MVC"],
      link: "/all-projects/gawaph",
    },
    {
      title: "Levenshtein Viz",
      subtitle: "Algorithm Visualizer",
      description:
        "Interactive visualization tool for edit distance algorithm with animations.",
      image: "/favicon.svg",
      tech: ["React", "Framer Motion", "TypeScript"],
      link: "/all-projects/levenshtein",
    },
  ];

  return (
    <>
      <main className="relative min-h-screen w-full bg-black text-white overflow-x-hidden selection:bg-yellow-500/30">
        <div className="fixed inset-0 pointer-events-none z-0">
          <BackgroundRippleEffect />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors mb-20 text-sm uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Portfolio
          </Link>

          <div className="mb-24 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              My{" "}
              <PointerHighlight
                rectangleClassName="bg-yellow-500/10 border border-yellow-500/30"
                pointerClassName="text-yellow-500"
                containerClassName="inline-block mr-2"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                Projects
                </span>
              </PointerHighlight>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              A collection of apps, websites, and creative builds I've engineered.
              Explore the case studies below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
            {projects.map((project, i) => (
              <Link href={project.link} key={i} className="group block h-full">
                <HoverBorderGradient
                  as="div"
                  containerClassName="h-full rounded-3xl bg-zinc-900/20 backdrop-blur-sm"
                  className="flex flex-col h-full w-full p-6 md:p-8 bg-black/40"
                >
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800 mb-8 group-hover:border-zinc-600 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      priority={i < 2}
                    />
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverBorderGradient>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}