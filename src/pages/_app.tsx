import GlobalStyle from "../styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "../contexts/data-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={1000} />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
