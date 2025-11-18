"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function BPSUBulletinProjectPage() {
  const project = {
    title: "BPSU Bulletin",
    subtitle: "Student Announcement System",
    description:
      "A centralized announcement platform for Bataan Peninsula State University (BPSU) students and faculty to access timely updates, news, and campus-wide notifications through a clean and user-friendly digital interface.",
    liveSite: "https://bpsu-bulletin.gamer.gd/",
    repo: "",
    categories: ["Startup", "Full-Stack", "Web App"],
    tech: [
      { name: "PHP", icon: "/icons/nextjs.svg" },
      { name: "MySQL", icon: "/icons/tailwind.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    status: "Completed",
   contributors: [
    {
        name: "Ruzzel P. Mendoza",
        roles: ["Project Leader", "Backend Developer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/ruzzel.png",
    },
    {
        name: "Eunil Carl L. Dela Cruz",
        roles: ["UI/UX Designer", "Frontend Developer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/Image%20(9).png",
    },
    {
        name: "Nathaniel D. Sto Niño",
        roles: ["UI/UX Designer", "Frontend Developer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/nathaniel.png",
    },
    {
        name: "Tricia Lei B. Alburo",
        roles: ["System Integrator", "Assistant Developer"],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/tricia.png",
    },
    {
        name: "QA Tester / Documentation Specialist",
        roles: [],
        avatar: "https://ik.imagekit.io/6j61dmdpg/Contributors/qa_tester.png",
    },
    ],
    timeline: "January 2024 - March 2024",
    image: "/bpsubulletin.png",
    story:
      "BPSU Bulletin was created to address the need for a streamlined communication system on campus. The platform consolidates announcements from different departments into one accessible hub, reducing information fragmentation and increasing student engagement. The development focused on responsive design, real-time updates, and ease of use for both admins and users.",
    progressImages: [
      "/projects/bpsu-wireframe.png",
      "/projects/bpsu-backend.png",
      "/projects/bpsu-ui.png",
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
                      className="bg-zinc-900 text-zinc-300 flex items-center space-x-2 px-6 py-3"
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
                <h2 className="text-3xl font-bold mb-6 text-white">
                  How it&apos;s Made
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent mb-8" />
                <p className="text-zinc-400 leading-loose text-lg">
                  {project.story}
                </p>
                <div className="mt-8 p-4 bg-zinc-900/30 border-l-2 border-yellow-500">
                  <p className="text-zinc-500 text-sm italic">
                    Timeline: {project.timeline}
                  </p>
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
                      <span className="text-xs font-mono text-zinc-300">
                        Phase 1: Wireframing
                      </span>
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
                      <span className="text-xs font-mono text-zinc-300">
                        Phase 2: Backend Logic
                      </span>
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
                      <span className="text-xs font-mono text-zinc-300">
                        Phase 3: UI Polish
                      </span>
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
