import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"; // <-- Import added

export function Education() {
  const data = [
    {
      title: "2021 – 2023",
      content: (
        <div>
            <img
              src="heroes.png"
              alt="Bataan Heroes College Logo"
              className="h-50 w-50 rounded-full object-contain mb-3 p-1" // Rounded, contained, and with a white bg
            />
          <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
            Bataan Heroes College
          </h3>

          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            Graduated from Senior High School, where I specialized in the
            <b>STEM Strand</b>. This track ignited my
            passion for software development and hands-on coding.
          </p>
          
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-black dark:text-white bg-white dark:bg-black"
          >
            <span>STEM Strand</span>
          </HoverBorderGradient>
        </div>
      ),
    },
    {
      title: "2023 – Present",
      content: (
        <div>
             <img
              src="bpsu.png"
              alt="Bataan Peninsula State University Logo"
              className="h-50 w-50 rounded-full object-contain mb-3 p-1" // Rounded, contained, and with a white bg
            />
          <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
            Bataan Peninsula State University
          </h3>
          {/* Expanded description */}
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            Actively pursuing a Bachelor of Science in Computer Science. As a
            third-year student, I'm diving deep into advanced topics like
            web architecture, system design, and AI, building on my SHS foundation.
          </p>

          {/* Grouped the badge and logo together */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {/* Replaced <span> badge with HoverBorderGradient */}
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-black dark:text-white bg-white dark:bg-black"
            >
              <span>BS Computer Science</span>
            </HoverBorderGradient>

            {/* Kept your BPSU image, but styled it as a logo */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip"> {/* Added some padding/max-width */}
      <Timeline data={data} />
    </div>
  );
}