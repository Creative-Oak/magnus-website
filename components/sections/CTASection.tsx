import { IconArrowRight } from "../../components/Icons.tsx";

interface CTASectionProps {
  mainHeading?: string;
  subHeading?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  subHeadingColor?: string;
}

export function CTASection({
  mainHeading = "Klar til at komme igang?",
  subHeading = "Lad os tale om dit næste event.",
  buttonText = "Tag kontakt",
  buttonLink = "/contact",
  backgroundColor = "bg-blue-600",
  subHeadingColor = "text-blue-200",
}: CTASectionProps) {
  return (
    <div class={backgroundColor}>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block">{mainHeading}</span>
          <span class={`block ${subHeadingColor}`}>
            {subHeading}
          </span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href={buttonLink}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              {buttonText}
              <IconArrowRight class="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
