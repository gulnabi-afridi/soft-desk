import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
