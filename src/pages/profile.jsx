import { ArrowSmallLeftIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <div className="container max-w-md mx-auto flex items-center">
        <div className="m-5 mt-20 w-full relative text-slate-800">
          <div className="font-medium flex gap-4">
            <Link href={"/"}>
              <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
            </Link>
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
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}
