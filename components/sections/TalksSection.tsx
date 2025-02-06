// components/sections/TalksSection.tsx
import { IconClock, IconTarget, IconUsers } from "../Icons.tsx";

interface TalkCardProps {
  title: string;
  description: string;
  duration: string;
  audience: string;
  format: string;
  keyTopics: string[];
  includedMaterials: string[];
  price: number;
}

function TalkCard({
  title,
  description,
  duration,
  audience,
  format,
  keyTopics,
  includedMaterials,
  price,
}: TalkCardProps) {
  const formattedPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const params = new URLSearchParams({
    subject: `Foredrag Booking: ${title} (${duration})`,
    message:
      `Jeg er interesseret i foredraget "${title}".\n\nDetaljer:\n- Varighed: ${duration}\n- Målgruppe: ${audience}\n- Format: ${format}\n\nJeg vil gerne høre mere om mulige datoer og det praktiske omkring afholdelse af foredraget.`,
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
          <span class="text-gray-700">{audience}</span>
        </div>
        <div class="flex items-center">
          <IconTarget class="h-5 w-5 text-blue-500 mr-2" />
          <span class="text-gray-700">{format}</span>
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
        <h4 class="font-semibold text-gray-900 mb-2">Nøgleemner:</h4>
        <ul class="space-y-2">
          {keyTopics.map((topic) => (
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span class="text-gray-700">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="font-semibold text-gray-900 mb-2">
          Inkluderet i prisen:
        </h4>
        <ul class="space-y-2">
          {includedMaterials.map((material) => (
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              <span class="text-gray-700">{material}</span>
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

export function TalksSection() {
  const talks = [
    {
      title: "AI i Praksis: Fra Hype til Virkelighed",
      description:
        "Et engagerende foredrag om kunstig intelligens' praktiske anvendelser i dag, med fokus på hvordan virksomheder kan udnytte teknologien strategisk og ansvarligt.",
      duration: "45-60 min",
      audience: "Ledelse & beslutningstagere",
      format: "Fysisk eller online",
      price: 8000,
      keyTopics: [
        "State-of-the-art AI teknologier og deres reelle muligheder",
        "Praktiske eksempler på succesfuld AI-implementering",
        "Strategiske overvejelser ved AI-adoption",
        "Etiske aspekter og ansvarlig AI-udvikling",
        "Fremtidige trends og deres potentielle indvirkning",
      ],
      includedMaterials: [
        "Præsentationsmaterialer i digital form",
        "Opsummerende one-pager med key takeaways",
        "Ressourceliste til videre fordybelse",
      ],
    },
    {
      title: "Design-Drevet Digital Transformation",
      description:
        "Et strategisk foredrag om hvordan design thinking og brugercentrerede metoder kan drive succesfuld digital transformation i moderne organisationer.",
      duration: "90 min",
      audience: "Alle",
      format: "Fysisk eller online",
      price: 12000,
      keyTopics: [
        "Design Thinking som driver for digital innovation",
        "Brugercentreret teknologiadoption og forandringsledelse",
        "Digital service design og customer journey mapping",
        "Prototype-drevet transformation og iterativ udvikling",
        "Organisatorisk design thinking og kulturforandring",
        "Case studies: Design-drevet transformation i praksis",
      ],
      includedMaterials: [
        "Præsentationsmaterialer i digital form",
        "Opsummerende one-pager med key takeaways",
        "Ressourceliste til videre fordybelse",
      ],
    },
  ];

  return (
    <div>
      <div class="lg:text-center mb-16">
        <h2 class="text-2xl font-bold text-gray-900">
          Inspirerende Foredrag
        </h2>
        <p class="mt-4 text-gray-600">
          Få ny inspiration og indsigt gennem vores ekspertforedrag om
          teknologi, innovation og digital transformation
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        {talks.map((talk) => <TalkCard {...talk} />)}
      </div>
    </div>
  );
}
