import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ProgressBar,
  Navbar,
  PreFooter,
  MainFooter,
  ReactToastifyContainer,
} from "../src/components/commons";
import { Provider } from "react-redux";
import { persistor, store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);

  const router = useRouter();

  /**
   * Get Current Route Path
   */
  const currentRoutePath = router.asPath;

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    //eslint-disable-next-line
  }, [router.query]);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProgressBar progress={progress} />
          <ReactToastifyContainer />
          <Navbar minimal={currentRoutePath === "/" ? true : false} />
          <Component {...pageProps} />
          <PreFooter />
          <MainFooter />
        </PersistGate>
      </Provider>
    </>
  );
}
