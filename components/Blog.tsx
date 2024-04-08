import Link from "next/link";

const Blog = async () => {
  return (
    <div className="padding-container max-container relative px-6 pt-10 pb-20 lg:px-8 lg:pt-12 lg:pb-20">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Activity
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            This our activity
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-60 w-full object-cover"
                src="/potteryclass.PNG"
                alt="Pottery Class Image"
              />
            </div>
            <Link href="/blog/potery-class">
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="hover:underline">Pottery Class</span>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Boost your conversion rate
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum. Architecto
                      accusantium praesentium eius, ut atque fuga culpa,
                      similique sequi cum eos quis dolorum. similique sequi cum
                      eos quis dolorum. Architecto accusantium praesentium eius,
                      ut atque fuga culpa, similique sequi cum eos quis dolorum
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-60 w-full object-cover"
                src="/workshop.PNG"
                alt="Workshop Image"
              />
            </div>
            <Link href="/blog/workshop">
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="hover:underline">Workshop</span>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Let's see our production process
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum. Architecto
                      accusantium praesentium eius, ut atque fuga culpa,
                      similique sequi cum eos quis dolorum. similique sequi cum
                      eos quis dolorum. Architecto accusantium praesentium eius,
                      ut atque fuga culpa, similique sequi cum eos quis dolorum
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center"></div>
              </div>
            </Link>
          </div>

          <Link href="/blog/store">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-60 w-full object-cover"
                  src="/store.PNG"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="hover:underline">Store</span>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      So many adorable cups in our store
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum. Architecto
                      accusantium praesentium eius, ut atque fuga culpa,
                      similique sequi cum eos quis dolorum. similique sequi cum
                      eos quis dolorum. Architecto accusantium praesentium eius,
                      ut atque fuga culpa, similique sequi cum eos quis dolorum
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
