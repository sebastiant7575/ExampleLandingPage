import HeroPage from "@/components/pages/HeroPage";
import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is an example landing page",
}

export default function Home() {

  return (
    <div id="home" className="">
      {/* Hero Page*/}
      <HeroPage />
      {/* Services */}
      <ServicesPage />
      {/* About Us */}
      <div id="about" className="h-[50vh] flex flex-col items-center justify-center bg-primary text-black">
        <h2 className="font-bold text-balance">About Us</h2>
        {/* <p className="mt-2 text-pretty">Scroll Down</p> */}
      </div>
      {/* Service Highlights */}
      <div id="fourth" className="h-[50vh] px-48 grid grid-cols-2 bg-accent text-white">
        {/* <div className="">
          <h2 className="font-bold text-balance underline">Your Company</h2>
        </div>
        <div className="grid grid-cols-3">
          <div><h3>Contact</h3></div>
          <div><h3>Contact</h3></div>
          <div><h3>Contact</h3></div> */}
          {/* <div className="flex flex-col justify-center">
            <h3 className="font-bold">Contact</h3>
            <p>{`444-444-4444`}</p>
            <p>{`email@email.com`}</p>
            <p>{`City, Province/State`}</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold">Contact</h3>
            <p>{`444-444-4444`}</p>
            <p>{`email@email.com`}</p>
            <p>{`City, Province/State`}</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold">Contact</h3>
            <p>{`444-444-4444`}</p>
            <p>{`email@email.com`}</p>
            <p>{`City, Province/State`}</p>
          </div> */}
        {/* </div> */}
        
      </div>
      {/* Gallery */}
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div> */}
      {/* Why Choose Us*/}
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-accent text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div> */}
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
      {/* <div id="fourth" className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h2 className="font-bold text-balance">Footer</h2>
        <p className="mt-2 text-pretty">Scroll Up</p>
      </div>          */}
    </div>
  );
}
