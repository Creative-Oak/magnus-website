import { h } from "preact";
import { IconGithub, IconLinkedIn } from "../components/Icons.tsx";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <div class="space-y-8">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                  Adresse
                </h3>
                <p class="text-gray-600">
                  Langelandsgade 62 St<br />
                  8000 Aarhus C
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                  Kontakt
                </h3>
                <p class="text-gray-600">
                  Magnus H. Kaspersen Consulting ApS<br />
                  CVR: 44912791<br />
                  <a
                    href="mailto:magnus@creativeoak.dk"
                    class="hover:text-gray-900"
                  >
                    magnus@creativeoak.dk
                  </a>
                  <br />
                  <a href="tel:+4530140807" class="hover:text-gray-900">
                    +45 30 14 08 07
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul class="space-y-3">
                <li>
                  <a href="/" class="text-gray-600 hover:text-gray-700">Hjem</a>
                </li>
                <li>
                  <a href="/services" class="text-gray-600 hover:text-gray-700">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/blog" class="text-gray-600 hover:text-gray-700">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about" class="text-gray-600 hover:text-gray-700">
                    Om Magnus
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-gray-600 hover:text-gray-700">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Sociale Medier
              </h3>
              <div class="space-y-3">
                <a
                  href="https://www.linkedin.com/in/magnushoholt/"
                  class="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <IconLinkedIn class="h-5 w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/magniswerfer"
                  class="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <IconGithub class="h-5 w-5 mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Privacy */}
        <div class="mt-12 border-t border-gray-200 pt-8">
          <p class="text-center text-gray-500 text-sm">
            &copy; {currentYear} Magnus Høholt Kaspersen.
          </p>
          <div class="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <a href="/privacy" class="hover:text-gray-600">Privatlivspolitik</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
