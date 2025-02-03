import { h } from "preact";
import { useState } from "preact/hooks";

export function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="relative">
      <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-xl font-bold text-blue-600">
                  Magnus Høholt Kaspersen
                </a>
              </div>
            </div>

            {/* Desktop menu */}
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/"
                class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Hjem
              </a>
              <a
                href="/services"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="/blog"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="/about"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Om Magnus
              </a>
              <a
                href="/contact"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Kontakt
              </a>
            </div>

            {/* Mobile menu button */}
            <div class="sm:hidden flex items-center">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <span class="sr-only">Open main menu</span>
                {/* Icon for menu */}
                <svg
                  class={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon for close */}
                <svg
                  class={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          class={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden absolute w-full bg-white shadow-lg z-50`}
          style="top: 64px;" // Positioned right below the header
        >
          <div class="pt-2 pb-3 space-y-1">
            <a
              href="/services"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Services
            </a>
            <a
              href="/blog"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Blog
            </a>
            <a
              href="/about"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Om Magnus
            </a>
            <a
              href="/contact"
              class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
