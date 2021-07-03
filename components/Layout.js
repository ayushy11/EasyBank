import React from "react";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        {/* <link rel="favicon" href="/favicon-32x32.png"/> */}
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
