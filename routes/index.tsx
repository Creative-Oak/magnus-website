import { Layout } from "../components/Layout.tsx";
import { HeroSection } from "../components/sections/HeroSection.tsx";
import { FeaturesSection } from "../components/sections/FeaturesSection.tsx";
import { CTASection } from "../components/sections/CTASection.tsx";
import CollaboratorsScroll from "../islands/CollaboratorsScroll.tsx";
import { MainServices } from "../components/sections/MainServices.tsx";
import WebDevStreamer from "../components/sections/WebDevSection.tsx";

export default function HomePage() {
  return (
    <Layout title="Home">
      <HeroSection />
      <FeaturesSection />
      <CollaboratorsScroll />
      <CTASection />
      <div class="bg-gray-50">
        <div class=" py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <MainServices />
        </div>
      </div>
      <WebDevStreamer />
    </Layout>
  );
}
