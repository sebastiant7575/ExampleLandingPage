import AboutUsPage from "@/components/pages/AboutUsPage";
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
    <div>
      {/* Hero Page*/}
      <HeroPage />
      {/* Services */}
      <ServicesPage />
      {/* About Us */}
      <AboutUsPage />
      {/* Service Highlights / Why Choose Us */}
      <ServiceHighlightsPage />
      {/* Gallery wth example sites */}
      <div
        id="gallery"
        className="h-[50vh] flex flex-col items-center justify-center bg-primary text-black"
      >
        <h2 className="font-bold text-balance">Gallery</h2>
        <p className="mt-2 text-pretty">Carousel of sites</p>
      </div>
      {/* Pricing / Buy / Contact Us (Call to Action) */}
      <div
        id="pricing"
        className="min-h-screen flex flex-col items-center justify-center bg-accent text-white"
      >
        <h2 className="font-bold text-balance">Pricing</h2>
        <p className="mt-2 text-pretty">Cards left to right</p>
      </div>
      {/* FAQ */}
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div> */}
      {/* Reviews */}
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-accent text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div> */}
      {/* Call To Action */}
      {/* <div id="seventh" className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>          */}
      {/* Pricing Tiers*/}
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div> */}
      {/* Footer */}
      <div
        id="footer"
        className="h-screen flex flex-col items-center justify-center bg-primary text-white"
      >
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
    </div>
  );
}
