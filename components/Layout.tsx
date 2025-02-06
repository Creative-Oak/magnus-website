import { ComponentChildren, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { NavigationMenu } from "../islands/NavigationMenu.tsx";
import { Footer } from "../components/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://magnushkaspersen.com/images/og-image.jpg`}
        />
        <meta
          property="og:title"
          content="Magnus H. Kaspersen. AI-workshops, -foredrag og -konsulentbistand"
        />
        <meta
          property="og:description"
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
