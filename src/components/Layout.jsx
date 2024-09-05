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
        <div className="hidden xl:fixed xl:bottom-2 xl:right-2 xl:block">
          <HireMeWheel />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
