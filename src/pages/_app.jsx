import '@/styles/globals.css'
import { ReduxWrapper } from "../../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
export default ReduxWrapper.withRedux(function App({ Component, pageProps }) {
  const [isWindow, setWindow] = useState(false);
  useEffect(() => {
    setWindow(true);
  }, []);
  return (
    <>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
      />
      {isWindow && <Component {...pageProps} />}
    </>
  );
});
