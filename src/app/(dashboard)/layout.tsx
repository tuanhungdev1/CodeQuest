import Sidebar from "@/components/layout/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <Sidebar />
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
