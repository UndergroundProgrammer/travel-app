import {
  ArrowSmallLeftIcon,
  ChevronDoubleUpIcon,
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function TripmateDetails() {
  const router = useRouter();
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full relative text-slate-800">
        <div className="font-medium flex gap-4">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
          <span>About tripmate</span>
        </div>

        <div className="my-5">
          <div className=" flex gap-2 items-center">
            <Image
              src={"/images/hunza.jpg"}
              width={80}
              height={80}
              className=" self-start object-cover rounded-full aspect-square"
              alt="Trip Mate"
            />
            <div>
              <h4 className="text-xl font-bold">{"Hi! I'm Jenny"}</h4>
              <h4>Hamburg, Germany</h4>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-lg font-bold my-2">About me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum
            ad itaque praesentium quod, expedita illum? Quas odio corrupti quasi
            eveniet neque itaque ratione sunt molestias. Architecto earum velit
            explicabo.
          </p>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-bold my-2">Facts</h3>
          <div className="flex gap-2">
            {/* Fact */}
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <GlobeEuropeAfricaIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>10 countries visited</span>
            </div>
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <ChevronDoubleUpIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>3 Active Trips</span>
            </div>

            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <MapPinIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>Hamburg, Germany</span>
            </div>
          </div>
        </div>
        <div className="my-5 mb-20">
          <h3 className="text-lg font-bold my-2">Follow me</h3>
          <span className="text-gray-600">@jennythetraveler</span>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
