import React from "react";

const AboutUs = () => {
  return (
    <main
      className="flexCenter mt-15"
      style={{
        backgroundImage: `url('/LOGO_PATERA.png')`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="padding-container max-container flexCenter flex-col w-full py-4 ">
        <div>
          <div>
            <h1 className="text-2xl font-bold justify-start">
              Company History
            </h1>
            <p>
              Patera Founders is Arkkawimba & Donna Sita, they make their side
              job business to fulfill their dreams about help people. Patera
              created from 2016 with the first name "Omah Ledok", in 2019 Patera Founders want to rebrand the name and still now the new name is "Patera" which means colorful .
              The vision is to make local artisan pottery
              that fulfill customer need and make affordable products. Inovation that we can make cups and
              plates that suit your local coffeeshop or resto
            </p>
          </div>

          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold justify-start">Our Team</h1>
            <span>Founder : Arkkawimba & Donna Sita</span>
            <span>Manager : Abun Suryanegara</span>
            <span>Marketing Staff : Vriska Kumalasari</span>
            <span>Production Staff : Pak Andri, Pak Slamet, Mas Gendot</span>
          </div>

          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold justify-start">
              Company Culture
            </h1>
            <p>Our mission culture is work-life balance. We always open discussion with leadership and member to make this company grow and how to make others enjoy in work.
              We always held education courses once a year to our employee to make their grow as employee and as people in their society.
              We believe when our employee happy it makes grow up their productivy in work and make good output
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
