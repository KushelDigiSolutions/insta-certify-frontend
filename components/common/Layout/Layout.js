// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
// const Layout = ({children, pageProps}) => {
//   return (
//     <>
   
//       <Navbar navbarProps={pageProps.navbar} />
      
//       <main role="main">{children}</main>
//       <Footer footerProps={pageProps.footer} />
      
//     </>
//   )
// }

// export default Layout;

import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, pageProps }) => {
  const [boolValue, setBoolValue] = useState(false);

  const toggleBoolValue = () => setBoolValue(prev => !prev);

  useEffect(() => {
    const storedBoolValue = JSON.parse(sessionStorage.getItem("boolValue") || "false");
    setBoolValue(storedBoolValue);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("boolValue", JSON.stringify(boolValue));
  }, [boolValue]);

  return (
    <>
      <Navbar navbarProps={pageProps.navbar} boolValue={boolValue} />
      
      <main role="main">
        {React.cloneElement(children, { boolValue, toggleBoolValue })}
      </main>

      <Footer footerProps={pageProps.footer} />
    </>
  );
};

export default Layout;
