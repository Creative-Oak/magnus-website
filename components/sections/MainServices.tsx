// components/sections/MainServices.tsx
import { ComponentChildren, h } from "preact";
import { IconConsulting, IconPresentation, IconWorkshop } from "../Icons.tsx";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ComponentChildren;
}

function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-6">
        {icon}
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p class="text-gray-600 mb-6">{description}</p>
      <ul class="space-y-3">
        {features.map((feature) => (
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">✓</span>
            <span class="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MainServices() {
  const services = [
    {
      title: "AI-Workshops",
      description:
        "Praktiske workshops der afmystificerer AI og giver teams konkrete værktøjer til effektiv implementering af AI i deres daglige arbejde.",
      icon: <IconWorkshop class="h-6 w-6" />,
      features: [
        "Hands-on træning i moderne AI-værktøjer",
        "Skræddersyede øvelser til din organisations behov",
        "Praktiske cases og real-world eksempler",
        "Implementeringsstrategier og best practices",
        "Løbende support og opfølgning",
      ],
    },
    {
      title: "Foredrag om Digital Transformation",
      description:
        "Inspirerende keynotes og præsentationer om AI-trends, digital transformation og fremtidssikret lederskab.",
      icon: <IconPresentation class="h-6 w-6" />,
      features: [
        "Dybdegående indsigt i AI-teknologiens muligheder",
        "Konkrete eksempler på succesfuld digital transformation",
        "Strategier for fremtidssikret lederskab",
        "Interaktive elementer og publikumsinddragelse",
        "Tilpasset dit publikum og branche",
      ],
    },
    {
      title: "AI Consulting",
      description:
        "Strategisk rådgivning om AI-implementation og digital transformation, skræddersyet til din virksomheds unikke behov og udfordringer.",
      icon: <IconConsulting class="h-6 w-6" />,
      features: [
        "AI-modenhedsvurdering og strategiudvikling",
        "Identificering af AI-muligheder i din forretning",
        "Assistance med valg af AI-værktøjer og platforme",
        "Vejledning om datastrategier og governance",
        "Support ved implementering og change management",
      ],
    },
  ];

  return (
    <div>
      <div class="lg:text-center mb-16">
        <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
          Specielle Forløb
        </h2>
        <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Har du brug for noget skræddersyet til din virksomhed?
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Jeg har mange års erfaring i at holde foredrag og facilitere
          workshops. Hvis du mangler noget, du ikke kan finde i mit katalog, kan
          du altid række ud til mig, så vi sammen kan skabe præcis det du har
          brug for.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => <ServiceCard {...service} />)}
      </div>

      <div class="text-center">
        <a
          href="/contact"
          class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10 transition-colors"
        >
          Lad os skabe det perfekte forløb sammen
        </a>
      </div>
    </div>
  );
}
