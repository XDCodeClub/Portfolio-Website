import "../styles/globals.css";
import { Provider } from "next-auth/client";
import BackToTop from "../components/BackToTop";
import SecurityGuard from "../components/SecurityGuard";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <BackToTop />
      <SecurityGuard />
    </Provider>
  );
}

export default MyApp;
