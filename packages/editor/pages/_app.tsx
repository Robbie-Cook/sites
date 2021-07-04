import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-quill/dist/quill.snow.css';
import 'bigiron.css/dist/bigiron.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
