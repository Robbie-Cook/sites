import "../styles/globals.css";
import "../styles.scss";
import "bigiron.css/dist/bigiron.css";
import "@robbie-cook/react-components/dist/index.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
