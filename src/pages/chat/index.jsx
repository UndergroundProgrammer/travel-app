import Navbar from "@/src/components/Navbar";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full  relative text-slate-800">
        <div className="font-medium flex gap-4">
          <Link href={"/"}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </Link>
          <span>Chats</span>
        </div>
        {/* Not Logged In */}
        {/* <Login /> */}
      </div>
      {/* <Navbar /> */}
    </div>
  );
}
