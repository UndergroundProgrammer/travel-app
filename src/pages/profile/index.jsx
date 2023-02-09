import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowSmallLeftIcon,
  KeyIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Chip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const router = useRouter();
  return (
    <>
      <div className="container max-w-md mx-auto flex items-center">
        <div className="m-5 my-20 w-full relative text-slate-800">
          <div className="font-medium flex gap-4">
            <button onClick={() => router.back()}>
              <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
            </button>
            <span>Edit Profile</span>
          </div>
          <div className="w-full rounded-lg p-8 mt-8 bg-blue-600 text-center">
            <Image
              src={"/images/fuji.jpg"}
              width={100}
              height={100}
              alt="User Display Picture"
              className="rounded-full object-cover mx-auto aspect-square"
            />
            <div>
              <h4 className="font-medium text-lg text-white">travel_waldo01</h4>
            </div>
            <div className="flex justify-center">
              <MapPinIcon className="w-4 h-4 fill-white" />
              <span className="text-slate-300  text-xs">Berlin, Germany</span>
            </div>
            <label
              htmlFor="displayPicture"
              className="inline-block p-5 rounded-full bg-blue-600"
            >
              <span className="underline underline-offset-2 text-white">
                Change Picture
              </span>
              <input
                type="file"
                name="displayPicture"
                id="displayPicture"
                className="hidden"
              />
            </label>
          </div>
          {/* Basic Information */}
          <div className="relative my-5">
            <h3 className="text-lg font-bold text-slate-600 my-2">
              Basic Information
            </h3>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=text&name=name"}>
                <span className="text-xs">Name</span>
                <div className="flex items-center justify-between border-b border-b-gray-400">
                  <p className="py-4">Jenny</p>
                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=text&name=about"}>
                <span className="text-xs">Bio</span>
                <div className="flex items-center justify-between border-b border-b-gray-400">
                  <p className="py-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita voluptatum eaque aperiam, aliquid id placeat harum
                    autem similique distinctio omnis.
                  </p>
                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=text&name=location"}>
                <span className="text-xs">Location</span>
                <div className="flex items-center justify-between border-b border-b-gray-400">
                  <p className="py-4">Hamburg, Germany</p>
                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
            <h3 className="text-lg font-bold text-slate-600 my-2">Security</h3>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=password&name=password"}>
                <span className="text-xs">Password</span>
                <div className="flex items-center justify-between border-b border-b-gray-400">
                  <p className="py-4">Change Password</p>
                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
            <h3 className="text-lg font-bold text-slate-600 my-2">
              My Travels
            </h3>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=select&name=visited"}>
                <span className="text-xs">{"Countries I've visited"}</span>
                <div className="flex flex-wrap gap-1 items-center text-sm justify-between py-2 border-b border-b-gray-400">
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Spain
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    New Zealand
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Austria
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    UAE
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    USA
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Brazil
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Portugal
                  </span>
                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
            <div className="relative my-5">
              <Link href={"/profile/edit?type=select&name=toVisit"}>
                <span className="text-xs">{"Countries I want to visit"}</span>
                <div className="flex flex-wrap gap-1 items-center text-sm justify-between py-2 border-b border-b-gray-400">
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Egypt
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Sweden
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Australia
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Papua New Guinea
                  </span>
                  <span className="rounded-full py-1 px-2 bg-blue-100 text-blue-800">
                    Saudi Arabia
                  </span>

                  <ChevronRightIcon className="w-4 h-4 stroke-blue-700" />
                </div>
              </Link>
            </div>
          </div>
          <button
            className={`btn-primary mb-6 bg-red-600 text-white  inline-flex gap-2 items-center justify-center`}
          >
            <KeyIcon className="w-6 h-6 stroke-2 fill-white" />
            <span>Logout</span>
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
}
