// routes/about.tsx
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import {
  IconAI,
  IconArchitecture,
  IconCode,
  IconPresentation,
  IconUXDesign,
} from "../components/Icons.tsx";
import { CTASection } from "../components/sections/CTASection.tsx";

export default function AboutPage(props: PageProps) {
  return (
    <Layout title="Om Mig">
      <Head>
        <title>Om Mig | Magnus' Portfolio</title>
        <meta
          name="description"
          content="Læs mere om Magnus - datalog, designer og Ph.d. i AI-systemer til læring"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[32rem] bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/magnus_aula.webp"
            alt="Magnus holder foredrag"
            className="w-full h-full object-cover object-[100%_85%] opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Hej! Jeg er Magnus!</h1>
            <p className="text-xl">
              Partner i Creative Oak & Postdoc på Datalogisk Institut, Aarhus
              Universitet
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/images/magnus_portrait1.webp"
                alt="Portrait af Magnus"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Om mig</h2>
              <div className="prose prose-lg">
                <p>
                  Magnus er datalog og designer med en PhD-grad i udviklingen af
                  AI-systemer til læring gennem designdrevet forskning. Under
                  hans PhD og Postdoc ved Aarhus Universitet har Magnus arbejdet
                  intensivt med at designe læringsværktøjer, der integrerer AI.
                </p>
                <p>
                  Magnus har opbygget stærke samarbejder med institutioner som
                  DR, DM og Micro:bit Educational Foundation.
                </p>
                <p>
                  Hans tilgang er præget af en kombination af dyb teknisk
                  indsigt og designekspertise, som muliggør udviklingen af
                  kreative og effektive løsninger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Specialer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "UX Design", Icon: IconUXDesign },
              { name: "AI foredrag", Icon: IconPresentation },
              { name: "AI Udvikling", Icon: IconAI },
              { name: "Udvikler", Icon: IconCode },
              { name: "IT-arkitektur", Icon: IconArchitecture },
            ].map(({ name, Icon }) => (
              <div
                key={name}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon class="w-8 h-8 text-blue-600" />
                  <h3 className="font-semibold">{name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        mainHeading="Er du blevet nysgerrig?"
        subHeading="Lad os kigge på, hvordan jeg kan hjælpe!"
        buttonText="Ræk ud"
      />

      {/* Experience Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Erfaring</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-bold text-xl">Partner & AI Ekspert</h3>
                <p className="text-gray-600">Creative Oak</p>
                <p className="text-gray-600">2023 - Nu</p>
              </div>
              <div className="col-span-2">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Foredrag og workshops om AI</li>
                  <li>Udvikling af hjemmesider i Webflow</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-bold text-xl">Postdoctoral Researcher</h3>
                <p className="text-gray-600">Aarhus Universitet</p>
                <p className="text-gray-600">2023 - Nu</p>
              </div>
              <div className="col-span-2">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Forskning i kunstig intelligens og uddannelse</li>
                  <li>Design og udvikling af forskningsprototyper</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Uddannelse</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-bold text-xl">Ph.d., Datalogi</h3>
                <p className="text-gray-600">Aarhus Universitet</p>
                <p className="text-gray-600">2019-2023</p>
              </div>
              <div className="col-span-2">
                <p>Forskning i kunstig intelligens i skolen</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-bold text-xl">
                  Kandidatgrad, IT Produktudvikling
                </h3>
                <p className="text-gray-600">Aarhus Universitet</p>
                <p className="text-gray-600">2017 - 2019</p>
              </div>
              <div className="col-span-2">
                <p>Speciale i kunstig intelligens i gymnasiet</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-bold text-xl">
                  Bachelorgrad, IT Produktudvikling
                </h3>
                <p className="text-gray-600">Aarhus Universitet</p>
                <p className="text-gray-600">2014 - 2019</p>
              </div>
              <div className="col-span-2">
                <p>Fokus på designforskning og produktdesign</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
