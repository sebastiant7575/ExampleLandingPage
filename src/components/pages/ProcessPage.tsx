import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

const ProcessPage = () => {
  return (
    <div
      id="process"
      className="min-h-[50vh] py-12 px-12 grid gap-12 lg:grid-cols-2 bg-primary text-black"
    >
      <div className="group rounded-4xl relative w-full h-[300px] sm:h-[400px] md:h-[500px] py-12 hover-lift max-lg:order-2">
        <Image
          src="/process.jpg"
          alt="Performance"
          fill
          className="object-cover rounded-4xl shadow-2xl"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-4xl"></div>
        <div className="absolute bottom-8 left-0 px-12">
          <h2 className="text-primary font-bold text-2xl sm:text-3xl">
            Get Started
          </h2>
        </div>
      </div>
      <FadeIn
        delay={0.5}
        className="flex flex-col items-center md:items-start justify-center "
      >
        <h2 className="font-bold text-balance">The Process</h2>
        <h3 className="mt-4 font-light">
          <i>What it looks like</i>
        </h3>
        <p className="mt-8 font-light text-pretty text-gray-600">
          Once payment is processed you will be <b>onboarded</b> to either
          select a site from a collection of <i>templates</i>
          {`,`} or <i>{`mix-and-match`}</i> for your own <b>vision</b>.
        </p>
        <p className="font-light mt-4 text-pretty text-gray-600">
          Choose applicable <b>addons</b>.
        </p>
        <p className=" font-light mt-4 text-pretty text-gray-600">
          Use our <i>custom</i>
          {`,`} <b>{`SEO-optimized`}</b> text and images, or use your own.
        </p>

        <p className="font-light mt-4 text-pretty text-gray-600">
          Register your domain name and go{" "}
          <b>
            <i>live</i>
          </b>
          .
        </p>
      </FadeIn>
    </div>
  );
};
export default ProcessPage;
