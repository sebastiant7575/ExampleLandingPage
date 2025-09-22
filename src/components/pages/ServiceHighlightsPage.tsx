import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

const ServiceHighlightsPage = () => {
  return (
    <div id="service-highlights" className=" bg-primary text-black px-12 py-12">
      <FadeIn className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-balance">
          Why Choose <span className="text-accent underline">Us</span>?
        </h1>
        <h3 className="font-light text-balance mt-4">
          <b>TLDR:</b>
          {` A Software Engineer with 5+ years of web development
            experience at your fingertips.`}
        </h3>
      </FadeIn>
      <FadeIn className="grid lg:grid-cols-3 gap-32 mt-16">
        {/* Card 1 */}
        <div className="flex flex-col  items-start justify-start border-1 shadow-xl border-gray-400 rounded-xl p-6 hover-lift">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-bold text-balance">Technical Expertise</h2>
            <Image
              src="/lightbulb.svg"
              width={40}
              height={40}
              alt="lightbulb"
            />
          </div>
          <h3 className="font-light text-balance mt-4">
            We handle <b>every</b> technical aspect so <i>you</i> can focus on
            your business
          </h3>
          <p className="mt-4 font-light text-pretty text-gray-600">
            From SSL, security, and stability, to hosting, scaling and domain
            names. Let us handle it <i>all</i> for <i>you</i>.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-start justify-start border-1 shadow-xl border-gray-400 rounded-xl p-6 hover-lift">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-bold text-balance">Free Updates</h2>
            <Image src="/tag.svg" width={40} height={40} alt="tag" />
          </div>
          <h3 className="font-light text-balance mt-4">
            Free text and image updates
          </h3>
          <p className="mt-4 font-light text-pretty text-gray-600">
            {`Every month you get 1 hour's worth of free edits for your site. No
              Catch.`}
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-start justify-start border-1 border-gray-400 shadow-xl rounded-xl p-6 hover-lift">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-bold text-balance">Business Expansion</h2>
            <Image src="/squares.svg" width={40} height={40} alt="squares" />
          </div>
          <h3 className="font-light text-balance mt-4">
            Expand your business and brand with SEO
          </h3>
          <p className="mt-4 font-light text-pretty text-gray-600">
            {`Establish a strong online presence by leveraging SEO and best
              development practices for a fast, responsive, accessible site.`}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default ServiceHighlightsPage;
