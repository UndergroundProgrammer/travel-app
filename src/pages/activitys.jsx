import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Activitys() {
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full  relative text-slate-800">
        <div className="font-medium text-left mb-6">
          <span>My Trips</span>
        </div>
        {/* No Activity */}
        <div className=" text-center">
          <Image
            src={"/firewall.svg"}
            width={100}
            height={100}
            alt="Activitys"
            className="mx-auto"
          />
          <h2 className="font-bold my-4">
            {"You don't have any activity yet"}
          </h2>
          <h2>{"Your created trips will be displayed Here"}</h2>
          <Link
            href={"/post/create"}
            className={`block mx-auto w-4/5 rounded-full p-3 font-medium text-lg my-6  pointer-events-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none text-white`}
          >
            Create a Trip
          </Link>
        </div>
        {/* Activitys List */}
        <div className="hidden">
          <Link href="/">
            <div className="flex items-center justify-between gap-2 shadow-lg p-2">
              <div className="self-start flex gap-2">
                <Image
                  src={"/images/hunza.jpg"}
                  width={100}
                  height={50}
                  className="rounded-lg self-start object-cover"
                  alt="Post Image"
                />
                <div>
                  <h6 className="text-gray-400 text-sm">02.Feb 2023</h6>
                  <h4 className="text-base my-1">Enjoy the sun</h4>
                  <span className="text-xs p-1 rounded-sm font-medium bg-green-100 text-green-800">
                    Post online
                  </span>
                </div>
              </div>
              <div className="">
                <ChevronRightIcon
                  className="w-4 h-4 stroke-2
              "
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
