import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <main className="max-w-[1600px] mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default RootLayout;
