import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="text-black">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-1 text-orange-300 uppercase tracking-loose">
              About Us
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Patera Pottery Journey
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here's our journey start from 2016 till now
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 font-bold text-base text-orange-300">
                      2016
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Born</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Patera, born in 2016, with first name called "Omah Ledok",
                      emerged from humble beginnings as a small business
                      endeavor.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 font-bold text-base text-orange-300">
                      2020
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Covid Era
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Amidst the turbulent landscape of the COVID-19 era in
                      2020, we find ourselves profoundly grateful for the
                      stability of our small business. In the face of
                      unprecedented challenges, our resilience and adaptability
                      have proven invaluable.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 font-bold text-base text-orange-300">
                      {" "}
                      2022
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Change Store Location
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      In 2022, we embarked on an exciting journey of change by
                      relocating our store to a new, vibrant location. The
                      transition marked a significant milestone in our growth
                      trajectory, symbolizing our readiness to embrace new
                      opportunities and challenges.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 font-bold text-base text-orange-300">
                      2023-Now
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Change Brand Name
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      In 2023, we embarked on a significant rebranding journey,
                      transitioning from our former brand name, Omah Ledok, to
                      the new identity of <span className="font-bold">Patera</span>. This strategic decision was
                      driven by our vision for the future and our aspiration to
                      better align our brand with our values, goals, and
                      evolving identity.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
