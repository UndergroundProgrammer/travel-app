import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {
  ArrowSmallLeftIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { formatDate } from "../components/DateFormat";
import { calculateAge } from "../components/AgeCalculate";

export default function PostDetails() {
  const [isFavourite, setIsFavourite] = useState(false);
  const [tripDetail, setTripDetail] = useState({});
  const [tripMate, setTripMate] = useState({});
  const router = useRouter();
  useEffect(() => {
    const trip = JSON.parse(localStorage.getItem("tripDetail"));
    setTripDetail(trip);
    setTripMate(trip.userId);
    localStorage.setItem("tripMate", JSON.stringify(trip.userId));
  }, []);
  return (
    <div className="container max-w-md mx-auto overflow-hidden text-slate-800">
      {/* Photos Swiper */}
      <div className="w-full relative">
        <div className="font-medium flex gap-4 text-sm absolute bg-white p-2 z-10 top-10 left-5 rounded-lg">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
        </div>
        <Swiper
          autoHeight
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {tripDetail?.pictures?.map((data, key) => (
            <SwiperSlide key={key}>
              <Image
                src={data}
                alt="Place"
                width={170}
                height={150}
                className=" shadow-md w-full h-72 aspect-square object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Trip Shallow Info */}
      <div className="m-5 text-slate-800 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold my-2">{tripDetail?.title}</h2>
            <div className="flex justify-between gap-8">
              <div className="inline-flex items-center my-1">
                <MapPinIcon className="w-4 h-4 mr-2 fill-slate-700" />
                <span className="text-xs">{tripDetail?.location}</span>
              </div>
              <div className="inline-flex items-center my-1">
                <ClockIcon className="w-4 h-4 mr-2 fill-slate-700" />
                <span className="text-xs">
                  {formatDate(tripDetail.startDate)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <HeartIcon
              className={`h-6 w-6 ${
                isFavourite ? "fill-red-800" : "fill-slate-800"
              }`}
            />
          </div>
        </div>
        {/* About Trip */}
        <div className="my-5">
          <h3 className="text-lg font-bold my-2">About the trip</h3>
          <p>{tripDetail?.description}</p>
        </div>
        {/* Facts */}
        <div className="my-5">
          <h3 className="text-lg font-bold my-2">Facts</h3>
          <div className="flex gap-2">
            {/* Fact */}
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <ClockIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>{`${formatDate(tripDetail?.startDate)} to ${formatDate(
                tripDetail?.endDate
              )}`}</span>
            </div>
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <BuildingOfficeIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>Stay in {tripDetail?.preferedStay}</span>
            </div>

            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <CheckBadgeIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>{tripDetail?.tripType}</span>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-bold my-2">About tripmate</h3>
          <Link href={"/tripmate"}>
            <div className=" flex gap-2">
              <Image
                src={tripMate?.photoUrl}
                width={80}
                height={80}
                className=" self-start object-cover rounded-full aspect-square"
                alt="Trip Mate"
              />
              <div>
                <h4 className="text-xl font-bold">{tripMate?.username}</h4>
                <h4>{calculateAge(new Date(tripMate.birthDate))} years old</h4>
                <h4>{tripMate?.country}</h4>
              </div>
            </div>
          </Link>
        </div>

        <Link
          href={"/chat/chatId"}
          className={`block mx-auto w-3/5 text-center rounded-full p-3 font-medium text-lg mt-8 mb-24  pointer-events-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none text-white`}
        >
          Message {tripMate.username}
        </Link>
      </div>
      <Navbar />
    </div>
  );
}
