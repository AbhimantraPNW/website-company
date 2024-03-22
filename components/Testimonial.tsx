import { TESTIMONI } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="flexCenter py-2 mt-40 ">
      <div className="flexCenter flex-col w-full lg:w-[80%]">
        <div className="relative">
          <h2 className="bold-40 lg:bold-64">Testimonial</h2>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {TESTIMONI.map((testi) => (
            <TestiCust
              key={testi.name}
              name={testi.name}
              icon={testi.icon}
              description={testi.description}
            />
          ))}
        </ul>
      </div>  
    </section>
  );
};

type TestiCust = {
  name: string;
  icon: string;
  description: string;
};

const TestiCust = ({ name, icon, description }: TestiCust) => {
  return (
    <li className="flex flex-col w-full items-start bg-white border rounded-xl p-8 shadow-md mb-4">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="person" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{name}</h2>
      <div className="flex items-center mt-2">
        <div className="flex items-center mt-2">
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
      </div>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[15px]">{description}</p>
    </li>
  );
};

export default Testimonial;
