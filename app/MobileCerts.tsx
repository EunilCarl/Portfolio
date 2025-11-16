import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const IMAGES_ROW_A = [
  "https://ik.imagekit.io/6j61dmdpg/Certificates/GitHubFoundations.png?updatedAt=1763198432410",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_Cybersecurity.png?updatedAt=1763198918603",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/HTML-CSS-JS-React.png",
];

const IMAGES_ROW_B = [
  "https://ik.imagekit.io/6j61dmdpg/Certificates/SoftwareDevelopment.png?updatedAt=1763198418561",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level1.png?updatedAt=1763198432596",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/IC3GS6_Level2.png?updatedAt=1763198432581",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/AI.png?updatedAt=1763316533524",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/Google_UXDesign.png?updatedAt=1763198918547",
  "https://ik.imagekit.io/6j61dmdpg/Certificates/DICT_HTML.png?updatedAt=1763198918243",
];


export function MobileCerts() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={`${src}`}
              alt="Unsplash sample"
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-45 w-65 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={`${src}&ixlib=rb-4.0.3`}
              alt="Certificates"
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-45 w-65 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
