import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  InformationCircleIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Signup() {
  const styles = {
    "btn-active":
      "pointer-events-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
    "btn-disabled": "pointer-events-none bg-slate-300 text-slate-500",
  };
  const [signupData, setSignupData] = useState({});
  const [formStep, setFormStep] = useState(1);
  const router = useRouter();

  // console.log(formStep);
  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };
  const handleBackButton = () => {
    if (formStep > 1) prevStep();
    else router.push("/login");
  };

  const handleNextButton = () => {
    if (formStep < 4) nextStep();
    else handleFormSubmit();
  };
  const handleSignupData = function (e) {
    const { name, value } = e.target;

    setSignupData((prev) => ({ ...signupData, [name]: value }));
  };
  const handleFormSubmit = function () {
    console.log("Your Information :", signupData);
  };
  return (
    <>
      <div className="container max-w-md mx-auto flex items-center overflow-hidden">
        <div className="m-5 mt-20 w-full relative text-slate-800">
          <div className="font-medium flex gap-4">
            <button onClick={handleBackButton}>
              <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
            </button>
            <span>Create Account</span>
          </div>
          <div>
            <h1 className={`text-3xl font-bold my-12 text-center`}>
              {(formStep === 1 && "Enter your Email") ||
                (formStep === 2 && "Select a Username") ||
                (formStep === 3 && "Enter your Birthday") ||
                (formStep === 4 && "User Agreement")}
            </h1>
            <form className="overflow-hidden">
              <div
                className={`w-full absolute translate-x-full transition duration-300 ease-in-out ${
                  (formStep === 1 && "translate-x-0") ||
                  (formStep >= 1 && "-translate-x-full invisible")
                }`}
              >
                <label htmlFor="email" className="text-sm">
                  Enter Email
                </label>
                <div className="relative mb-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`input-field`}
                    placeholder="someone@example.com"
                    onChange={handleSignupData}
                    required
                  />
                  {/* <InformationCircleIcon className="w-5 h-5 absolute right-12 top-5 fill-red-600" /> */}
                </div>
              </div>
              <div
                className={`w-full absolute translate-x-full transition duration-300 ease-in-out ${
                  (formStep === 2 && "translate-x-0") ||
                  (formStep >= 2 && "-translate-x-full invisible") ||
                  (formStep <= 2 && "translate-x-full invisible")
                }`}
              >
                <label htmlFor="username" className="text-sm">
                  Enter Username
                </label>
                <div className="relative mb-6">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className={`input-field`}
                    placeholder="@user"
                    onChange={handleSignupData}
                    required
                  />
                  {/* <InformationCircleIcon className="w-5 h-5 absolute right-12 top-5 fill-red-600" /> */}
                </div>
              </div>
              <div
                className={`w-full absolute transition duration-300 ease-in-out ${
                  (formStep === 3 && "translate-x-0") ||
                  (formStep >= 3 && "-translate-x-full invisible") ||
                  (formStep <= 3 && "translate-x-full invisible")
                }`}
              >
                <label htmlFor="dob" className="text-sm">
                  Your Birthday
                </label>
                <div className="relative mb-6">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className={`input-field`}
                    placeholder="DD/MM/YYYY"
                    onChange={handleSignupData}
                    required
                  />
                  {/* <InformationCircleIcon className="w-5 h-5 absolute right-12 top-5 fill-red-600" /> */}
                </div>
              </div>
              <div
                className={`w-full absolute transition duration-300 ease-in-out ${
                  (formStep === 4 && "translate-x-0") ||
                  (formStep <= 4 && "translate-x-full invisible")
                }`}
              >
                <div className="relative inline-flex gap-4 items-center mb-6">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="h-5 w-5"
                    onChange={handleSignupData}
                    required
                  />
                  <label htmlFor="dob" className="text-sm">
                    Do you agree to our terms of service and privacy policy
                  </label>
                </div>
              </div>
              <button
                disabled={signupData?.email ? false : true}
                className={`btn-primary mt-48 mb-6 ${
                  signupData?.email
                    ? styles["btn-active"]
                    : styles["btn-disabled"]
                } `}
                onClick={handleFormSubmit}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
