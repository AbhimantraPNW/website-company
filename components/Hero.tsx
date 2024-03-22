import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      {/* <div className="hero-map" /> */}

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/patera-logo.svg"
          alt="pottery"
          width={50}
          height={50}
          className="absolute left-2 top-[-80px] w-10 lg:w-[75px]"
        /> */}
        <h1 className="bold-40 lg:bold-62 xl:max-w-[600px]">
        Local Artisans Pottery Based on Yogyakarta
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          enjoying the next level of drinking. We can help you by our pottery cups to
          make your coffee taste more legit
        </p>

        <div className="my-11 flex flex-wrap justify-center xs:justify-center md:justify-start gap-5">
          <div className="flex items-center gap-2">
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
          <p className="bold-16 lg:bold-20 text-blue-70">
            383
            <span className="regular-16 lg:regular-20 ml-2">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href='https://linktr.ee/paterapottery'>
            <Button type="button" title="Contact Us" variant="btn_green" />
          </Link>
          
          <Link href='/custom.pdf'>
            <Button type="button" title="Our Catalogue" variant="btn_dark_green_outline" />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
