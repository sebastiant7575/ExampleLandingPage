import AboutUsPage from "@/components/pages/AboutUsPage";
import HeroPage from "@/components/pages/HeroPage";
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
      <div
        id="service-highlights"
        className=" bg-primary text-black px-12 py-12"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-balance">Why Choose Us</h1>
          <h3 className="font-light text-balance mt-4">
            {`TLDR: A Software Engineer with 5+ years of web development
            experience at your fingertips`}
          </h3>
        </div>
        {/* <p className="mt-2 text-pretty">Scroll Down</p> */}
        {/* Why Choose Us? */}
        {/* TLDR: A Software Engineer with 5+ years of web development experience at your fingertips */}
        {/* Technical Expertise */}
        {/* 1. We handle every technical aspect so you can focus on your business 
          SSL, security, stability, hosting, domain */}
        {/* 2. Free text and image updates  */}
        {/* 3. Expand your business with SEO and a strong online presence */}
        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-bold text-balance">Technical Expertise</h2>
            <h3 className="font-light text-balance mt-4">
              We handle <b>every</b> technical aspect so <i>you</i> can focus on
              your business
            </h3>
            <p className="mt-4 font-light text-pretty text-gray-600">
              From SSL, security, and stability, to hosting, scaling and domain
              names. Let us handle it <i>all</i> for <i>you</i>.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-bold text-balance">Free Updates</h2>
            <h3 className="font-light text-balance mt-4">
              Free text and image updates
            </h3>
            <p className="mt-4 font-light text-pretty text-gray-600">
              {`Every month you get 1 hour's worth of free edits for your site. No
              Catch.`}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-bold text-balance">Business Expansion</h2>
            <h3 className="font-light text-balance mt-4">
              Expand your business and brand with SEO
            </h3>
            <p className="mt-4 font-light text-pretty text-gray-600">
              {`Establish a strong online presence by leveraging SEO and best
              development practices for a fast, responsive, accessible site.`}
            </p>
          </div>
        </div>
      </div>

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
