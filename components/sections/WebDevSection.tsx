// components/WebDevStreamer.tsx
import { ComponentChildren } from "preact";

export default function WebDevStreamer() {
  return (
    <div class="bg-blue-600">
      <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center">
          <span class="text-white">Har du brug for mig som udvikler?</span>
          <a
            href="http://creativeoak.dk"
            class="ml-3 text-white font-medium underline hover:text-blue-100 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Besøg creativeoak.dk
            <svg
              class="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
