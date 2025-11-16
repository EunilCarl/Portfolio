"use client";

import React from "react";
import Link from "next/link";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function AllProjects() {
  const projects = [
    {
      title: "UniTrack – Lost & Found App",
      description:
        "A university lost & found system with maps, posting, and real-time updates.",
      image: "favicon.svg",
      tech: ["Android", "Firebase", "OSMDroid"],
      link: "/projects/unitrack",
    },
    {
      title: "GawaPH – Freelance Job Portal",
      description:
        "A freelance marketplace for local communities built using ASP.NET MVC + Supabase.",
      image: "favicon.svg",
      tech: ["ASP.NET", "Supabase", "MVC"],
      link: "/projects/gawaph",
    },
    {
      title: "Levenshtein Visualizer",
      description:
        "Interactive visualization tool for edit distance algorithm with animations.",
      image: "favicon.svg",
      tech: ["React", "Framer Motion", "TypeScript"],
      link: "/projects/levenshtein",
    },
    {
      title: "UniTrack – Lost & Found App",
      description:
        "A university lost & found system with maps, posting, and real-time updates.",
      image: "favicon.svg",
      tech: ["Android", "Firebase", "OSMDroid"],
      link: "/projects/unitrack",
    },
    {
      title: "GawaPH – Freelance Job Portal",
      description:
        "A freelance marketplace for local communities built using ASP.NET MVC + Supabase.",
      image: "favicon.svg",
      tech: ["ASP.NET", "Supabase", "MVC"],
      link: "/projects/gawaph",
    },
    {
      title: "Levenshtein Visualizer",
      description:
        "Interactive visualization tool for edit distance algorithm with animations.",
      image: "favicon.svg",
      tech: ["React", "Framer Motion", "TypeScript"],
      link: "/projects/levenshtein",
    },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <section className="relative min-h-screen w-full flex justify-center items-center flex-col overflow-hidden dark:bg-black bg-white">
        <BackgroundRippleEffect />

        <div className="max-w-7xl w-full z-10 pt-40 pb-10 text-center relative px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group absolute top-10 left-5 md:top-20 md:left-0 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 text-sm md:text-base"
          >
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-x-1">
              arrow_back
            </span>
            Back to Portfolio
          </Link>

          <h2 className="text-4xl md:text-7xl font-bold dark:text-white text-neutral-900">
            My <PointerHighlight  rectangleClassName="bg-yellow-200/10 border-yellow-300" pointerClassName="text-yellow-500 " containerClassName="inline-block mr-1"> <span className="text-yellow-400">Projects </span></PointerHighlight>
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            A collection of apps, websites, and creative builds I've made. Hover
            and explore each project.
          </p>
        </div>

        <div className="relative z-10 max-w-8xl grid gap-10 px-6 md:px-20 pb-40 grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <HoverBorderGradient
              key={i}
              as="div"
              containerClassName="relative rounded-xl w-full max-w-full h-[440px] dark:bg-black bg-white"
              className="flex flex-col h-full w-full rounded-xl p-5"
            >
              <Link
                href={project.link}
                className="absolute inset-0 z-10"
                aria-label={`Go to ${project.title} project`}
              />

              <div className="relative z-0 flex flex-col h-full">
                <div className="relative w-full h-68 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority={true}
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold dark:text-white text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </section>
    </html>
  );
}
