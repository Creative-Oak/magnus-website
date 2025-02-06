import { h } from "preact";
import { IconQuote } from "../Icons.tsx";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

function TestimonialCard(
  { quote, author, position, company, image }: TestimonialProps,
) {
  return (
    <div class="relative bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div class="absolute -top-4 left-8">
        <div class="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
          <IconQuote class="h-4 w-4" />
        </div>
      </div>
      <div class="pt-4">
        <p class="text-gray-600 text-lg italic mb-8">{quote}</p>
        <div class="flex items-center">
          <img
            src={image}
            alt={author}
            class="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <p class="font-semibold text-gray-900">{author}</p>
            <p class="text-gray-500 text-sm">
              {position} • {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonial = {
    quote:
      'Magnus er en tech-entusiast, der virkelig kan sit kram. Han har en særlig evne til at gøre selv komplekse teknologier til noget håndgribeligt og sjovt. Når han faciliterer workshops, er det ikke bare snak - han får folk til at eksperimentere med alt fra microbits til maskinlæring på en måde, så man nærmest glemmer, at man er ved at lære noget super avanceret. På Region Midtjyllands events har han vist, hvordan man kan forvandle tekniske koncepter til praktiske "aha-oplevelser". Det særlige ved Magnus er, at han formår at kombinere sin dybe tekniske viden med en legende tilgang - og pludselig sidder folk der og skaber deres egne kreative løsninger.',
    author: "Sidsel Villumsen",
    position: "Organisationskonsulent",
    company: "Region Midtjylland",
    image: "/images/testimonials/sidsel-willumsen.webp",
  };

  return (
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hvad siger mine kunder?
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <TestimonialCard {...testimonial} />
        </div>
      </div>
    </div>
  );
}
