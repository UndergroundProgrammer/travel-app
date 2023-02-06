import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Create() {
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full text-slate-800 ">
        <div className="font-medium flex gap-4">
          <Link href={"/activitys"}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </Link>
          <span>New Trip</span>
        </div>
        <div className="my-12">
          <form onSubmit={(e) => handleLogin(e)}>
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="title"
                name="title"
                className={`input-field`}
                placeholder="Trip Title"
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="tripDates" className="text-sm">
              Trip Date
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="tripDates"
                name="tripDates"
                className={`input-field`}
                placeholder="Timeframe"
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="location" className="text-sm">
              Location
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="location"
                name="location"
                className={`input-field`}
                placeholder="Enter City/Region"
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
                className={`input-field`}
                placeholder="Describe your text with max 1000 characters"
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <label htmlFor="tripType" className="text-sm">
              Trip Type
            </label>
            <div className="relative mb-6">
              <select
                id="tripType"
                name="tripType"
                className={`input-field`}
                required
              >
                <option value="vacation">Vacation</option>
                <option value="business_trip">Buiness Trip</option>
              </select>
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>

            <div className="flex justify-between gap-3">
              <button
                className={`btn-primary mb-6 inline-flex gap-2 items-center justify-center`}
              >
                <ArrowUpIcon className="w-6 h-6 stroke-2 stroke-slate-700" />
                <span>Post</span>
              </button>
              <button
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
