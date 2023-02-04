import {
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>tripFriend</title>
        <meta name="description" content="z" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container max-w-md mx-auto flex items-center overflow-hidden text-slate-800">
          <div className="w-full">
            {/* Hero Section */}

            <div className="py-2 hero-background flex flex-col gap-20">
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

            <div>
              {/* Popular Destinations */}

              <div className="relative m-5">
                <h3 className="text-lg font-bold text-slate-600 my-2">
                  Popular Destinations
                </h3>
                <div className="max-w-full flex gap-2 justify-between overflow-x-auto">
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

              {/* Latest Posts */}
              <div className="relative m-5 mb-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-600 my-2">
                    Latest Posts
                  </h3>
                  <button className="text-blue-500 text-sm font-medium">
                    See All
                  </button>
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="relative min-w-[130px] rounded-md shadow-md">
                    <Image
                      src={"/images/hunza.jpg"}
                      alt="Place"
                      width={100}
                      height={100}
                      className="rounded-t-md w-full h-20 object-cover shadow-md"
                    />
                    <div className="flex justify-between mx-1">
                      <div className="flex items-center my-1">
                        <MapPinIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">Iceland</span>
                      </div>
                      <div className="flex items-center my-1">
                        <ClockIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">02.02.2023</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-600 m-2">
                        Sking Adventure
                      </h2>
                    </div>
                  </div>
                  <div className="relative min-w-[130px] rounded-md shadow-md">
                    <Image
                      src={"/images/hunza.jpg"}
                      alt="Place"
                      width={100}
                      height={100}
                      className="rounded-t-md w-full h-20 object-cover shadow-md"
                    />
                    <div className="flex justify-between mx-1">
                      <div className="flex items-center my-1">
                        <MapPinIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">Iceland</span>
                      </div>
                      <div className="flex items-center my-1">
                        <ClockIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">02.02.2023</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-600 m-2">
                        Sking Adventure
                      </h2>
                    </div>
                  </div>
                  <div className="relative min-w-[130px] rounded-md shadow-md">
                    <Image
                      src={"/images/hunza.jpg"}
                      alt="Place"
                      width={100}
                      height={100}
                      className="rounded-t-md w-full h-20 object-cover shadow-md"
                    />
                    <div className="flex justify-between mx-1">
                      <div className="flex items-center my-1">
                        <MapPinIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">Iceland</span>
                      </div>
                      <div className="flex items-center my-1">
                        <ClockIcon className="w-4 h-4 mr-1 fill-slate-700" />
                        <span className="text-xs">02.02.2023</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-600 m-2">
                        Sking Adventure
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Nav */}
              <div className="container max-w-md fixed w-full p-5 text-slate-600 shadow-md bottom-0 bg-white">
                <nav className="flex justify-between items-center text-center">
                  <Link href={"/"}>
                    <HomeIcon className="w-6 h-6 mx-auto fill-slate-600" />
                    <span className="font-medium text-sm">Home</span>
                  </Link>
                  <Link href={"/activitys"}>
                    <MapIcon className="w-6 h-6  mx-auto fill-slate-600" />
                    <span className="font-medium text-sm">Activitys</span>
                  </Link>
                  <Link href={"/"}>
                    <PlusIcon className="w-8 h-8  mx-auto stroke-[3] stroke-blue-600 " />
                  </Link>
                  <Link href={"/chat"}>
                    <EnvelopeIcon className="w-6 h-6  mx-auto fill-slate-600" />
                    <span className="font-medium text-sm">Messages</span>
                  </Link>
                  <Link href={"/profile"}>
                    <UserIcon className="w-6 h-6  mx-auto fill-slate-600" />
                    <span className="font-medium text-sm">Profile</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
