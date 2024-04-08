"use client";

import { useEffect } from "react";

export const CustomerList = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel") as HTMLElement;
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    if (!carousel || !prevButton || !nextButton) {
      console.error("Carousel elements not found.");
      return;
    }

    prevButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
      });
    });

    nextButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth",
      });
    });

    return () => {
      prevButton.removeEventListener("click", () => {});
      nextButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <div className="carousel w-full flex overflow-x-auto snap">
          {/* Adjust the margin-right to create a gap between cards */}
          <div
            className="carousel-item flexCenter gap-4"
            style={{ marginRight: "10px" }}
          >
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              {/* Adjust the width of each card */}
              <img
                src="/c-semusim.PNG"
                alt="Image 1"
                className="w-64 h-48 object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @semusim_coffee</p>
            </div>
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              <img
                src="/c-semudakopi.PNG"
                alt="Image 2"
                className="w-64 h-48 object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @semudakopi</p>
            </div>
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              <img
                src="/c-eaterybykomma.PNG"
                alt="Image 3"
                className="w-64 h-48  object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @eaterybykomma</p>
            </div>
          </div>
          <div
            className="carousel-item flexCenter gap-4"
            style={{ marginRight: "10px" }}
          >
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              <img
                src="/c-awor.PNG"
                alt="Image 4"
                className="w-64 h-48 object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @awor.coffee</p>
            </div>
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              <img
                src="/c-safti.PNG"
                alt="Image 5"
                className="w-64 h-48 object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @safti.coffee.space</p>
            </div>
            <div className="p-4 py-10 bg-white rounded-lg shadow-md">
              <img
                src="/c-kedaiangkasa.PNG"
                alt="Image 6"
                className="w-64 h-48 object-cover mb-4 rounded-lg"
              />

              <p className="text-gray-700">IG: @rumah_angkasa</p>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
          <button className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
          <button className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
