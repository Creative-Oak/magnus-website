import {
  IconCalendar,
  IconLightbulb,
  IconUsers,
} from "../../components/Icons.tsx";

interface FeatureItem {
  title: string;
  description: string;
  icon: typeof IconUsers | typeof IconLightbulb | typeof IconCalendar;
}

const features: FeatureItem[] = [
  {
    title: "Foredrag",
    description:
      "Inspirerende keynotes og præsentationer om AI-trends, digital transformation og fremtidssikret lederskab.",
    icon: IconUsers,
  },
  {
    title: "AI-Workshops",
    description:
      "Praktiske workshops der afmystificerer AI og giver teams værktøjer til effektiv brug af AI.",
    icon: IconLightbulb,
  },
  {
    title: "Konsulentbistand",
    description:
      "Strategisk vejledning om implementering af AI-løsninger og udvikling af AI-parate teams.",
    icon: IconCalendar,
  },
];

export function FeaturesSection() {
  return (
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transformér din organisation
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div class="relative" key={feature.title}>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon class="h-6 w-6" />
                </div>
                <div class="mt-5">
                  <h3 class="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p class="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
