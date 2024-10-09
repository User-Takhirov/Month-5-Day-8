import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <main className="container min-h-[37vh] flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
