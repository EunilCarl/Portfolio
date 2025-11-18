"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function GawaPHProjectPage() {
  const project = {
    title: "GawaPH",
    subtitle: "Freelance Job Portal",
    description:
      "GawaPH is a local freelance marketplace designed to connect clients and freelancers across the Philippines through a modern, fast, and secure platform.",
    liveSite: "",
    repo: "https://github.com/EunilCarl/GawaPH",
    categories: ["Startup", "Full-Stack", "Web App"],
    tech: [
      { name: "ASP.NET MVC", icon: "/icons/dotnet.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "C#", icon: "/icons/csharp.svg" },
    ],
    status: "Completed",
    contributors: [
      {
        name: "Eunil Carl Dela Cruz",
        roles: ["Founder", "Full-Stack Developer", "UI/UX Designer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/Image%20(9).png",
      },
    ],
    timeline: "Feb 2025 - May 2025",
    image: "/gawaph.png",
    story:
      "GawaPH was created to help Filipino freelancers find trustworthy, local opportunities without the barriers of international platforms. The project began by identifying common pain points such as client authenticity, project visibility, and lack of localized tools. Using ASP.NET MVC and Supabase, the platform features project posting, profile creation, media uploads, and secure authentication. The main challenge was integrating Supabase storage and database with ASP.NET while maintaining smooth developer workflow and consistent schema validation.",
    progressImages: [
      "/projects/gawaph-wireframe.png",
      "/projects/gawaph-backend.png",
      "/projects/gawaph-ui.png",
    ],
  };

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <Link
            href="/all-projects"
            className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors mb-16 text-sm uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 mb-6">
                {project.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-medium tracking-wide backdrop-blur-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                {project.title}
              </h1>
              <h2 className="text-2xl text-zinc-400 mb-8 font-light">
                {project.subtitle}
              </h2>

              <div className="block lg:hidden relative group rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 mb-10">
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

              <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
                <div className="flex gap-4">
                  <Link
                    href={project.liveSite || "#"}
                    target="_blank"
                    onClick={(e) => {
                      if (!project.liveSite) e.preventDefault();
                    }}
                    aria-disabled={!project.liveSite}
                    tabIndex={project.liveSite ? 0 : -1}
                  >
                    <HoverBorderGradient
                      containerClassName={`rounded-full ${
                        !project.liveSite ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      as="button"
                      className="bg-black text-white flex items-center space-x-2 px-6 py-3"
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
                    onClick={(e) => {
                      if (!project.repo) e.preventDefault();
                    }}
                    aria-disabled={!project.repo}
                    tabIndex={project.repo ? 0 : -1}
                  >
                    <HoverBorderGradient
                      containerClassName={`rounded-full ${
                        !project.repo ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      as="button"
                      className="bg-zinc-900 cursor-pointer text-zinc-300 flex items-center space-x-2 px-6 py-3"
                    >
                      <i className="fab fa-github text-xl" />
                      <span>Source Code</span>
                    </HoverBorderGradient>
                  </Link>
                </div>

                <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-4 text-yellow-400 text-xs italic">
                  {!project.liveSite && (
                    <p className="flex items-center gap-1 whitespace-normal md:whitespace-nowrap">
                      <i className="material-symbols-outlined text-yellow-400 text-[16px]">
                        warning
                      </i>
                      This project has no live site
                    </p>
                  )}

                  {!project.repo && (
                    <p className="flex items-center gap-1 whitespace-normal md:whitespace-nowrap">
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
                <div className="flex flex-wrap gap-6">
                  {project.tech.map(({ name, icon }, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center gap-2"
                      title={name}
                    >
                      <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                        <Image
                          src={icon}
                          alt={name}
                          width={24}
                          height={24}
                          className="opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  ))}
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

          <section className="relative border-t border-zinc-800 pt-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold mb-6 text-white">How it&apos;s Made</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent mb-8" />
                <p className="text-zinc-400 leading-loose text-lg">{project.story}</p>
                <div className="mt-8 p-4 bg-zinc-900/30 border-l-2 border-yellow-500">
                  <p className="text-zinc-500 text-sm italic">Timeline: {project.timeline}</p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:row-span-2 relative rounded-2xl overflow-hidden border border-zinc-800 h-full min-h-[300px]">
                    <Image
                      src={project.progressImages[0]}
                      alt="Wireframing process"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <span className="text-xs font-mono text-zinc-300">Phase 1: Wireframing</span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 h-64">
                    <Image
                      src={project.progressImages[1]}
                      alt="Backend Development"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <span className="text-xs font-mono text-zinc-300">Phase 2: Backend Logic</span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 h-64">
                    <Image
                      src={project.progressImages[2]}
                      alt="Final Polish"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <span className="text-xs font-mono text-zinc-300">Phase 3: UI Polish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
