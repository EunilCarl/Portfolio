"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Have a project in mind, need help, or just want to say hello?  
          I’m always open to opportunities, collaborations, or freelance work.  
          Feel free to send me a message anytime!
        </p>

        <input
          type="text"
          placeholder="your.email@example.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
