import { useEffect } from 'react';
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { AuthContextProvider } from '../helpers/Context';
import { ProtectRoute } from '../helpers/Context';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
