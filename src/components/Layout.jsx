import React from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import HireMeWheel from "@/components/Wheel/HireMeWheel";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
        <div className="fixed bottom-10 right-12">
          <HireMeWheel />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
