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
                      Education workshop at UGM
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-6">
                      Unleash your creativity and dive into the timeless art of
                      pottery at our educational workshop. Designed for
                      enthusiasts of all skill levels, our immersive experience
                      offers a hands-on exploration of clay shaping techniques
                      guided by seasoned artisans.
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
                src="/workshop-2.PNG"
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
                      Immerse yourself in the enchanting world of pottery at our
                      workshop, where clay becomes a canvas for boundless
                      creativity. Led by experienced artisans, this hands-on
                      experience invites participants to explore the intricate
                      techniques of molding, shaping, and glazing.
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
                      The Pottery Store of Enchanting Cups
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-6">
                      Step into our pottery store, a delightful haven where
                      craftsmanship meets charm. Nestled among
                      shelves adorned with handcrafted wonders, each cup exudes
                      its own unique personality, inviting you to explore the
                      intricate details that make them
                      truly special.
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
