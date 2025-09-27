import { FadeIn } from "../animations/FadeIn";

const Footer = () => {
  return (
    <div id="footer" className="min-h-[50vh] bg-accent text-primary p-12">
      <FadeIn className="grid lg:grid-cols-2 max-lg:gap-12">
        <div className="flex items-center justify-center flex-col max-md:mt-8 lg:items-start lg:justify-start max-lg:order-2">
          <h2 className="font-bold text-nowrap">
            <a href="#hero" className="group">
              Your Company & Logo
            </a>
          </h2>
          <h3 className="mt-8 font-light">Your company tagline</h3>
        </div>
        <div className="grid lg:grid-cols-2 max-lg:gap-16 text-lg">
          <div className="flex flex-col max-md:mt-8 items-center justify-center lg:items-start lg:justify-start">
            <h2 className="font-bold underline">Contact Us</h2>
            <p className="font-light  mt-8">
              Email: <b>email@email.com</b>
            </p>
            <p className="font-light mt-4">
              Phone: <b>777-777-7777</b>
            </p>
            <p className="font-light mt-4">
              Address: <b>123 Main Street, City</b>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h2 className="font-bold underline">Quick Links</h2>
            <a href="#hero" className="mt-8 underline">
              Home
            </a>
            <a href="#hero" className="mt-8 underline">
              Services
            </a>
            <a href="#hero" className="mt-8 underline">
              About
            </a>
            <a href="#hero" className="mt-8 underline">
              Gallery
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Footer;
