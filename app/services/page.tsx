import Button from "@/components/Button";
import Link from "next/link";
import React, { useEffect } from "react";

const Services = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        id="default-carousel"
        className="relative rounded-lg overflow-hidden shadow-lg"
        data-carousel="static"
      >
        <div className="relative h-80 md:h-96" data-carousel-inner>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/custom.jpg"
              className="object-cover w-full h-full"
              alt="Slide 1"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
              First Slide
            </span>
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/ready_stock.jpg"
              className="object-cover w-full h-full"
              alt="Slide 2"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
              Second Slide
            </span>
          </div>
        </div>

        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
          ></button>
        </div>

        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
        This carousel slider component is part of a larger, open-source library
        of Tailwind CSS components. Learn more by going to the official
        <a
          className="text-blue-600 hover:underline"
          href="https://flowbite.com/docs/getting-started/introduction/"
          target="_blank"
        >
          Flowbite Documentation
        </a>
        .
      </p>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
};

export default Services;
