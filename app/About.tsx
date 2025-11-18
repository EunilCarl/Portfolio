"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./ProfileCard";

const TechPill = ({ name, className }: { name: string, className: string }) => (
  <span
    className={`rounded-full border px-3 py-1 text-xs font-semibold ${className}`}
  >
    {name}
  </span>
);

export function About() {
  return (
    <div className="container mx-auto max-w-6xl px-6">
      <h2 className="mb-16 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        A Bit About Me
      </h2>
      
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        <div className="flex w-full items-center justify-center">
          <ProfileCard />
        </div>

        <div className="flex flex-col justify-center">
          <Tabs defaultValue="who" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-2 bg-neutral-900/80">
              <TabsTrigger value="who">Who I Am</TabsTrigger>
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