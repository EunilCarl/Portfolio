import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="dark relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black/[0.96] antialiased text-center px-6">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <h1 className="relative z-10 mb-4 text-6xl font-bold text-neutral-50 md:text-7xl lg:text-9xl">
        <PointerHighlight
          rectangleClassName="bg-yellow-200/10 border-yellow-300"
          pointerClassName="text-yellow-500"
          containerClassName="inline-block mr-1"
        >
          404
        </PointerHighlight>
      </h1>

      <p className="relative z-10 mb-3 max-w-xl text-lg font-semibold text-white md:text-xl">
       <span className="text-yellow-400 font-bold"> Oops! </span>  The page you’re looking for doesn’t exist.
      </p>

      <p className="relative z-10 mb-6 max-w-xl text-xs font-light text-neutral-500 md:text-sm">
        It might have been moved, deleted, or perhaps you mistyped the URL.
        Don&apos;t worry, you can easily find your way back to safety.
      </p>

      <div className="mt-3 flex w-full justify-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <Link href="/">Go Back</Link>
        </HoverBorderGradient>
      </div>
    </div>
  );
}