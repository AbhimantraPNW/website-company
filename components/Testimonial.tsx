"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "../app/globals.css";

import { TESTIMONI } from "@/constants";
import Image from "next/image";
import { Scrollbar } from "swiper/modules";
import useMediaQuery from "@/app/lib/mediaquery";

const Testimonial = () => {

  return (
    <section className="padding-container max-container flexCenter mt-10">
      <div className="flexCenter flex-col w-full">
        <div className="relative">
          <h2 className="bold-40 lg:bold-40">Real trusted reviews from</h2>
          <strong className="bold-40 lg:bold-40">our customers</strong>
        </div>
        <div className="testimonial-list mt-10">
          <TestimonialList />
        </div>
      </div>
    </section>
  );
};

const TestimonialList = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Swiper scrollbar={{ hide: true }} modules={[Scrollbar]} className="padding-container max-container">
        {TESTIMONI.map((testi) => (
          <SwiperSlide key={testi.name}>
            <TestiCust
              name={testi.name}
              icon={testi.icon}
              description={testi.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:mg-15 lg:gap-8">
      {TESTIMONI.map((testi) => (
        <ul key={testi.name} className="mb-5">
          <TestiCust
            name={testi.name}
            icon={testi.icon}
            description={testi.description}
          />
        </ul>
      ))}
    </ul>
  );
};

type TestiCust = {
  name: string;
  icon: string;
  description: string;
};

const TestiCust = ({ name, icon, description }: TestiCust) => {
  return (
    <div className="relative flex flex-col w-full items-start bg-white border rounded-xl p-8 shadow-md">
      <div className="absolute rounded-full p-8 lg:p-8 -top-8 left-7 border-4 border-slate-500">
        <Image src="/testi-image.jpg" alt="person" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
      <h2 className="bold-20 lg:bold-28 mt-5 capitalize">{name}</h2>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Image src="/star.svg" key={index} alt="star" width={20} height={20} />
          ))}
        </div>
      </div>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[20px]">{description}</p>
    </div>
  );
};
export default Testimonial;
