import Footer from "@/components/Footer";

interface User {
  gender: string;
  name: { title: string; first: string; last: string };
  phone: number;
  picture: { large: string };
}

interface RandomUserResponse {
  results: User[];
}

const URL = "https://randomuser.me/api/?results=7";

const Teams = async () => {
  const response = await fetch(URL, { cache: "no-store" });

  const { results }: RandomUserResponse = await response.json();

  return (
    <main
    >
     
        <h1 className="flexCenter text-3xl font-bold text-gray-30">Meet Our Team</h1>

        <div className="padding-container max-container justify-center lg:flex flex-rows gap-12 mt-10">
          <div className="mb-8 lg:mb-0 flexCenter flex-wrap lg:w-[700px] gap-20">
            {results.map((item) => {
              return (
                <div>
                  <img
                    src={item.picture.large}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <p>
                    {item.name.first}
                  </p>
                  <span style={{backgroundColor: "yellow"}}> {item.phone}</span>
                </div>
              );
            })}
          </div>
        </div>
     
      <div className="justify-start mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default Teams;
