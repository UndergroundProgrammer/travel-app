import Navbar from "@/src/components/Navbar";
import {
  ArrowSmallLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full  relative text-slate-800">
        <div className="font-medium flex gap-4">
          <Link href={"/"}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </Link>
          <span>Messages</span>
        </div>
        {/* Not Logged In */}
        {/* <Login /> */}
        <div className="my-4">
          <div className="flex my-2 rounded-lg shadow-[1px_1px_5px_#000000] shadow-gray-300">
            <Link href="/chat/chatId">
              <div className="flex items-center justify-between p-4 gap-4">
                <Image
                  src={"/images/hunza.jpg"}
                  width={50}
                  height={50}
                  className="rounded-full self-start object-cover aspect-square"
                  alt="User Image"
                />
                <div>
                  <h4 className="font-medium text-base my-1">
                    Melina - Enjoy the sun
                  </h4>
                  <p>
                    Hi Melina, you still searcing for a tripmate for spain...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex my-2 rounded-lg shadow-[1px_1px_5px_#000000] shadow-gray-300">
            <Link href="/chat/chatId">
              <div className="flex items-center justify-between p-4 gap-4">
                <Image
                  src={"/images/hunza.jpg"}
                  width={50}
                  height={50}
                  className="rounded-full self-start object-cover aspect-square"
                  alt="User Image"
                />
                <div>
                  <h4 className="font-medium text-base my-1">
                    Melina - Enjoy the sun
                  </h4>
                  <p>
                    Hi Melina, you still searcing for a tripmate for spain...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex my-2 rounded-lg shadow-[1px_1px_5px_#000000] shadow-gray-300">
            <Link href="/chat/chatId">
              <div className="flex items-center justify-between p-4 gap-4">
                <Image
                  src={"/images/hunza.jpg"}
                  width={50}
                  height={50}
                  className="rounded-full self-start object-cover aspect-square"
                  alt="User Image"
                />
                <div>
                  <h4 className="font-medium text-base my-1">
                    Melina - Enjoy the sun
                  </h4>
                  <p>
                    Hi Melina, you still searcing for a tripmate for spain...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
