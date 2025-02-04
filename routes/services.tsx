// routes/services.tsx
import { Layout } from "../components/Layout.tsx";
import { CTASection } from "../components/sections/CTASection.tsx";
import { MainServices } from "../components/sections/MainServices.tsx";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface WorkshopCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  level: string;
  learningOutcomes: string[];
  tools: string[];
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

function WorkshopCard(
  {
    title,
    description,
    duration,
    participants,
    level,
    learningOutcomes,
    tools,
  }: WorkshopCardProps,
) {
  return (
    <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p class="text-gray-600 mb-6">{description}</p>

      <div class="flex gap-4 mb-6">
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-gray-700">{duration}</span>
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="text-gray-700">{participants}</span>
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span class="text-gray-700">{level}</span>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-semibold text-gray-900 mb-2">Læringsmål:</h4>
        <ul class="space-y-2">
          {learningOutcomes.map((outcome) => (
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span class="text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-gray-900 mb-2">
          Værktøjer & Materialer:
        </h4>
        <ul class="space-y-2">
          {tools.map((tool) => (
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span class="text-gray-700">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const workshops = [
    {
      title: "Gør-det-selv Machine Learning Workshop",
      description:
        "En praktisk hands-on workshop hvor deltagerne lærer om machine learning gennem interaktive eksperimenter med BBC micro:bit og ml-machine.org platformen.",
      duration: "4-6 timer",
      participants: "10-25 deltagere",
      level: "Niveau: Begynder",
      learningOutcomes: [
        "Forstå grundlæggende ML-koncepter gennem praktisk erfaring",
        "Bygge og træne simple ML-modeller til bevægelsesregistrering",
        "Lære om dataindsamling og -repræsentation i ML-systemer",
        "Få hands-on erfaring med neurale netværk og k-nærmeste naboer",
        "Udvikle forståelse for ML-pipeline fra data til færdig model",
      ],
      tools: [
        "BBC micro:bit med accelerometer",
        "ml-machine.org platform",
        "Dataindsamlingsværktøjer",
        "Visualiseringsværktøjer",
        "Træningsplatform til neurale netværk",
      ],
    },
    {
      title: "Design af ML-Løsninger i Virksomheden",
      description:
        "En struktureret workshop hvor teams identificerer og designer ML-løsninger til deres specifikke forretningsudfordringer gennem en guidet proces med fokus på værdi og implementerbarhed.",
      duration: "6-8 timer",
      participants: "8-20 deltagere",
      level: "Niveau: Mellem",
      learningOutcomes: [
        "Identificere områder i virksomheden hvor ML kan skabe værdi",
        "Analysere datakvalitet og -tilgængelighed for ML-projekter",
        "Designe ML-løsninger med fokus på forretningsmæssig værdi",
        "Vurdere implementeringsmuligheder og -udfordringer",
        "Udvikle konkrete projektforslag til ML-implementering",
      ],
      tools: [
        "Design Thinking værktøjer",
        "ML Solution Canvas",
        "Data kortlægningsværktøjer",
        "ROI beregningsmodeller",
        "Implementeringsplanlægningsværktøjer",
      ],
    },
  ];

  return (
    <Layout title="Services">
      <div class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainServices />

          <div class="lg:text-center mb-16">
            <h2 class="text-2xl font-bold text-gray-900">
              Specialiserede Workshops
            </h2>
            <p class="mt-4 text-gray-600">
              Udforsk vores praktiske workshops tilpasset forskellige niveauer
              og behov
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop) => <WorkshopCard {...workshop} />)}
          </div>
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
