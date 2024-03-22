import Image from "next/image";

interface CompProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleVisited: string;
}

const Company = ({
  backgroundImage,
  title,
  subtitle,
  peopleVisited,
}: CompProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-8">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col bg-black rounded-md gap-1 p-2">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <p className="bold-16 md:bold-20 text-white">{peopleVisited}</p>
        </div>
      </div>
    </div>
  );
};

const CompanyProfile = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Company
          backgroundImage="bg-bg-img-1"
          title="Our Store"
          subtitle="Look for a cup that suits your need"
          peopleVisited="100+ Customers Visited"
        />
        <Company
          backgroundImage="bg-bg-img-2"
          title="Our Workshop"
          subtitle="See the process of making pottery"
          peopleVisited="100+ Customers Visited"
        />
      </div>
    </section>
  );
};

export default CompanyProfile;
