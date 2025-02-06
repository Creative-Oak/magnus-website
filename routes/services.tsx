// routes/services.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { CTASection } from "../components/sections/CTASection.tsx";
import { MainServices } from "../components/sections/MainServices.tsx";
import { TalksSection } from "../components/sections/TalksSection.tsx";
import { WorkshopsSection } from "../components/sections/WorkshopsSection.tsx";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-6">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
};

export default function ServicesPage(props: PageProps) {
  return (
    <Layout title="Services">
      <div class="lg:text-center mt-16 mb-16 px-4">
        <h1 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
          Services
        </h1>
        <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Styrk din organisation gennem AI
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Få ekspertvejledning i at udnytte AI's potentiale gennem skræddersyede
          workshops, inspirerende foredrag og praktiske hands-on forløb.
        </p>
      </div>

      {/* Workshops Section */}
      <section className="py-12 bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TalksSection />
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkshopsSection />
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainServices />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
