import { ComponentType } from "preact";

export const HeroSection: ComponentType = () => {
  return (
    <div className="relative h-[90vh] lg:h-[80vh] bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r"
          aria-hidden="true"
        />
        <img
          src="/images/magnus_hero.webp"
          alt="Background"
          className="object-cover w-full object-right lg:object-top h-full"
          onError={(e) => {
            console.error("Image failed to load");
            const target = e.target as HTMLImageElement;
            target.style.border = "4px solid red";
          }}
          onLoad={() => console.log("Image loaded successfully")}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto">
        <div className="h-full flex items-end lg:items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
            <div className="max-w-4xl ml-auto lg:ml-0 text-left">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Styrker Teams</span>
                <span className="block mt-2 text-blue-400">
                  Gennem AI-Uddannelse & Lederskab
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-200 max-w-2xl ml-auto lg:ml-0">
                Professionel foredragsholder og AI-workshop facilitator, der
                hjælper organisationer med at navigere i teknologiens fremtid
                gennem engagerende præsentationer og praktiske workshops.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Book en Session
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Læs Mere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
