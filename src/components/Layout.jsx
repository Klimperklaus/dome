import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header className="top-0 fixed bg-white/15 w-full">
        <Navbar />
      </header>
      <main className="top-7 fixed w-full bg-white/15 overflow-auto">
        <Outlet />
      </main>
      <footer className="bottom-0 text-center fixed w-full bg-white/15">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
