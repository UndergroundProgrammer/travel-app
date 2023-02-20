
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { changePasword } from "@/redux/auth/auth.actions";
import { updateUserProfileRequest } from "@/redux/userDashboard/userDashboard.actions";

import Multiselect from "multiselect-react-dropdown";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "@/src/components/ContriesList";

export default function Login() {
  const user = useSelector(({ auth }) => auth.user);
  const router = useRouter();
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleData = (e, select, sname, svalue) => {
    if (select) {
      setData({ ...data, [sname]: svalue });
    } else {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
  };

  const updateProfile = (e) => {
    e.preventDefault();

    if (router.query.name === "password") {
      if (data.newPass !== data.confirmNewPass) {
        setErr(true);
      } else {
        const payload = {
          userId: user.id,
          oldPassword: data.password,
          newPassword: data.confirmNewPass,
        };
        console.log(payload, data);
        dispatch(changePasword(payload));
      }
    } else dispatch(updateUserProfileRequest(data, user.id, () => {}));
  };

  useEffect(() => {
    if (user)
      setData({ ...data, [router.query.name]: user[router.query.name] });
  }, [user]);
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 w-full relative text-slate-800">
        <div className="font-medium flex mb-8 gap-4">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
          <span>Edit</span>
        </div>

        <h1 className="text-3xl font-bold text-center capitalize">
          {router.query.type == "select"
            ? router.query.name == "visitedCountries"
              ? "Visted Countries"
              : "Want To Visit"
            : router.query.name}
        </h1>
        <div className="mb-12">
          <form onSubmit={updateProfile}>
            {router.query.name === "password" ? (
              <>
                <label
                  htmlFor={router.query.name}
                  className="text-sm capitalize"
                >
                  Old {router.query.name}
                </label>
                <div className="relative mb-6">
                  <input
                    type={router.query.name}
                    id={router.query.name}
                    name={router.query.name}
                    placeholder={router.query.name}
                    className="input-field"
                    onChange={handleData}
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
                    onChange={handleData}
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
                    onChange={(e) => {
                      setErr(false);
                      handleData(e);
                    }}
                    className="input-field"
                  />
                  {err && (
                    <div className="text-red-400">
                      confirm password should match
                    </div>
                  )}
                </div>
              </>
            ) : router.query.type === "select" ? (
              <>
                <label
                  htmlFor={router.query.name}
                  className="text-sm capitalize"
                >
                  {router.query.name == "visitedCountries"
                    ? "Visted Countries"
                    : "Want To Visit"}
                </label>
                <div className="relative mb-6">
                  <Multiselect
                    options={countries}
                    displayValue="name"
                    onRemove={(val) =>
                      handleData("", true, router.query.name, val)
                    }
                    selectedValues={data[router.query.name]}
                    isObject={false}
                    onSelect={(val) =>
                      handleData("", true, router.query.name, val)
                    }
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
                    value={data[router.query.name]}
                    placeholder={router.query.name}
                    className="input-field"
                    onChange={handleData}
                  />
                </div>
              </>
            )}

            <button
              type="submit"
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
