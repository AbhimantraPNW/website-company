import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 pb-40 md:gap-20 lg:py-15 xl:flex-row"

        style={{
        backgroundImage: `url('/bg-img-2.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <div className="hero-map" /> */}

      {/* LEFT */}
      <div className="relative z-20 flexCenter flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/patera-logo.svg"
          alt="pottery"
          width={50}
          height={50}
          className="absolute left-2 top-[-80px] w-10 lg:w-[75px]"
        /> */}

        <div className="bold-40 lg:bold-62 xl:max-w-[600px] text-white">
          <h1>Local Artisan Pottery Based on Yogyakarta</h1>
        </div>
        <p className="regular-16 mt-4 text-white xl:max-w-[600px]">
          We want to be on each of your journeys seeking the satisfaction of
          enjoying the next level of drinking. We can help you by our pottery
          cups to make your coffee taste more legit
        </p>

        <div className="my-8 flex flex-wrap gap-3">
          <div className="flex gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-white">
            383
            <span className="regular-16 lg:regular-20 ml-2">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:w-[20%] sm:w-full gap-3 sm:flex-col">
          <Button type="button" title="Contact Us" variant="btn_green" />
          <Button
            type="button"
            title="Our Catalogue"
            variant="btn_dark_green_outline"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
