// components/sections/MainServices.tsx
import { h } from "preact";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-6">
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
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
      icon:
        '<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.24 12.26 8.71 13.02 8.91 14"></path><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line>',
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
      icon:
        '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
      features: [
        "Dybdegående indsigt i AI-teknologiens muligheder",
        "Konkrete eksempler på succesfuld digital transformation",
        "Strategier for fremtidssikret lederskab",
        "Interaktive elementer og publikumsinddragelse",
        "Tilpasset dit publikum og branche",
      ],
    },
  ];

  return (
    <div class="lg:text-center mb-16">
      <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
        Services
      </h2>
      <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Styrk din organisation gennem AI
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
        Få ekspert vejledning i at udnytte AI's potentiale gennem skræddersyede
        workshops, inspirerende foredrag og praktiske hands-on forløb.
      </p>
      <div class="mt-16 grid md:grid-cols-2 gap-8">
        {services.map((service) => <ServiceCard {...service} />)}
      </div>
    </div>
  );
}
