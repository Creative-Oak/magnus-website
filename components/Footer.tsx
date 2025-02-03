import { h } from "preact";
import { IconGithub, IconLinkedIn } from "../components/Icons.tsx";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav
          class="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div class="px-5 py-2">
            <a href="/" class="text-gray-600 hover:text-gray-700">
              Hjem
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="/services" class="text-gray-600 hover:text-gray-700">
              Services
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="/blog" class="text-gray-600 hover:text-gray-700">
              Blog
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="/about" class="text-gray-600 hover:text-gray-700">
              Om Magnus
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="/contact" class="text-gray-600 hover:text-gray-700">
              Kontakt
            </a>
          </div>
        </nav>

        <div class="mt-8 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/your-profile"
            class="text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <span class="sr-only">LinkedIn Profile</span>
            <IconLinkedIn class="h-6 w-6" />
          </a>
          <a
            href="https://github.com/your-username"
            class="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <span class="sr-only">GitHub Profile</span>
            <IconGithub class="h-6 w-6" />
          </a>
        </div>

        <div class="mt-8 border-t border-gray-200 pt-8">
          <p class="text-center text-gray-500 text-sm">
            &copy; {currentYear} Magnus Høholt Kaspersen.
          </p>
          <div class="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <a href="/privacy" class="hover:text-gray-600">
              Privatlivspolitik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
