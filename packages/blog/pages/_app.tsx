import "../styles/globals.css";
import "../styles.scss";
import "@robbie-cook/react-components/dist/index.css";
import Theme from "../theme-ui";
import { ThemeProvider } from "theme-ui";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ThemeProvider theme={Theme as any}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
