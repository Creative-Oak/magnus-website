import { useEffect, useRef } from "preact/hooks";

interface CollaboratorLogo {
  name: string;
  logoUrl: string;
}

// Example logos - replace with your actual collaborators
const collaborators: CollaboratorLogo[] = [
  { name: "Company 1", logoUrl: "/logos/company1.svg" },
  { name: "Company 2", logoUrl: "/logos/company2.svg" },
  { name: "Company 3", logoUrl: "/logos/company3.svg" },
  { name: "Company 4", logoUrl: "/logos/company4.svg" },
  { name: "Company 5", logoUrl: "/logos/company5.svg" },
  // Add more collaborators as needed
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
        <h2 class="text-center text-2xl font-semibold text-gray-800 mb-8">
          Anerkendt af Førende Virksomheder
        </h2>

        <div
          ref={scrollRef}
          class="overflow-hidden whitespace-nowrap relative"
          style={{ height: "64px" }}
        >
          <div class="inline-flex items-center gap-16 px-8">
            {extendedCollaborators.map((collaborator, index) => (
              <div
                key={`${collaborator.name}-${index}`}
                class="flex items-center justify-center"
                style={{ minWidth: "120px" }}
              >
                {/* Replace the div below with actual logo images once you have them */}
                <div class="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  {collaborator.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
