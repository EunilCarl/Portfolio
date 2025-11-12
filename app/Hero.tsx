import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
// Removed ProfileCard, no longer needed
// Removed HoverBorderGradient
import { BackgroundGradient } from "@/components/ui/background-gradient"; // Added this
import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function Hero() {
  return (
    // Best practice: min-h-screen is safer than h-screen
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] antialiased">
      <div
        className={cn(
          " pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pt-32 pb-20 text-center md:flex-row md:items-center md:justify-between md:gap-16 md:pt-0 md:pb-0 md:text-left">
        
        {/* Left: Text Section (No changes here) */}
        <div className="flex max-w-xl flex-col items-center md:items-start">
          <h1 className="text-4xl w-full font-bold text-neutral-50 md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Hi, I’m  <PointerHighlight  rectangleClassName="bg-yellow-200/10 border-yellow-300" pointerClassName="text-yellow-500 " containerClassName="inline-block mr-1"> <span className="text-yellow-400">Eunil</span></PointerHighlight>
            </span>
            <span
              aria-label="waving hand emoji"
              role="img"
              className="inline-block origin-[70%_70%] hand-wave-animation"
            >
              👋
            </span>
          </h1>

          <p className="mt-4 text-base font-normal text-neutral-300 md:text-lg">
            I'm a Front-End Developer and UI/UX Designer passionate about
            building modern, responsive, and engaging web applications.
          </p>
          
          <p className="mt-2 text-sm font-light text-neutral-400 md:text-base">
            From designing intuitive user interfaces to developing robust and
            scalable applications, I bring digital ideas to life.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-50 shadow-lg shadow-black/[0.2] transition-colors duration-300 hover:bg-neutral-800"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md px-6 font-medium text-neutral-300 transition-colors duration-300 hover:bg-neutral-800/[0.5] hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden shrink-0 justify-center sm:flex md:justify-end">
          <BackgroundGradient
            // These classes create the circular, glassmorphism container
            className="flex h-64 w-64 items-center justify-center rounded-full bg-neutral-900/60 shadow-xl shadow-black/20 backdrop-blur-md"
            // This ensures the container itself is the right size
            containerClassName="h-64 w-64"
          >
            {/*  */}
            <img
              src="/favicon.svg"
              alt="Eunil's Logo"
              className="h-36 w-36"
            />
          </BackgroundGradient>
        </div>
        
      </div>
    </div>
  );
}