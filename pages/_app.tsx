import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/General/Header/Header";
import Footer from "../components/General/Footer/Footer";

function WrappingComponent({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WrappingComponent>
      <Component {...pageProps} />
    </WrappingComponent>
  );
}

export default MyApp;
