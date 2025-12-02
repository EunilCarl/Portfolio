"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function EunilCarlPortfolioPage() {
  const project = {
    title: "Unil Portfolio",
    subtitle: "Creative Developer Showcase",
    description:
      "A modern, high-performance personal portfolio designed to showcase my journey as a Full-Stack Developer and UI/UX Designer. Built with the latest web technologies, it features fluid animations, a bento-grid layout, and a unique visual identity that reflects my personal brand.",
    liveSite: "https://eunil-carl.vercel.app/",
    repo: "https://github.com/EunilCarl/Portfolio",
    categories: ["Personal", "Portfolio", "About Me"],
    status: "Completed",
    contributors: [
      {
        name: "Eunil Carl L. Dela Cruz",
        roles: ["Owner", "Full-Stack Developer", "UI/UX Designer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/Image%20(9).png",
      },
    ],
    timeline: "October 2025 - November 2025",
    image: "/unil.png",
    story:
      "I built this portfolio to escape the limitations of standard templates. I wanted a platform where I could experiment with complex animations, 3D elements, and unconventional layouts without compromising performance. The core philosophy was 'content-first,' wrapping my projects in a dark, immersive interface that guides the user's focus.",
    logoProcess: [
      {
        id: 1,
        title: "Initial Sketches",
        desc: "Exploring geometric shapes for 'U' and 'N'",
        img: "https://ik.imagekit.io/6j61dmdpg/ProjectsImages/progress.png",
        className: "md:col-span-3 md:row-span-1 ",
      },
      {
        id: 2,
        title: "Unil Logo Drafts",
        desc: "Getting ideas for the right logo",
        img: "https://ik.imagekit.io/6j61dmdpg/ProjectsImages/drafts.png?updatedAt=1763568082768",
        className: "md:col-span-1 md:row-span-2",
      },
      {
        id: 3,
        title: "Final Symbol",
        desc: "The finalized monogram",
        img: "/logo.svg",
        className: "md:col-span-2 md:row-span-2",
      },
    ],
  };

  const techStacks = [
    {
      id: 7,
      name: "HTML5",
      designation: "Markup",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 8,
      name: "CSS3",
      designation: "Styling",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 9,
      name: "JavaScript",
      designation: "Language",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 1,
      name: "Next.js 14",
      designation: "Framework",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 2,
      name: "React",
      designation: "Library",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "TypeScript",
      designation: "Language",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      designation: "Styling",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      id: 5,
      name: "Framer Motion",
      designation: "Animation",
      image: "https://ik.imagekit.io/6j61dmdpg/logos/framer.svg",
    },
    {
      id: 6,
      name: "Figma",
      designation: "Design",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      id: 10,
      name: "Git",
      designation: "VCS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 11,
      name: "GitHub",
      designation: "Hosting",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  const statusColor =
    project.status === "Completed"
      ? "green"
      : project.status === "Ongoing"
      ? "yellow"
      : "red";

  return (
    <>
      <main className="relative min-h-screen w-full bg-black text-white overflow-x-hidden selection:bg-yellow-500/30">
        <div className="fixed inset-0 pointer-events-none z-0">
          <BackgroundRippleEffect />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24">
          <Link
            href="/all-projects"
            className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors mb-8 md:mb-16 text-sm uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-32">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                {project.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-[10px] md:text-xs font-medium tracking-wide backdrop-blur-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 leading-tight">
                {project.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-zinc-400 mb-8 font-light">
                {project.subtitle}
              </h2>

              <div className="block lg:hidden relative group rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 mb-10 aspect-video w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                <Image
                  src={project.image}
                  alt="Project Preview"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
                      statusColor === "green"
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : statusColor === "yellow"
                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                        : "bg-red-500/20 border-red-500 text-red-400"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        statusColor === "green"
                          ? "bg-green-500"
                          : statusColor === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-col gap-6 mb-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={project.liveSite || "#"}
                    target="_blank"
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      if (!project.liveSite) e.preventDefault();
                    }}
                    aria-disabled={!project.liveSite}
                    tabIndex={project.liveSite ? 0 : -1}
                  >
                    <HoverBorderGradient
                      containerClassName={`rounded-full w-full sm:w-auto ${
                        !project.liveSite ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      as="button"
                      className="bg-black cursor-pointer text-white flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
                    >
                      <span>Visit Live Site</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_outward
                      </span>
                    </HoverBorderGradient>
                  </Link>

                  <Link
                    href={project.repo || "#"}
                    target="_blank"
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      if (!project.repo) e.preventDefault();
                    }}
                    aria-disabled={!project.repo}
                    tabIndex={project.repo ? 0 : -1}
                  >
                    <HoverBorderGradient
                      containerClassName={`rounded-full w-full sm:w-auto ${
                        !project.repo ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      as="button"
                      className="bg-zinc-900 cursor-pointer text-zinc-300 flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
                    >
                      <i className="fab fa-github text-xl" />
                      <span>Source Code</span>
                    </HoverBorderGradient>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-yellow-400 text-xs italic">
                  {!project.liveSite && (
                    <p className="flex items-center gap-1">
                      <i className="material-symbols-outlined text-yellow-400 text-[16px]">
                        warning
                      </i>
                      This project has no live site
                    </p>
                  )}

                  {!project.repo && (
                    <p className="flex items-center gap-1">
                      <i className="fab fa-github text-yellow-400 text-[16px]" />
                      This project has private GitHub repository
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-8">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                  Built With
                </h3>
                <div className="flex flex-row flex-wrap items-center justify-start md:justify-center gap-2 mb-8 md:mb-16 w-full max-w-4xl">
                  <AnimatedTooltip items={techStacks} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="hidden lg:block relative group rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                <Image
                  src={project.image}
                  alt="Project Preview"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
                      statusColor === "green"
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : statusColor === "yellow"
                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                        : "bg-red-500/20 border-red-500 text-red-400"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        statusColor === "green"
                          ? "bg-green-500"
                          : statusColor === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
                  Contributor/s
                </h3>
                <div className="space-y-6">
                  {project.contributors.map(({ name, roles, avatar }, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Image
                        src={avatar}
                        alt={name}
                        width={48}
                        height={48}
                        className="rounded-full border border-2 border-yellow-400 p-0.5"
                      />
                      <div>
                        <p className="font-bold text-zinc-200">{name}</p>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">
                          {roles.join(" • ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="relative border-t border-zinc-800 pt-12 md:pt-20">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  How it&apos;s Made
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent mb-8" />
                <p className="text-zinc-400 leading-loose text-base md:text-lg mb-8">
                  {project.story}
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-zinc-200 mb-4">
                    The Logo Concept
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    I wanted a logo that felt architectural yet personal. I
                    started by breaking down my initials, exploring how the
                    curvature of 'U' could intersect with 'N' in a minimal,
                    geometric grid. The final design uses negative space to
                    create a symbol that represents both structure (code) and
                    fluidity (design).
                  </p>
                </div>

                <div className="mt-8 p-4 bg-zinc-900/30 border-l-2 border-yellow-500">
                  <p className="text-zinc-500 text-sm italic">
                    Timeline: {project.timeline}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
                  {project.logoProcess.map((item) => (
                    <div
                      key={item.id}
                      className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group w-full h-64 md:h-auto ${item.className}`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover md:object-fill opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-bold text-sm">
                          {item.title}
                        </p>
                        <p className="text-zinc-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}