"use client";
import React from "react";
// Image import is no longer needed if you're not using the <Image> component
// import Image from "next/image"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./profile_card";

// Helper component for the technology pills
const TechPill = ({ name, className }: { name: string, className: string }) => (
  <span
    className={`rounded-full border px-3 py-1 text-xs font-semibold ${className}`}
  >
    {name}
  </span>
);

export function About() {
  return (
    // We remove the <StickyScroll> component entirely
    <div className="container mx-auto max-w-6xl px-6">
      <h2 className="mb-16 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        A Bit About Me
      </h2>
      
      {/* New 2-Column Layout */}
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        
        {/* --- THIS IS THE FIX --- */}
        {/* Left Column: Wrapped Profile Card */}
        {/* We wrap the card in a flex container to center it */}
        <div className="flex w-full items-center justify-center">
          <ProfileCard />
        </div>
        {/* --- END FIX --- */}
        
        {/* Right Column: Tabs */}
        <div className="flex flex-col justify-center">
          <Tabs defaultValue="who" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-3 bg-neutral-900/80">
              <TabsTrigger value="who">Who I Am</TabsTrigger>
              <TabsTrigger value="toolkit">My Toolkit</TabsTrigger>
              <TabsTrigger value="philosophy">My Philosophy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="who" className="text-neutral-300">
              <p className="text-base leading-relaxed">
                I'm a Front-End Developer and UI/UX Designer based in the Philippines. 
                I'm passionate about blending clean code with beautiful design to create 
                intuitive and engaging digital experiences.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                My goal is to build web applications that are not only functional 
                but also a delight to use.
              </p>
            </TabsContent>
            
            <TabsContent value="toolkit">
              <p className="mb-4 text-neutral-300">
                I specialize in the modern web stack. Here are the
                primary technologies I work with:
              </p>
              {/* These pills are styled just like your ProfileCard */}
              <div className="flex flex-wrap gap-2">
                <TechPill name="React" className="border-cyan-400/30 bg-cyan-400/10 text-cyan-300" />
                <TechPill name="Next.js" className="border-neutral-400/30 bg-neutral-400/10 text-neutral-300" />
                <TechPill name="Tailwind CSS" className="border-sky-400/30 bg-sky-400/10 text-sky-300" />
                <TechPill name="Supabase" className="border-green-400/30 bg-green-400/10 text-green-300" />
                <TechPill name="PHP" className="border-indigo-400/30 bg-indigo-400/10 text-indigo-300" />
                <TechPill name="Figma" className="border-pink-400/30 bg-pink-400/10 text-pink-300" />
                {/* Add more pills here as needed */}
              </div>
            </TabsContent>
            
            <TabsContent value="philosophy" className="text-neutral-300">
              <p className="text-base leading-relaxed">
                I believe that good design is invisible. It should guide the user 
                effortlessly. I focus on user-centered design principles, creating 
                wireframes, mockups, and prototypes.
              </p>
               <p className="mt-4 text-base leading-relaxed">
                I'm always thinking about accessibility, readability, and creating 
                a seamless and inclusive user journey.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
      </div>
    </div>
  );
}