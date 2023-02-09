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
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function PostDetails() {
  const [isFavourite, setIsFavourite] = useState(false);
  const router = useRouter();
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
          <SwiperSlide>
            {" "}
            <Image
              src={"/images/uppsala.jpg"}
              alt="Place"
              width={170}
              height={150}
              className=" shadow-md w-full h-72 aspect-square object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/images/antarctica.jpg"}
              alt="Place"
              width={170}
              height={150}
              className=" shadow-md w-full h-72 aspect-square object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/images/fuji.jpg"}
              alt="Place"
              width={170}
              height={150}
              className=" shadow-md w-full h-72 aspect-square object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/images/hunza.jpg"}
              alt="Place"
              width={170}
              height={150}
              className=" shadow-md w-full h-72 aspect-square object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Trip Shallow Info */}
      <div className="m-5 text-slate-800 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold my-2">Enjoy the sun</h2>
            <div className="flex justify-between gap-8">
              <div className="inline-flex items-center my-1">
                <MapPinIcon className="w-4 h-4 mr-2 fill-slate-700" />
                <span className="text-xs">Mallorca, Spain</span>
              </div>
              <div className="inline-flex items-center my-1">
                <ClockIcon className="w-4 h-4 mr-2 fill-slate-700" />
                <span className="text-xs">02.02.2023</span>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum
            ad itaque praesentium quod, expedita illum? Quas odio corrupti quasi
            eveniet neque itaque ratione sunt molestias. Architecto earum velit
            explicabo.
          </p>
        </div>
        {/* Facts */}
        <div className="my-5">
          <h3 className="text-lg font-bold my-2">Facts</h3>
          <div className="flex gap-2">
            {/* Fact */}
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <ClockIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>08.02.2023 to 09.02.2023</span>
            </div>
            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <BuildingOfficeIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>Stay in Hotel</span>
            </div>

            <div className="p-4 w-1/3 text-sm rounded-lg text-center bg-slate-200">
              <CheckBadgeIcon className="h-8 w-8 fill-slate-800 mx-auto" />
              <span>Vacation</span>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-bold my-2">About tripmate</h3>
          <Link href={"/tripmate"}>
            <div className=" flex gap-2">
              <Image
                src={"/images/hunza.jpg"}
                width={80}
                height={80}
                className=" self-start object-cover rounded-full aspect-square"
                alt="Trip Mate"
              />
              <div>
                <h4 className="text-xl font-bold">Jenny</h4>
                <h4>28 years old</h4>
                <h4>Hamburg Germany</h4>
              </div>
            </div>
          </Link>
        </div>

        <Link
          href={"/chat/chatId"}
          className={`block mx-auto w-3/5 text-center rounded-full p-3 font-medium text-lg mt-8 mb-24  pointer-events-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none text-white`}
        >
          Message Jenny
        </Link>
      </div>
      <Navbar />
    </div>
  );
}
