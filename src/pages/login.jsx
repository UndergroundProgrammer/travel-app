import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DangerAlert, SuccessAlert } from "../components/Alert";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  InformationCircleIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";
import { googleAuthRequest, loginRequest } from "@/redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
export default function Login() {
  const styles = {
    "underline-link":
      "underline underline-offset-4 hover:text-slate-700 focus:text-slate-700",
    "integration-link":
      "rounded-full border border-slate-300 hover:border-slate-500 focus:border-slate-500 p-4",
    "visibility-icon": "absolute w-6 h-6 right-5 top-5 fill-slate-400",
  };
  const router = useRouter();

  const [loginData, setLoginData] = useState({});
  const [loggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const dispatch = useDispatch();
  const handlePasswordVisibility = function () {
    setPasswordVisibility((prev) => !prev);
  };
  const handleLoginData = function (e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLoading = () => {
    setLoading(false);
  };
  const handleLogin = function (e) {
    e.preventDefault();
    setLoading(true);
    dispatch(loginRequest(loginData, handleLoading));
  };
  const handleGoogleSignUp = (e) => {
    e.preventDefault();

    window.open(
      `https://tripapp-backend.up.railway.app/api/auth/google-auth`,
      "_self"
    );
  };
  const handleFacebookSignUp = (e) => {
    e.preventDefault();

    window.open(
      `https://tripapp-backend.up.railway.app/api/auth/facebook-auth`,
      "_self"
    );
  };
  useEffect(() => {
    if (router.query.data) {
      const payload = JSON.parse(router.query.data);
      setLoading(true);
      dispatch(googleAuthRequest(payload, handleLoading));
    }
  }, [router.query]);

  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full relative text-slate-800">
        <div className="font-medium flex gap-4">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
          <span>Login</span>
        </div>
        {/* {loggedIn ? <SuccessAlert /> : <DangerAlert />} */}
        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <div className="mb-12">
          <form onSubmit={(e) => handleLogin(e)}>
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
            <label htmlFor="email" className="text-sm">
              Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 -top-5 flex items-center ml-3 pointer-events-none">
                <LockClosedIcon className="w-6 h-6 fill-slate-400" />
              </div>
              <input
                type={passwordVisibility ? "text" : "password"}
                id="password"
                name="password"
                className={`input-field ${
                  (loggedIn === false && "border-red-500") || "border-slate-300"
                }`}
                placeholder="Password"
                onChange={handleLoginData}
                required
              />
              {/* <InformationCircleIcon className="w-5 h-5 absolute right-12 top-5 fill-red-600" /> */}
              {passwordVisibility ? (
                <button type="button" onClick={handlePasswordVisibility}>
                  <EyeSlashIcon className={styles["visibility-icon"]} />
                </button>
              ) : (
                <button type="button" onClick={handlePasswordVisibility}>
                  <EyeIcon className={styles["visibility-icon"]} />
                </button>
              )}
            </div>
            <div className="relative mb-6 text-center underline underline-offset-4 text-blue-600 text-sm font-medium">
              <Link href="/forgotpassword">Forgot your password?</Link>
            </div>
            <button
              type="submit"
              disabled={loginData?.email && loginData?.password ? false : true}
              className={`btn-primary mb-6 ${
                loginData?.email && loginData?.password
                  ? "pointer-events-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white"
                  : "pointer-events-none bg-slate-300 text-slate-500"
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
            <button
              onClick={handleGoogleSignUp}
              className={styles["integration-link"]}
            >
              <Image
                src="/google.svg"
                alt="Google"
                width="32"
                height="32"
              ></Image>
            </button>
            <button
              onClick={handleFacebookSignUp}
              className={styles["integration-link"]}
            >
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
      <Navbar />
    </div>
  );
}
