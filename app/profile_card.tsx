import { CometCard } from "@/components/ui/comet-card";
export default function ProfileCard() {
  return (
    <>
      <CometCard>
        <div
          className="flex w-80 flex-col items-stretch rounded-[20px] border border-neutral-700/80 bg-neutral-900/60 p-4 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl md:w-80"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="flex-1">
            <div className="relative w-full rounded-[16px] bg-gradient-to-br from-neutral-800 to-neutral-900 p-1">
              <div className="relative aspect-[5/5] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[12px] bg-black object-cover"
                  alt="Eunil Dela Cruz Profile"
                  src="/v2.png" 
                  style={{
                    opacity: 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-4 flex flex-col items-center justify-center px-2 text-white">
            <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-lg font-semibold text-transparent">
              Eunil Carl L. Dela Cruz
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-300">
              Passionate about building intuitive and visually engaging digital
              experiences.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                Front-End Developer
              </span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                UI/UX Designer
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between px-2 font-mono text-xs text-neutral-500">
            <span>@Unil</span>
            <span>#F7RA</span>
          </div>
        </div>
      </CometCard>
    </>
  );
}