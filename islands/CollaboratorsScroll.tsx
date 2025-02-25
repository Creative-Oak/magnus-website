import { useEffect, useRef } from "preact/hooks";

interface CollaboratorLogo {
  name: string;
  logoUrl: string;
  width?: number; // Optional width for different sized logos
  height?: number; // Optional height for different sized logos
}

const collaborators: CollaboratorLogo[] = [
  {
    name: "Aarhus Universitet",
    logoUrl: "/colab/aulogo.svg",
    height: 24,
  },
  {
    name: "DM",
    logoUrl: "/colab/dm-logo.svg",
    height: 24,
  },
  {
    name: "Danmarks Radio",
    logoUrl: "/colab/dr-logo.svg",
    height: 24,
  },
  {
    name: "Micro:bit",
    logoUrl: "/colab/microbit-logo.svg",
    height: 24,
  },
  {
    name: "UCN",
    logoUrl: "/colab/UCN_LOGO_RGB.svg",
    height: 24,
  },
  {
    name: "Dokk1",
    logoUrl: "/colab/DOKK1_BLACK.svg",
    height: 24,
  },
  {
    name: "Coding Pirates",
    logoUrl: "/colab/coding-pirates.svg",
    height: 24,
  },
];

export default function CollaboratorsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollPos += 0.5; // Adjust speed as needed

      // Reset scroll position when reaching the middle
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }

      scrollContainer.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Double the items to create seamless loop
  const extendedCollaborators = [...collaborators, ...collaborators];

  return (
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-2xl font-semibold text-gray-800 mb-10">
          Tidligere Samarbejdspartnere:
        </h2>

        <div
          ref={scrollRef}
          class="overflow-hidden whitespace-nowrap relative"
          style={{ height: "80px" }} // Increased height to accommodate logos
        >
          <div class="inline-flex items-center space-x-24 px-12">
            {extendedCollaborators.map((collaborator, index) => (
              <div
                key={`${collaborator.name}-${index}`}
                class="flex items-center justify-center"
                style={{ minWidth: "160px" }} // Increased minimum width for logos
              >
                <img
                  src={collaborator.logoUrl}
                  alt={`${collaborator.name} logo`}
                  class="object-contain h-20 w-auto max-h-24" // Ensures max height while keeping aspect ratio
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none"; // Hide if image fails
                    console.error(
                      `Failed to load logo for ${collaborator.name}`,
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
