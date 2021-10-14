import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
