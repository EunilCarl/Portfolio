import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient"; // Added this
import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function Hero() {
  return (
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
        </div>

        <div className="hidden shrink-0 justify-center sm:flex md:justify-end">
          <BackgroundGradient
            className="flex h-64 w-64 items-center justify-center rounded-full bg-neutral-900/60 shadow-xl shadow-black/20 backdrop-blur-md"
            containerClassName="h-64 w-64"
          >
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