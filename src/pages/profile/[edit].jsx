import { EnvelopeIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/solid";

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

        <h1 className="text-3xl font-bold text-center capitalize">
          Edit {router.query.name}
        </h1>
        <div className="mb-12">
          <form>
            {router.query.name === "password" ? (
              <>
                <label
                  htmlFor={router.query.name}
                  className="text-sm capitalize"
                >
                  {router.query.name}
                </label>
                <div className="relative mb-6">
                  <input
                    type={router.query.name}
                    id={router.query.name}
                    name={router.query.name}
                    placeholder={router.query.name}
                    className="input-field"
                  />
                </div>
                <div className="relative mb-6">
                  <label htmlFor="newPass" className="text-sm capitalize">
                    Enter new Password
                  </label>
                  <input
                    type={"password"}
                    id={"newPass"}
                    name={"newPass"}
                    placeholder={"New Password"}
                    className="input-field"
                  />
                </div>
                <div className="relative mb-6">
                  <label
                    htmlFor="confirmNewPass"
                    className="text-sm capitalize"
                  >
                    Confirm new Password
                  </label>
                  <input
                    type={"password"}
                    id={"confirmNewPass"}
                    name={"confirmNewPass"}
                    placeholder={"Confirm Password"}
                    className="input-field"
                  />
                </div>
              </>
            ) : (
              <>
                <label
                  htmlFor={router.query.name}
                  className="text-sm capitalize"
                >
                  {router.query.name}
                </label>
                <div className="relative mb-6">
                  <input
                    type={router.query.name}
                    id={router.query.name}
                    name={router.query.name}
                    placeholder={router.query.name}
                    className="input-field"
                  />
                </div>
              </>
            )}

            <button
              className={`btn-primary mb-6  bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none text-white`}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
