import AboutUsPage from "@/components/pages/AboutUsPage";
import Footer from "@/components/pages/Footer";
import Gallery from "@/components/pages/GalleryPage";
import HeroPage from "@/components/pages/HeroPage";
import ServiceHighlightsPage from "@/components/pages/ServiceHighlightsPage";
import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is an example landing page",
};

export default function Home() {
  return (
    <div className="bg-primary">
      {/* Hero Page*/}
      <HeroPage />
      {/* Services */}
      <ServicesPage />
      {/* About Us */}
      <AboutUsPage />
      {/* Service Highlights / Why Choose Us */}
      <ServiceHighlightsPage />
      {/* Gallery wth example sites */}
      <Gallery />

      {/* Pricing / Buy / Contact Us (Call to Action) */}
      <div
        id="pricing"
        className="min-h-screen flex flex-col items-center justify-center bg-primary"
      >
        <h2 className="font-bold text-balance">Pricing</h2>
        <p className="mt-2 text-pretty">Cards left to right</p>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
