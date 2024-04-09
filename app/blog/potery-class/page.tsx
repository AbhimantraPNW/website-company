import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: `url('/pottery-class2.jpg')`,
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              Unlock Your Artistic Potential: Explore Pottery at UGM's Workshop
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Patera Pottery
              </span>
            </p>
            <p className="text-base leading-8 my-5">
              Discover the age-old art of pottery at Universitas Gadjah Mada's
              (UGM) immersive workshop, designed to unleash your creativity and
              foster a deeper connection with traditional craftsmanship. Nestled
              in the culturally rich city of Yogyakarta, this educational
              experience offers participants the opportunity to delve into the
              intricate world of clay shaping under the guidance of skilled
              artisans and educators. Whether you're a novice or an experienced
              potter, our workshop provides a supportive environment where you
              can refine your skills, experiment with various techniques, and
              develop a profound appreciation for the artistry of pottery.
            </p>
            <h3 className="text-2xl font-bold my-5">
              A Journey of Discovery and Collaboration
            </h3>
            <p className="text-base leading-8 my-5">
              UGM's pottery workshop isn't just about mastering techniques; it's
              about embarking on a journey of discovery and collaboration.
              Engage with a diverse community of fellow learners, exchange
              ideas, and draw inspiration from one another's unique
              perspectives. Through hands-on activities and interactive
              sessions, participants have the chance to explore their creative
              potential, challenge themselves, and forge meaningful connections
              with like-minded individuals. At UGM, we believe that education
              extends beyond the classroom, and our pottery workshop serves as a
              platform for fostering creativity, camaraderie, and lifelong
              learning.
            </p>
            <h3 className="text-2xl font-bold my-5">
              Craftsmanship Meets Innovation: UGM's Commitment to Excellence
            </h3>
            <p className="text-base leading-8 my-5">
              As a leading institution in education and research, UGM is
              committed to providing participants with a world-class learning
              experience. Our pottery workshop is no exception, offering access
              to state-of-the-art facilities and resources that facilitate
              hands-on learning and experimentation. With guidance from
              experienced instructors who are passionate about sharing their
              knowledge, participants can hone their craft, refine their
              techniques, and emerge from the workshop with a newfound sense of
              confidence and accomplishment. Join us at UGM's pottery workshop
              and embark on a transformative educational journey where tradition
              meets innovation and creativity knows no bounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
