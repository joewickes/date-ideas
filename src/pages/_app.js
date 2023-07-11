import './global.css';

// Context
import { ContextProvider } from '../context/Context';

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
