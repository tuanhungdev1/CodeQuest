import { IconArrowLeft } from "@/components/icons";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-7xl">404</h1>
      <h2 className="mb-5">Page not found!</h2>
      <Link
        href={"/"}
        className="flex items-center gap-2 hover:text-primary transition-all"
      >
        <IconArrowLeft className="size-5" />
        Trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
