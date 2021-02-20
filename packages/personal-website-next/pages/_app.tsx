import '../styles/globals.css'
import Theme from "../theme-ui";
import { ThemeProvider } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
