import "../styles/globals.css";
import "../styles.scss";
import "../cara/styles/animations";
import "../cara/styles/utils";
import Theme from "../theme-ui";
import Helmet from "react-helmet";
import { ThemeProvider } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
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
