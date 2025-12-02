import { CometCard } from "@/components/ui/comet-card";

export default function ProfileCard() {
  return (
    <CometCard>
      <div
        className="group relative flex w-80 flex-col overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-950 p-3 shadow-2xl transition-all duration-300 hover:border-yellow-500/30 hover:shadow-yellow-900/10 md:w-80"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="relative aspect-square w-full overflow-hidden rounded-[20px] border border-zinc-800 bg-zinc-900">
          <img
            loading="lazy"
            src="/v2.png"
            alt="Eunil Dela Cruz Profile"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-zinc-800/50 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available
          </div>
        </div>

        <div className="relative z-10 mt-3 flex flex-col px-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Eunil Carl L. Dela Cruz
              </h2>
              <p className="mt-0.5 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-xs font-bold text-transparent">
                Front-End Dev & UI/UX Designer
              </p>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-yellow-500/50 group-hover:bg-yellow-500 group-hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
            Passionate about building intuitive and visually engaging digital experiences.
          </p>

          <div className="mt-3 flex items-center justify-between border-t border-zinc-800/50 pt-3">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/eunilcarl/" className="flex h-6 w-6 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/EunilCarl" className="flex h-6 w-6 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/eunil.carl" className="flex h-6 w-6 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <span className="font-mono text-[10px] text-zinc-600 group-hover:text-yellow-500/50 transition-colors">@Unil</span>
          </div>
        </div>
      </div>
    </CometCard>
  );
}