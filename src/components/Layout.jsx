import React from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import HireMeWheel from "@/components/Wheel/HireMeWheel";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <div>
        {children}
        <div className="bottom-2 hidden xl:fixed xl:right-6 xl:block 2xl:right-2">
          <HireMeWheel />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
