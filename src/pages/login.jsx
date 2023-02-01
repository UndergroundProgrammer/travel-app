import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DangerAlert, SuccessAlert } from "../components/Alert";

export default function Login() {
  const styles = {
    "underline-link":
      "underline underline-offset-4 hover:text-slate-700 focus:text-slate-700",
    "integration-link":
      "rounded-full border border-slate-300 hover:border-slate-500 focus:border-slate-500 p-4",
  };

  const [loginData, setLoginData] = useState({});
  const [loggedIn, setIsLoggedIn] = useState(false);
  const handleLoginData = function (e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = function (e) {
    e.preventDefault();
    console.log("Login Clicked");
    console.log(loginData);
  };

  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 w-full relative text-slate-800">
        {/* {loggedIn ? <SuccessAlert /> : <DangerAlert />} */}

        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <div className="mb-12">
          <form onSubmit={(e) => handleLogin(e)}>
            <label htmlFor="email" className="text-sm">
              Email
            </label>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 top-1.5 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-7 h-7 fill-slate-400"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
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
            </div>
            <label htmlFor="email" className="text-sm">
              Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 top-1.5 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-7 h-7 fill-slate-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className={`input-field ${
                  (loggedIn === false && "border-red-500") || "border-slate-300"
                }`}
                placeholder="Password"
                onChange={handleLoginData}
                required
              />
            </div>
            <div className="relative mb-6 text-center underline underline-offset-4 text-blue-600 text-sm font-medium">
              <Link href="/">Forgot your password?</Link>
            </div>
            <button
              disabled={loginData?.email && loginData?.password ? false : true}
              className={`btn-primary mb-6 ${
                loginData?.email && loginData?.password
                  ? "pointer-events-auto bg-blue-500 text-white"
                  : "pointer-events-none bg-gray-300 text-gray-500"
              }`}
            >
              Login
            </button>
            <Link href="signup">
              <button className="btn-primary">Create Account</button>
            </Link>
          </form>
        </div>
        {/* 3rd Party Integrations */}
        <div>
          <p className="text-center text-sm mb-6">Or login with</p>
          <div className="flex justify-center gap-4 mb-6">
            <button className={styles["integration-link"]}>
              <Image
                src="/google.svg"
                alt="Google"
                width="32"
                height="32"
              ></Image>
            </button>
            <button className={styles["integration-link"]}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width="32"
                height="32"
              ></Image>
            </button>
            <button className={styles["integration-link"]}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width="32"
                height="32"
              ></Image>
            </button>
          </div>
          <div className="flex gap-8 justify-center text-gray-600">
            <Link href="privacy_policy">
              <span className={styles["underline-link"]}>privacy policy</span>
            </Link>
            <Link href="terms_and_conditions">
              <span className={styles["underline-link"]}>
                terms and condition
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
