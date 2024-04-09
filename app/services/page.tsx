"use client";
import React, { useRef, useState } from "react";

import { CiImport } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import useMediaQuery from "../lib/mediaquery";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../globals.css";

const Services = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <div className="padding-container max-container flex-col items-center justify-center">
        <div className="w-fit pb-1 px-2 mx-4 mt-2 rounded-md text-2xl font-semibold border-b-2 border-orange-300 dark:border-b-2 dark:border-yellow-600">
          Services
        </div>
        <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group mt-5">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">Ready Stock</div>

              <div className="opacity-60 text-sm ">
                "Discover our ready stock pottery cups with the added
                convenience of no minimum order requirement and complimentary
                design services."
              </div>
            </div>
          </div>
          <img
            alt="Ready Stock"
            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src="/ready_stock.jpg"
          />
        </div>

        <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group mt-5">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">Custom Product</div>

              <div className="opacity-60 text-sm ">
                "Customize your pottery products with a minimum order of 12
                pieces per type, and enjoy complimentary design services."
              </div>
            </div>
          </div>
          <img
            alt="Custom"
            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src="/custom3.jpg"
          />
        </div>
      
    <div className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
              How It Works for custom
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Launch your product in 4 steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
              Create your own design product with us and launch it with just 4
              easy steps
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <CiImport className="text-2xl" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Chose your designs
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Chose design you like and what you want.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <path
                    d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Sampling
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  You will sample first before mass production.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <CiClock1 className="text-2xl" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Mass Production
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Around 4 weeks, but if more faster we cand send early.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <path
                    d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Get your product
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  That's it. You will get back your request product.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );

  }

  return (
    <section className="w-full mx-auto py-10">
      <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-orange-300 dark:border-b-2 dark:border-yellow-600">
        Services
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] lg:w-[50%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <img
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src="/ready_stock1.jpg"
            alt="billboard image"
          />
        </div>
        <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 text-gray-700 md:p-4 xs:p-0 rounded-md">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Ready Stock
          </h2>
          <p className="text-md mt-10">
            <span className="underline">No Minimal Order </span>: Say goodbye to
            the hassle of meeting minimum order requirements. At{" "}
            <span className="font-bold">Patera Pottery</span>, there's no
            pressure to purchase more than you need. Whether you're looking for
            a single piece or several, you're free to explore our collection
            without constraints.
          </p>
          <p className="mt-2">
            <span className="underline">Choose Your Design </span>: We
            understand that personal taste varies, which is why we offer the
            option to choose from a range of designs if available. Our diverse
            selection ensures that you'll find something that perfectly suits
            your style and preferences. From minimalist modern designs to
            intricate traditional patterns, there's something for everyone.
          </p>
        </div>
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
        <div className="md:hidden sm:block xs:block xs:w-full">
          <img
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src="/custom3.jpg"
            alt="billboard image"
          />
        </div>

        <div className="lg:w-[50%] xs:w-full bg-gray-100 text-gray-700 md:p-4 xs:p-0 rounded-md">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Custom Product
          </h2>

          <p className="text-md mt-10">
            <span className="underline">Minimum Order </span>: Our minimum order
            requirement for custom products is 12 pieces per product type. This
            ensures that you receive high-quality custom items while also
            benefiting from cost-effective pricing. Whether you're ordering for
            a small gathering or a large-scale event, we're here to accommodate
            your needs
          </p>
          <p className="mt-2">
            <span className="underline">Production Time</span>: We understand
            the importance of timely delivery, which is why our production time
            for custom orders typically ranges around 3-4 weeks. During this
            time, our skilled craftsmen meticulously work on crafting your
            custom items to perfection. Rest assured, we strive to deliver your
            order promptly while maintaining the highest standards of quality.
          </p>
        </div>

        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full ">
          <img
            className="lg:rounded-t-lg xs:rounded-sm"
            src="/custom3.jpg"
            alt="billboard image"
          />
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
              How It Works for custom
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Launch your product in 4 steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
              Create your own design product with us and launch it with just 4
              easy steps
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <CiImport className="text-2xl" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Chose your designs
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Chose design you like and what you want.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <path
                    d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Sampling
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  You will sample first before mass production.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <CiClock1 className="text-2xl" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Mass Production
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Around 4 weeks, but if more faster we cand send early.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                >
                  <path
                    d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Get your product
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  That's it. You will get back your request product.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
