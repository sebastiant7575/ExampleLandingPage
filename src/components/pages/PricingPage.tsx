import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

interface CardItemProps {
  checked?: boolean;
  children: React.ReactNode;
}

const CardItem = ({ checked, children }: CardItemProps) => {
  return (
    <>
      <Separator className="my-4 bg-gray-200" />
      <div className="flex items-center gap-2">
        <Image
          src={checked ? "/check.svg" : "x.svg"}
          width={20}
          height={20}
          alt="checkmark"
        />
        <p className="font-light text-pretty text-gray-800">{children}</p>
      </div>
    </>
  );
};

const PricingPage = () => {
  return (
    <FadeIn delay={0.5} id="pricing" className="p-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-balance">Pricing</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-32 mt-12">
        {/* Card #1 */}
        <div className="flex flex-col  items-start justify-start border-1 shadow-xl border-gray-400 rounded-xl p-6 hover-lift">
          <h2>$499.99</h2>
          <h3 className="font-light">
            <i>{`+ $35/Month`}</i>
          </h3>
          <p className="font-light mt-2 text-pretty text-gray-600">
            Pay <i>up front</i> and then as you go. This is <i>perfect</i> for
            people who <i>{`aren't`}</i> going to update their site very often
            and want something <i>simple</i>.
          </p>
          <CardItem checked>{`Domain Name + Hosting`}</CardItem>
          <CardItem checked>{`Unlimited Monthly Users`}</CardItem>
          <CardItem>{`Unlimited Text & Image Updates`}</CardItem>
          <CardItem
            checked
          >{`Scaling & Stability for large influx of users`}</CardItem>
          <CardItem checked>{`Maintenance`}</CardItem>
          <CardItem checked>{`Incredibly Fast Response Time`}</CardItem>
          <a
            href="#second"
            className="rounded-md bg-accent px-3.5 py-2.5 mt-8 text-sm font-semibold text-white shadow-md hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Get Started
          </a>
        </div>
        {/* Card #2 */}
        <div className="flex flex-col  items-start justify-start border-2 shadow-xl border-accent rounded-xl p-6 hover-lift">
          <div className="flex w-full justify-between items-center">
            <h2>$0</h2>
            <div className="bg-accent px-1.5 rounded-md">
              <p className="text-primary text-lg font-bold shadow-md">
                Most Popular
              </p>
            </div>
          </div>
          <h3 className="font-light">
            <i>{`+ $150/Month`}</i>
          </h3>
          <p className="font-light mt-2 text-pretty text-gray-600">
            <i>Free up front</i>, only pay the monthly fee which includes{" "}
            <i>UNLIMITED free</i> text <i>AND</i> image updates. This is{" "}
            <i>perfect</i> for people who want <i>frequent</i> updates to their
            site.
          </p>
          <CardItem checked>{`Domain Name + Hosting`}</CardItem>
          <CardItem checked>{`Unlimited Monthly Users`}</CardItem>
          <CardItem checked>{`Unlimited Text & Image Updates`}</CardItem>
          <CardItem
            checked
          >{`Scaling & Stability for large influx of users`}</CardItem>
          <CardItem checked>{`Maintenance`}</CardItem>
          <CardItem checked>{`Incredibly Fast Response Time`}</CardItem>
          <a
            href="#second"
            className="rounded-md bg-accent px-3.5 py-2.5 mt-8 text-sm font-semibold text-white shadow-md hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Get Started
          </a>
        </div>
        {/* Card #3 */}
        <div className="flex flex-col  items-start justify-start border-1 shadow-xl border-gray-400 rounded-xl p-6 hover-lift">
          <h2>Custom</h2>
          <h3 className="font-light">
            <i>Contact Us</i>
          </h3>
          <p className="font-light mt-2 text-pretty text-gray-600">
            Want something more <i>advanced</i>
            {`,`} or <i>very</i> specific? Have a <i>particular</i> design you
            want us to implement? Want to discuss a price that{" "}
            <i>works for you?</i> Contact us and we can discuss your ideas.
          </p>
          <Separator className="my-4 bg-gray-200" />
          <a
            href="#second"
            className="rounded-md bg-accent px-3.5 py-2.5 mt-2 text-sm font-semibold text-white shadow-md hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default PricingPage;
