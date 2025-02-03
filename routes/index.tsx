import { Layout } from "../components/Layout.tsx";
import { HeroSection } from "../components/sections/HeroSection.tsx";
import { FeaturesSection } from "../components/sections/FeaturesSection.tsx";
import { CTASection } from "../components/sections/CTASection.tsx";
import CollaboratorsScroll from "../islands/CollaboratorsScroll.tsx";

export default function HomePage() {
  return (
    <Layout title="Home">
      <HeroSection />
      <FeaturesSection />
      <CollaboratorsScroll />
      <CTASection />
    </Layout>
  );
}
