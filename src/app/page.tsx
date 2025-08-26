import HeroPage from "@/components/pages/HeroPage";
import ServicesPage from "@/components/pages/ServicesPage";

export default function Home() {

  return (
    <div id="first" className="h-screen snap-y snap-mandatory">
      {/* Hero Page*/}
      <HeroPage />
      {/* Services */}
      <ServicesPage />
      {/* About Us */}
      <div id="third" className="h-screen flex flex-col items-center justify-center snap-start bg-primary text-black">
        <h2 className="font-bold text-balance">Contact</h2>
        <p className="mt-2 text-pretty">Scroll Down</p>
      </div>
      {/* Service Highlights */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-accent text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
      {/* Gallery */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
      {/* Why Choose Us*/}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-accent text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
      {/* FAQ */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
      {/* Reviews */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-accent text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>
      {/* Call To Action */}
      <div id="fourth" className="h-screen flex flex-col items-center justify-center snap-start bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>         
    </div>
  );
}
