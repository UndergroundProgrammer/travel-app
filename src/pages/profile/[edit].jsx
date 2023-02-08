import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DangerAlert, SuccessAlert } from "../components/Alert";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  InformationCircleIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();

  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full relative text-slate-800">
        <div className="font-medium flex gap-4">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
          <span>Login</span>
        </div>

        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <div className="mb-12">
          <form>
            <label htmlFor="email" className="text-sm">
              Email
            </label>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center ml-3">
                <EnvelopeIcon className="w-6 h-6 fill-slate-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className={`input-field ${
                  (loggedIn === false && "border-red-500") || "border-slate-300"
                }`}
                placeholder="Email"
                onChange={handleLoginData}
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-5 top-5 fill-red-600" /> */}
            </div>
            <button className={`btn-primary mb-6 `}>Login</button>
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
