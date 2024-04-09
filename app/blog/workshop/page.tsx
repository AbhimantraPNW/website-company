import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover object-contain h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: `url('/workshop-pottery.jpg')`,
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              Discover the Art of Pottery
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Patera Pottery
              </span>
            </p>
            <p className="text-base leading-8 my-5">
              Delve into the ancient artistry of pottery through our immersive
              workshop experience, where the malleability of clay meets the
              boundless realms of creativity. Led by skilled instructors
              well-versed in the nuances of the craft, participants embark on a
              journey of discovery, learning the fundamental techniques of
              shaping, molding, and firing. From the meditative rhythm of the
              wheel to the intricate detailing of hand-building, each session
              offers a hands-on exploration of pottery's rich tradition and
              contemporary innovation.
            </p>
            <h3 className="text-2xl font-bold my-5">Nurture Your Creativity</h3>
            <p className="text-base leading-8 my-5">
              Our workshop cultivates a supportive environment where learners of
              all levels can thrive and express their unique artistic visions.
              Through collaborative exercises and personalized guidance,
              participants not only refine their technical skills but also
              develop a deeper appreciation for the transformative power of
              clay. Whether crafting functional vessels or sculptural
              masterpieces, each creation becomes a testament to the
              individual's journey of self-discovery and creative expression.
            </p>
            <h3 className="text-2xl font-bold my-5">
              Forge Connections, Share Inspiration
            </h3>
            <p className="text-base leading-8 my-5">
              At the heart of our pottery workshop lies a celebration of
              craftsmanship, community, and connection. Beyond the studio,
              participants engage in dialogue, exchange ideas, and forge lasting
              bonds with fellow enthusiasts. Together, we honor the legacy of
              this ancient art form while embracing its potential to inspire,
              empower, and enrich our lives. Join us in this journey of
              exploration and creation, where every touch of clay brings us
              closer to the heart of pottery's enduring legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
