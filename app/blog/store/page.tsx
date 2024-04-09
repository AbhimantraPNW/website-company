import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: `url('/pottery-store.jpg')`,
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              Unveiling Artistry: Exploring Our Pottery Store
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Patera Pottery
              </span>
            </p>
            <p className="text-base leading-8 my-5">
              Unveiling Artistry: Exploring Our Pottery Store Welcome to our
              pottery store, a sanctuary where craftsmanship flourishes and
              every piece tells a story. As you step through our doors, you're
              greeted by an array of exquisite creations, each bearing the mark
              of skilled artisans and the essence of their dedication. From
              elegant vases to charming mugs and everything in between, our
              collection reflects a fusion of tradition and innovation, curated
              to inspire and delight even the most discerning of tastes.
            </p>
            <h3 className="text-2xl font-bold my-5">
              Craftsmanship Redefined: A Feast for the Senses
            </h3>
            <p className="text-base leading-8 my-5">
              Prepare to be captivated by the sensory delights awaiting you in
              our pottery store. Run your fingers along the smooth curves of a
              meticulously glazed pot, marvel at the intricate patterns adorning
              a handmade bowl, and revel in the earthy aroma of freshly fired
              clay. Each piece exudes a sense of authenticity and authenticity,
              inviting you to appreciate the time-honored techniques and
              attention to detail that go into its creation. Whether you're a
              seasoned collector or a casual admirer, our store offers an
              immersive experience that celebrates the artistry of pottery in
              all its forms.
            </p>
            <h3 className="text-2xl font-bold my-5">
              Bringing Beauty Home: Finding Your Perfect Piece
            </h3>
            <p className="text-base leading-8 my-5">
              As you wander through our pottery store, allow yourself to be
              drawn to the piece that speaks to you. Whether it's a whimsical
              teapot that sparks joy or a sophisticated serving platter that
              promises to elevate your next dinner party, our collection offers
              something for every aesthetic sensibility and occasion. Take your
              time, explore our offerings, and trust your instincts as you
              select the perfect addition to your home or the ideal gift for a
              loved one. With each purchase, you not only acquire a beautiful
              object but also become part of a legacy that celebrates
              craftsmanship, creativity, and the timeless allure of pottery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
