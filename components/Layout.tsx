import { ComponentChildren, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { NavigationMenu } from "../islands/NavigationMenu.tsx";
import { Footer } from "../components/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  const websiteUrl = "https://magnushkaspersen.com";
  const imageUrl = `${websiteUrl}/images/og-image.jpg`;

  return (
    <>
      <Head>
        <title>{title}</title>

        {/* Essential OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta
          property="og:title"
          content="Magnus H. Kaspersen. AI-workshops, -foredrag og -konsulentbistand"
        />
        <meta
          property="og:description"
          content="Professionel foredragsholder og AI-workshop facilitator, der hjælper organisationer med at navigere i teknologiens fremtid gennem engagerende præsentationer og praktiske workshops."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
        <meta
          name="twitter:title"
          content="Magnus H. Kaspersen. AI-workshops, -foredrag og -konsulentbistand"
        />
        <meta
          name="twitter:description"
          content="Professionel foredragsholder og AI-workshop facilitator, der hjælper organisationer med at navigere i teknologiens fremtid gennem engagerende præsentationer og praktiske workshops."
        />

        {/* LinkedIn Specific */}
        <meta name="image" property="og:image" content={imageUrl} />
        <meta name="author" content="Magnus H. Kaspersen" />

        {/* Regular Meta Tags */}
        <meta
          name="description"
          content="Professionel foredragsholder og AI-workshop facilitator, der hjælper organisationer med at navigere i teknologiens fremtid gennem engagerende præsentationer og praktiske workshops."
        />
      </Head>
      <NavigationMenu />
      <main class="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
