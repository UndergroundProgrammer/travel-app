import { PlusIcon } from "@heroicons/react/24/outline";
import {
  EnvelopeIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  return (
    <div className="container max-w-md fixed w-full p-5 text-slate-600 shadow-md bottom-0 bg-white">
      <nav className="flex justify-between items-center text-center">
        <Link href={"/"} className={router.pathname === "/" ? "active" : ""}>
          <HomeIcon className="w-6 h-6 mx-auto fill-slate-600" />
          <span className="font-medium text-sm">Home</span>
        </Link>
        <Link
          href={"/activitys"}
          className={router.pathname === "/activitys" ? "active" : ""}
        >
          <MapIcon className="w-6 h-6  mx-auto fill-slate-600" />
          <span className="font-medium text-sm">Activitys</span>
        </Link>
        <Link
          href={isLoggedIn ? "/post/create" : "/login"}
          className={router.pathname === "/" ? "active" : ""}
        >
          <PlusIcon className="w-8 h-8  mx-auto stroke-[3] stroke-blue-600 " />
        </Link>
        <Link
          href={"/chat"}
          className={router.pathname === "/chat" ? "active" : ""}
        >
          <EnvelopeIcon className="w-6 h-6  mx-auto fill-slate-600" />
          <span className="font-medium text-sm">Messages</span>
        </Link>
        <Link
          href={"/profile"}
          className={router.pathname === "/profile" ? "active" : ""}
        >
          <UserIcon className="w-6 h-6  mx-auto fill-slate-600" />
          <span className="font-medium text-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
