"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FadeIn } from "../animations/FadeIn";
import Autoplay from "embla-carousel-autoplay";

const sources = [
  "/gallery-website-1.png",
  "/gallery-website-2.png",
  "/gallery-website-3.jpg",
  "/gallery-website-4.jpg",
  "/gallery-website-5.jpg",
  "/gallery-website-2.png",
];

const Gallery = () => {
  return (
    <FadeIn
      delay={0.5}
      id="gallery"
      className="flex flex-col items-center justify-center bg-primary text-black p-12"
    >
      <h1 className="font-bold">{`What we've made...`}</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-[70%] lg:w-[90%] max-w-6xl mt-12"
      >
        <CarouselContent>
          {sources.map((source, index) => (
            <CarouselItem key={index} className="lg:basis-1/3">
              <AspectRatio
                ratio={4 / 3}
                className="rounded-2xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={source}
                  alt="modern website"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </FadeIn>
  );
};

export default Gallery;
