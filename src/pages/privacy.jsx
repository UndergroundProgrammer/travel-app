import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="container max-w-md mx-auto flex items-center">
      <div className="m-5 mt-20 relative text-slate-800">
        <div className="font-medium flex gap-4">
          <button onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="w-6 h-6 fill-slate-800" />
          </button>
          <span>Login</span>
        </div>
        <div className="mt-20">
          <h3 className="text-lg font-bold text-slate-600 my-2">
            Privacy Policy
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            unde aliquid, dolor consectetur id exercitationem dolore non fugit
            soluta minus laborum illo sequi amet dolorem sit, error fugiat,
            consequuntur inventore ipsam atque. Fuga, provident quo ipsa nihil
            dicta, laboriosam, soluta ad sit et officiis voluptates. Quod rerum
            cupiditate officiis ipsam?
          </p>
        </div>
        <div className="mb-20">
          <h3 className="text-lg font-bold text-slate-600 my-2">
            Information we Collect
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            unde aliquid, dolor consectetur id exercitationem dolore non fugit
            soluta minus laborum illo sequi amet dolorem sit, error fugiat,
            consequuntur inventore ipsam atque. Fuga, provident quo ipsa nihil
            dicta, laboriosam, soluta ad sit et officiis voluptates. Quod rerum
            cupiditate officiis ipsam?
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
