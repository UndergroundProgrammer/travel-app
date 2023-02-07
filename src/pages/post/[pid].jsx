import { distDir } from "@/next.config";
import { Switch } from "@headlessui/react";
import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowSmallLeftIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
export default function PID() {
  const [tripData, setTripData] = useState({});
  const [girlsOnly, setGirlsOnly] = useState(false);
  const router = useRouter();
  const [tripDate, setTripDate] = useState({
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 1),
  });
  const handleDateChange = (newDate) => {
    setTripDate(newDate);
  };
  const handleTripData = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setTripData((prev) => ({ ...prev, tripGallery: e.target.files }));
      return;
    }
    setTripData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    setTripData((prev) => ({
      ...prev,
      girlsOnly: girlsOnly,
      tripDates: tripDate,
    }));
  };
  console.log(tripData);

  const handleDeletePost = (e) => {
    e.preventDefault();
    setTripData({});
    setGirlsOnly(false);
    setTripDate({
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
    });
    router.push("/activitys");
  };

  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full text-slate-800 ">
        <div className="font-medium flex gap-4">
          <Link href={"/activitys"}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </Link>
          <span>Edit Trip</span>
        </div>
        <div className="my-12">
          <form onSubmit={handleTripSubmit}>
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <div className="relative mb-3 pb-3 border-b border-b-gray-300">
              <input
                type="text"
                id="title"
                name="title"
                className={`input-field`}
                placeholder="Trip Title"
                onChange={handleTripData}
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="tripDates" className="text-sm">
              Trip Date
            </label>
            <div className="relative mb-3 pb-3 border-b border-b-gray-300">
              <Datepicker
                primaryColor={"blue"}
                value={tripDate}
                startFrom={new Date(Date.now())}
                minDate={new Date(Date.now())}
                separator={"to"}
                placeholder="timeframe"
                inputClassName={"dark:bg-slate-50 dark:text-slate-800"}
                displayFormat={"DD.MM.YYYY"}
                onChange={handleDateChange}
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="location" className="text-sm">
              Location
            </label>
            <div className="relative mb-3 pb-3 border-b border-b-gray-300">
              <input
                type="text"
                id="location"
                name="location"
                className={`input-field`}
                placeholder="Enter City/Region"
                onChange={handleTripData}
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="details" className="text-sm">
              Details
            </label>
            <div className="relative mb-6">
              <textarea
                id="details"
                name="details"
                className={`input-field resize-none`}
                placeholder="Describe your text with max 1000 characters"
                onChange={handleTripData}
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="stay" className="text-sm">
              Preferred Stay
            </label>
            <div
              className="relative mt-2 mb-3 pb-3 border-b border-b-gray-300"
              id="stay"
            >
              <label htmlFor="hotel" className="styled-label">
                <input
                  type="radio"
                  name="stay"
                  id="hotel"
                  value={"hotel"}
                  className="hidden"
                  onChange={handleTripData}
                />
                <span>Hotel</span>
              </label>
              <label htmlFor="hostel" className="styled-label">
                <input
                  type="radio"
                  name="stay"
                  value={"hostel"}
                  id="hostel"
                  className="hidden"
                  onChange={handleTripData}
                />
                <span>Hostel</span>
              </label>
              <label htmlFor="bnb" className="styled-label">
                <input
                  type="radio"
                  name="stay"
                  id="bnb"
                  value={"bnb"}
                  className="hidden"
                  onChange={handleTripData}
                />
                <span>BnB</span>
              </label>
            </div>

            <label htmlFor="tripType" className="text-sm">
              Trip Type
            </label>
            <div className="relative mb-3 pb-3 border-b border-b-gray-300">
              <select
                id="tripType"
                name="tripType"
                className={`input-field`}
                onChange={handleTripData}
                required
              >
                <option value="vacation">Vacation</option>
                <option value="business_trip">Buiness Trip</option>
              </select>
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>

            <div className="relative mb-3 pb-3 border-b border-b-gray-300 flex items-center justify-center gap-4 font-medium">
              <span>
                {tripData && tripData?.tripGallery?.length > 0
                  ? `${tripData?.tripGallery?.length} Photos Selected`
                  : `Select upto 5 Photos`}
              </span>
              <label
                htmlFor="tripGallery"
                className="inline-block p-5 rounded-full bg-blue-600"
              >
                <CloudArrowUpIcon className="w-8 h-8 fill-white" />
                <input
                  type="file"
                  name="tripGallery"
                  id="tripGallery"
                  multiple
                  className="hidden"
                  onChange={handleTripData}
                />
              </label>
            </div>
            <div className="flex mb-3 pb-3 justify-between border-b border-b-gray-300">
              <label htmlFor="girlsOnly">Girls only trip</label>
              <Switch
                checked={girlsOnly}
                onChange={setGirlsOnly}
                className={`${
                  girlsOnly ? "bg-blue-700" : "bg-gray-400"
                } relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    girlsOnly ? "translate-x-8" : "translate-x-0"
                  } pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="flex justify-between gap-3">
              <button
                className={`btn-primary mb-6 inline-flex gap-2 items-center justify-center`}
              >
                <ArrowUpIcon className="w-6 h-6 stroke-2 stroke-slate-700" />
                <span>Post</span>
              </button>
              <button
                onClick={handleDeletePost}
                className={`btn-primary mb-6 bg-red-600 text-white  inline-flex gap-2 items-center justify-center`}
              >
                <XMarkIcon className="w-6 h-6 stroke-2 stroke-white" />
                <span>Delete</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
