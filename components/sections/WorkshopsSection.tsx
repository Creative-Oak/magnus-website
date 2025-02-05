// components/sections/WorkshopsSection.tsx
import { IconClock, IconLightbulb, IconUsers } from "../Icons.tsx";

interface WorkshopCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  level: string;
  learningOutcomes: string[];
  tools: string[];
  price: number;
}

function WorkshopCard({
  title,
  description,
  duration,
  participants,
  level,
  learningOutcomes,
  tools,
  price,
}: WorkshopCardProps) {
  const formattedPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  // Create URL parameters without relying on browser APIs
  const params = new URLSearchParams({
    subject: `Workshop Booking: ${title} (${duration})`,
    message:
      `Jeg er interesseret i workshoppen "${title}".\n\nDetaljer:\n- Varighed: ${duration}\n- Antal deltagere: ${participants}\n- Niveau: ${level}\n\nJeg vil gerne høre mere om mulige datoer og det praktiske omkring afholdelse af workshoppen.`,
  });

  const contactUrl = `/contact?${params.toString()}`;

  return (
    <div class="flex flex-col h-full bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p class="text-gray-600 mb-6">{description}</p>

      <div class="flex gap-4 mb-6">
        <div class="flex items-center">
          <IconClock class="h-5 w-5 text-blue-500 mr-2" />
          <span class="text-gray-700">{duration}</span>
        </div>
        <div class="flex items-center">
          <IconUsers class="h-5 w-5 text-blue-500 mr-2" />
          <span class="text-gray-700">{participants}</span>
        </div>
        <div class="flex items-center">
          <IconLightbulb class="h-5 w-5 text-blue-500 mr-2" />
          <span class="text-gray-700">{level}</span>
        </div>
      </div>

      <div class="bg-blue-50 rounded-lg p-4 mb-6">
        <p class="text-lg font-semibold text-blue-900">
          {formattedPrice}
        </p>
        <p class="text-sm text-blue-700">
          Prisen er ekskl. moms og eventuelle transportomkostninger
        </p>
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

      <div class="mb-6">
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

      <div class="mt-auto pt-6">
        <a
          href={contactUrl}
          class="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Book nu
        </a>
      </div>
    </div>
  );
}

export function WorkshopsSection() {
  const workshops = [
    {
      title: "Gør-det-selv Machine Learning Workshop",
      description:
        "En praktisk hands-on workshop hvor deltagerne lærer om machine learning (ML) gennem interaktive eksperimenter med BBC micro:bit og ml-machine.org platformen.",
      duration: "3 timer",
      participants: "6-25 deltagere",
      level: "Niveau: Begynder",
      price: 12000,
      learningOutcomes: [
        "Forstå grundlæggende ML-koncepter gennem praktisk erfaring",
        "Bygge og træne simple ML-modeller til bevægelsesregistrering",
        "Lære om dataindsamling og -repræsentation i ML-systemer",
        "Få hands-on erfaring med forskellige typer af ML",
        "Udvikle forståelse for ML-pipeline fra data til færdig model",
      ],
      tools: [
        "BBC micro:bit med accelerometer",
        "ml-machine.org platform",
      ],
    },
    {
      title: "Design af ML-Løsninger i Virksomheden",
      description:
        "En struktureret workshop hvor teams identificerer og designer AI-løsninger til deres specifikke forretningsudfordringer gennem en guidet proces med fokus på værdi og implementerbarhed.",
      duration: "5 timer",
      participants: "8-20 deltagere",
      level: "Niveau: Mellem",
      price: 16000,
      learningOutcomes: [
        "Identificere områder i virksomheden hvor AI kan skabe værdi",
        "Analysere datakvalitet og -tilgængelighed for ML-projekter",
        "Designe AI-løsninger med fokus på forretningsmæssig værdi",
        "Vurdere implementeringsmuligheder og -udfordringer",
        "Udvikle konkrete projektforslag til AI-implementering",
      ],
      tools: [
        "Design Thinking værktøjer",
        "ML Solution Canvas",
        "Data kortlægningsværktøjer",
      ],
    },
  ];

  return (
    <div>
      <div class="lg:text-center mb-16">
        <h2 class="text-2xl font-bold text-gray-900">
          Specialiserede Workshops
        </h2>
        <p class="mt-4 text-gray-600">
          Udforsk vores praktiske workshops tilpasset forskellige niveauer og
          behov
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        {workshops.map((workshop) => <WorkshopCard {...workshop} />)}
      </div>
    </div>
  );
}
