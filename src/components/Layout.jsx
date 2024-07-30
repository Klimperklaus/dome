import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header className="top-0 w-full bg-white/10">
        <Navbar />
      </header>
      <main className="top-8 fixed w-full bg-white/10 overflow-auto">
        <Outlet />
      </main>
      <footer className="bottom-0 fixed w-full text-center bg-white/10">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
