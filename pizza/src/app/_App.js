// `pages/_app.js`
import '../styles/global.css';
import '../app/layout';

import { ThemeProvider } from 'next-themes';
//import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  //const [isLoading, setIsLoading] = useState(false);
  return  ( 
    <>   

  <ThemeProvider  enableSystem={true} attribute='class'>
  <Layout>  <Component  {...pageProps} /></Layout>
  </ThemeProvider>
 
  </>
  ) 

}