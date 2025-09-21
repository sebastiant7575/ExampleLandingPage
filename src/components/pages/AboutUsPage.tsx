import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div
      id="about"
      className="min-h-[50vh] py-12 px-12 grid gap-12 lg:grid-cols-2 bg-primary text-black"
    >
      <div className="flex flex-col items-center md:items-start justify-center ">
        <h2 className="font-bold text-balance">About Us</h2>
        <h3 className="mt-4 font-light">
          <i>What we do and Why</i>
        </h3>
        <p className="mt-8 font-light text-pretty text-gray-600">
          A <b>software engineer</b> with <b>5+</b> years of{" "}
          <i>professional experience</i> specialized in <b>web development</b>{" "}
          and <b>UI/UX</b> design.
        </p>
        <p className="mt-2 font-light text-pretty text-gray-600">
          A <i>passion</i> for bringing ideas to life, from <b>front-end</b>{" "}
          designs to <b>full-stack</b> <i>experiences</i>.
        </p>
      </div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] py-12">
        <Image
          src="/developers.jpg"
          alt="Performance"
          fill
          className="object-cover rounded-4xl shadow-2xl"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-4xl"></div>
        <div className="absolute bottom-8 left-0 px-12">
          <h2 className="text-primary font-bold text-2xl sm:text-3xl">
            Our Team
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
