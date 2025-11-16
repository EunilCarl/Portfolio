"use client";

import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Github,
  Linkedin,
  Facebook,
  Send,
  MessageSquareMore,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function Contact() {
  return (
    <div className="h-auto min-h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Get in Touch
        </h1>

      <div className="relative z-10 flex flex-col sm:flex-row justify-center my-4 text-neutral-400 space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex space-x-8 justify-center">
          <div className="flex items-center space-x-2">
            <div className="bg-neutral-700 rounded-full p-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-400" />
            </div>
            <span className="text-xs sm:text-base">+63 909 323 2909</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-neutral-700 rounded-full p-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-400" />
            </div>
            <span className="text-xs sm:text-base">eunilcarl02@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:mt-0 justify-center">
          <div className="bg-neutral-700 rounded-full p-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-400" />
          </div>
          <span className="text-xs sm:text-base">Balanga City, Bataan</span>
        </div>
      </div>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Have a project in mind, need help, or just want to say hello? I’m
          always open to opportunities, collaborations, or freelance work. Feel
          free to send me a message anytime!
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex justify-center items-center relative z-10 mt-8">
              <HoverBorderGradient
                containerClassName="w-auto rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2"
              >
                <span>Say Hi</span>
                <MessageSquareMore className="h-4 w-4" />
              </HoverBorderGradient>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-neutral-950 border-neutral-800 text-neutral-200">
            <DialogHeader>
              <DialogTitle className="text-neutral-50">Contact Me</DialogTitle>
              <DialogDescription className="text-neutral-400">
                Send a message and I’ll do my best to respond before you finish
                reading this.
              </DialogDescription>
            </DialogHeader>

            <form className="mt-4 space-y-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="rounded-lg p-2 border border-neutral-800 focus:ring-2 focus:ring-white-500 w-full bg-neutral-950 placeholder:text-neutral-700 text-neutral-200"
              />
              <textarea
                placeholder="Your message..."
                rows={5}
                className="rounded-lg p-2 border border-neutral-800 focus:ring-2 focus:ring-white-500 w-full bg-neutral-950 placeholder:text-neutral-700 text-neutral-200"
              ></textarea>

              <HoverBorderGradient
                containerClassName="w-full rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-full px-6 py-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </HoverBorderGradient>
            </form>
          </DialogContent>
        </Dialog>

        <div className="relative z-10 flex justify-center space-x-6 mt-8">
          <Link
            href="https://github.com/EunilCarl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github
              className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-200"
              fill="currentColor"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eunilcarl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin
              className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-200"
              fill="currentColor"
            />
          </Link>
          <Link
            href="https://www.facebook.com/eunil.carl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook
              className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-200"
              fill="currentColor"
            />
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
