import "../styles/globals.css";
import "../styles.scss";
import "@robbie-cook/react-components/dist/index.css";
import Theme from "./theme-ui";
import Helmet from "react-helmet";
import { ThemeProvider } from "theme-ui";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ThemeProvider theme={Theme as any}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
