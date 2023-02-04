import {
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container max-w-md mx-auto flex items-center overflow-hidden text-slate-800">
        <div className="w-full">
          {/* Hero Section */}

          <div className="py-2 hero-background flex flex-col gap-24">
            <h1 className="m-5 text-3xl text-white font-bold w-full relative ">
              tripFriend.
            </h1>
            {/* Search Box */}
            <div className="relative m-5">
              <div className="absolute inset-y-0 left-0 flex items-center ml-4">
                <MagnifyingGlassIcon className="w-5 h-5 fill-slate-400" />
              </div>
              <input
                type="text"
                id="search"
                name="search"
                className={`bg-slate-50 border text-gray-900 rounded-full  block w-full pl-10 p-3 shadow placeholder:text-base placeholder:text-gray-500 focus:outline-none`}
                placeholder="Search for trip"
              />
            </div>
          </div>

          {/* Popular Destinations */}

          <div className="relative m-5">
            <h3 className="text-lg font-bold text-slate-700">
              Popular Destinations
            </h3>
            <div className="max-w-full flex gap-2 justify-between overflow-x-auto">
              <div className=" min-w-[150px]">
                <Image
                  src={"/images/antarctica.jpg"}
                  alt="Place"
                  width={170}
                  height={150}
                  className="rounded-md shadow-md"
                />
                <div className="p-3 mx-2 rounded-md shadow-md  -translate-y-4 bg-white border text-center">
                  <span>Antarctica</span>
                </div>
              </div>
              <div className=" min-w-[150px]">
                <Image
                  src={"/images/uppsala.jpg"}
                  alt="Place"
                  width={170}
                  height={150}
                  className="rounded-md shadow-md"
                />
                <div className="p-3 mx-2 rounded-md shadow-md  -translate-y-4 bg-white border text-center">
                  <span>Uppsala</span>
                </div>
              </div>
              <div className=" min-w-[150px]">
                <Image
                  src={"/images/fuji.jpg"}
                  alt="Place"
                  width={170}
                  height={150}
                  className="rounded-md shadow-md"
                />
                <div className="p-3 mx-2 rounded-md shadow-md  -translate-y-4 bg-white border text-center">
                  <span>Fuji</span>
                </div>
              </div>
              <div className=" min-w-[150px]">
                <Image
                  src={"/images/hunza.jpg"}
                  alt="Place"
                  width={170}
                  height={150}
                  className="rounded-md shadow-md"
                />
                <div className="p-3 mx-2 rounded-md shadow-md  -translate-y-4 bg-white border text-center">
                  <span>Hunza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
