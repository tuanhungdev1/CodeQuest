import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="p-10 flex items-center justify-center h-screen">
      <SignUp />
    </div>
  );
};

export default page;
