import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <main>
      <div className="flexCenter flex-col py-4 gap-5">
        <span className="flexCenter text-4xl font-semibold text-gray-30">Our Services</span>
        <div className=" padding-container max-container  flex flex-row">
          <div className="bg-white flexCenter flex-wrap space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="max-w-2xl px-4 py-16 border rounded-xl shadow-md sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:w-[45%]">
              <h2 className="text-2xl font-bold tracking-tight items-center underline text-gray-700">
                Custom Product
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 max-container w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 lg:w-96">
                    <img
                      src="/c-semudakopi.PNG"
                      alt="Custom Product"
                      className="h-full w-full object-cover object-center lg:h-full"
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">Description</h3>
                      <p className="mt-1 text-sm text-gray-500">1. Pre order</p>
                      <p className="mt-1 text-sm text-gray-500">
                        2. Process 3-4 weeks
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        3. Free design cups
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        4. Min order 12pcs/type
                      </p>
                    </div>
                  </div>
                  <div className="ml-8 mt-5 text-xs text-gray-500">
                    <p>More Design</p>
                  </div>

                  <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Link href="/custom.pdf">
                      <Button
                        type="button"
                        title="Catalogue"
                        variant="btn_dark_green_outline"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl px-4 py-16 border rounded-xl shadow-md sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:w-[45%]">
              <h2 className="text-2xl font-bold tracking-tight items-center underline text-gray-700">
                Ready Stock
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 lg:w-96">
                    <img
                      src="/c-semudakopi.PNG"
                      alt="Custom Product"
                      className="h-full w-full object-cover object-center lg:h-full"
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">Description</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        1. Avalaible in store
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        2. Add 6.000 for logo
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        3. Free design cups (if ready)
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        4. No min order
                      </p>
                    </div>
                  </div>
                  <div className="ml-8 mt-5 text-xs text-gray-500">
                    <p>More Design</p>
                  </div>

                  <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Link href="/ready.pdf">
                      <Button
                        type="button"
                        title="Catalogue"
                        variant="btn_dark_green_outline"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
