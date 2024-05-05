import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.pathname.startsWith('/login')) {
      router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;