import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsVerticalIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../components/DateFormat";
import Navbar from "../components/Navbar";
import { Checkbox, Option, Select } from "@material-tailwind/react";

import { Fragment, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { calculateAge } from "../components/AgeCalculate";
import { searchPostsRequest } from "@/redux/userDashboard/userDashboard.actions";

export default function SearchResults() {
  const result = useSelector(({ users }) => users.searchPosts);
  const router = useRouter();
  const [filteredPosts, setFilteredPosts] = useState();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [experience, setExperience] = useState([]);
  const [isGirlOnly, setIsGirlOnly] = useState(false);
  const [age, setAge] = useState("0-200");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleFindTrip = () => {
    // Find Trip Function goes here...
    setPosts([]);
    const payload = {
      startDate: new Date(tripDate.startDate),
      endDate: new Date(tripDate.endDate),
      location: location,
    };
    setLoading(true);
    dispatch(
      searchPostsRequest(payload, () => {
        setLoading(false);
      })
    );
    setOpenSearchModal(false);
  };
  const handleGirlOnly = (e) => {
    const { name, checked } = e.target;

    if (checked && name == "girlOnly") {
      setIsGirlOnly(true);
    } else {
      setIsGirlOnly(false);
    }
  };
  const handleExperience = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setExperience((prev) => [...prev, name]);
    } else {
      setExperience(experience.filter((item) => item !== name));
    }
  };
  const showFilter = () => {
    console.log(experience, age, isGirlOnly);

    const minAge = Number.parseInt(age.split("-")[0]);
    const maxAge = Number.parseInt(age.split("-")[1]);

    const filtered = filteredPosts.filter((post) => {
      const age = calculateAge(new Date(post.userId.birthDate));
      const tripType = post.tripType;
      const isGirlOnly = post.isGirlOnly;
      console.log(age, tripType, isGirlOnly);
      const ageFilter = age >= minAge && age <= maxAge;
      const tripTypeFilter = experience.includes(tripType);
      const isGirlOnlyFilter = isGirlOnly;
      console.log(ageFilter, isGirlOnlyFilter, tripTypeFilter);
      // Return true if all filters pass, otherwise false
      return ageFilter && tripTypeFilter && isGirlOnlyFilter;
    });
    setPosts(filtered);
    console.log(filtered);
    closeModal();
  };

  const clearFilter = () => {
    setPosts(filteredPosts);
    setExperience([]);
    setAge("0-200");
    setIsGirlOnly(false);
    closeModal();
  };
  const handleNav = (post) => {
    localStorage.setItem("tripDetail", JSON.stringify(post));
    router.push("/tripdetails");
  };

  let [isOpen, setIsOpen] = useState(false);
  let [openSearchModal, setOpenSearchModal] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [tripDate, setTripDate] = useState({
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 1),
  });
  const handleDateChange = (newDate) => {
    setTripDate(newDate);
  };
  useEffect(() => {
    if (result?.results?.length > 0) {
      setLoading(false);
      setPosts(result.results);
      setFilteredPosts(result.results);
    }
    setLoading(false);
  }, [result]);
  return (
    <div className="container max-w-md mx-auto flex items-center overflow-hidden text-slate-800">
      <div className="w-full relative">
        <div className="relative m-5">
          <div className="absolute inset-y-0 left-0 flex items-center ml-4">
            <button>
              <MagnifyingGlassIcon className="w-5 h-5 fill-slate-400" />
            </button>
          </div>
          <button
            onClick={() => setOpenSearchModal(true)}
            className={`bg-slate-50 border text-gray-900 rounded-full text-start cursor-text  block w-full pl-10 p-3 shadow focus:outline-none`}
          >
            Search for trip
          </button>
          <button
            type="button"
            onClick={openModal}
            className="absolute right-5 top-3"
          >
            <AdjustmentsVerticalIcon className="w-6 h-6 fill-blue-600" />
          </button>
        </div>
        {/* Filter Overlay */}

        <div className="relative m-5 ">
          {posts?.length === 0 && !loading ? (
            <div className="w-full text-center h-48 self-center text-xl">
              No posts found!
            </div>
          ) : (
            <></>
          )}
          <div className="w-full grid grid-cols-2 gap-2">
            {loading &&
              new Array(10).fill(0).map((key) => (
                <div
                  key={key}
                  className="relative min-w-[130px] rounded-md shadow-md"
                >
                  <div className="w-full h-20 rounded-t-md bg-gray-200 animate-pulse"></div>
                  <div className="flex justify-between mx-1 overflow-hidden">
                    <div className="flex items-center my-1">
                      <MapPinIcon className="w-4 h-4 mr-2 fill-slate-700" />
                      <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                    <div className="flex items-center my-1">
                      <ClockIcon className="w-4 h-4 mr-2 fill-slate-700" />
                      <div className="w-28 h-4 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-600 m-2">
                      <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    </h2>
                  </div>
                </div>
              ))}
            {posts?.length !== 0 &&
              posts?.map((post, key) => (
                <div
                  key={key}
                  className="relative min-w-[130px] rounded-md shadow-md"
                  onClick={() => handleNav(post)}
                >
                  <Image
                    src={post.pictures[0]}
                    alt="Place"
                    width={100}
                    height={100}
                    className="rounded-t-md w-full h-20 object-cover shadow-md"
                  />
                  <div className="flex justify-between mx-1">
                    <div className="flex items-center my-1">
                      <MapPinIcon className="w-4 h-4 mr-1 fill-slate-700" />

                      <span className="text-xs">{post.location}</span>
                    </div>
                    <div className="flex items-center my-1">
                      <ClockIcon className="w-4 h-4 mr-1 fill-slate-700" />
                      <span className="text-xs">
                        {formatDate(post.startDate)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-600 m-2">
                      {post.title}
                    </h2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Navbar />
      {/* Filter Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed mx-auto inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="my-2">
                    <h4 className="font-bold text-lg mt-10 mb-4">Filter</h4>
                    <h5 className="font-bold mb-4">Experience</h5>
                    <div className="my-2">
                      <label htmlFor="backpacking" className="filter-label">
                        <input
                          type="checkbox"
                          checked={experience.includes("Backpacking")}
                          className="hidden"
                          name="Backpacking"
                          id="backpacking"
                          onChange={handleExperience}
                        />
                        <span className="inline-block py-2 px-4 m-1 rounded-full bg-blue-100 text-blue-700">
                          Backpacking
                        </span>
                      </label>
                      <label htmlFor="vocation" className="filter-label">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={experience.includes("Vocation")}
                          name="Vocation"
                          id="vocation"
                          onChange={handleExperience}
                        />
                        <span className="inline-block py-2 px-4 m-1 rounded-full bg-blue-100 text-blue-700">
                          Vocation
                        </span>
                      </label>
                      <label htmlFor="Work&Travel" className="filter-label">
                        <input
                          type="checkbox"
                          className="hidden"
                          name="Work&Travel"
                          checked={experience.includes("Work&Travel")}
                          id="Work&Travel"
                          onChange={handleExperience}
                        />
                        <span className="inline-block py-2 px-4 m-1 rounded-full bg-blue-100 text-blue-700">
                          Work & Travel
                        </span>
                      </label>
                      <label htmlFor="remotework" className="filter-label">
                        <input
                          type="checkbox"
                          className="hidden"
                          name="Remotework"
                          checked={experience.includes("Remotework")}
                          id="remotework"
                          onChange={handleExperience}
                        />
                        <span className="inline-block py-2 px-4 m-1 rounded-full bg-blue-100 text-blue-700">
                          Remotework
                        </span>
                      </label>
                      <label htmlFor="roadtrip" className="filter-label">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={experience.includes("Roadtrip")}
                          name="Roadtrip"
                          id="roadtrip"
                          onChange={handleExperience}
                        />
                        <span className="inline-block py-2 px-4 m-1 rounded-full bg-blue-100 text-blue-700">
                          Roadtrip
                        </span>
                      </label>
                    </div>
                    <div className="my-2">
                      <h5 className="font-bold mt-10 mb-4">Your Trip Mate</h5>
                      <div className="flex justify-between">
                        <div className="text-sm">
                          <h6 className="font-medium">Female</h6>
                          <h6 className="text-gray-600">Girls Only</h6>
                        </div>
                        <div>
                          <Checkbox
                            name="girlOnly"
                            checked={isGirlOnly}
                            onChange={handleGirlOnly}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm">
                          <h6 className="font-medium">Male</h6>
                          <h6 className="text-gray-600">
                            Show also trips for male
                          </h6>
                        </div>
                        <div>
                          <Checkbox
                            name="maleTrips"
                            onChange={handleGirlOnly}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm">
                          <h6 className="font-medium">Age</h6>
                          <h6 className="text-gray-600">Min - Max</h6>
                        </div>
                        <div>
                          <select
                            name="ageGroup"
                            id="ageGroup"
                            className="rounded-md p-2 border text-gray-600"
                            onChange={(e) => setAge(e.target.value)}
                          >
                            <option value="12-25">12 - 25</option>
                            <option value="26-40"> 26 - 40</option>
                            <option value="41-50"> 41 - 50</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-2 border-b"></div>

                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center shadow rounded-full border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={clearFilter}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center shadow rounded-full border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={showFilter}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Search Dialog */}
      <Transition appear show={openSearchModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed mx-auto inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Find Trip
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="relative mb-3 pb-3 border-b border-b-gray-300">
                      <div className="absolute inset-y-0  -top-2 left-0 flex items-center ml-4">
                        <MagnifyingGlassIcon className="w-5 h-5 fill-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className={`bg-slate-50 border text-gray-900 rounded-full text-start cursor-text  block w-full pl-10 p-3 shadow focus:outline-none`}
                        placeholder="Search for trip"
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />

                      {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
                    </div>
                    <div className="relative mb-3 pb-3 border-b border-b-gray-300">
                      <Datepicker
                        primaryColor={"blue"}
                        value={tripDate}
                        useRange={false}
                        separator={"to"}
                        placeholder="timeframe"
                        inputClassName={"dark:bg-slate-50 dark:text-slate-800"}
                        displayFormat={"DD.MM.YYYY"}
                        onChange={handleDateChange}
                      />
                      {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center shadow rounded-full border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setOpenSearchModal(false)}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center shadow rounded-full border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleFindTrip}
                    >
                      Find Trip
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
