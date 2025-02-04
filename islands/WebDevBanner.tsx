// islands/WebDevBanner.tsx
import { useEffect, useState } from "preact/hooks";

export default function WebDevBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem("hasSeenBanner");
    if (hasSeenBanner) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem("hasSeenBanner", "true");
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      class={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isClosing ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div class="bg-blue-600 text-white px-4 py-2">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <p class="text-sm font-medium flex items-center">
            <span>Looking for a web developer?</span>
            <a
              href="http://creativeoak.dk"
              class="ml-2 underline hover:text-blue-100 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit creativeoak.dk
              <svg
                class="ml-1 h-4 w-4"
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
          </p>
          <button
            onClick={handleClose}
            class="text-white hover:text-blue-100 focus:outline-none"
            aria-label="Close banner"
          >
            <svg
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
