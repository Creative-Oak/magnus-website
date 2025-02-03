import { IconArrowRight } from "../../components/Icons.tsx";

export function CTASection() {
  return (
    <div class="bg-blue-600">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span class="block">Klar til at komme igang?</span>
          <span class="block text-blue-200">
            Lad os tale om dit næste event.
          </span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Tag kontakt
              <IconArrowRight class="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
