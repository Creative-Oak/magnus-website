import { ComponentChildren, h } from "preact";
import { NavigationMenu } from "../islands/NavigationMenu.tsx";
import { Footer } from "../components/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <NavigationMenu />
      <main class="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
