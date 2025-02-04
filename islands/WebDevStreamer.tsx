// islands/WebDevStreamer.tsx
import { useEffect, useState } from "preact/hooks";

export default function WebDevStreamer() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match the transition duration
  };

  // Hide the streamer after user closes it
  useEffect(() => {
    const hasSeenStreamer = localStorage.getItem("hasSeenStreamer");
    if (hasSeenStreamer) {
      setIsVisible(false);
    }
  }, []);

  const handleCloseAndRemember = () => {
    localStorage.setItem("hasSeenStreamer", "true");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      class={`fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 transform transition-all duration-300 ease-in-out ${
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div class="p-4">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900">
              Looking for a web developer?
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Visit{" "}
              <a
                href="http://creativeoak.dk"
                class="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                creativeoak.dk
              </a>{" "}
              for professional web development services.
            </p>
          </div>
          <button
            onClick={handleCloseAndRemember}
            class="ml-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
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
