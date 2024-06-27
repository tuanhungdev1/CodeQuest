"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}

const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      prefetch
      scroll={true}
      href={url}
      className={`p-3 rounded-md flex items-center gap-3 dark:text-gray-500 transition-all
        ${
          isActive
            ? "!text-white bg-primary svg-animate"
            : "hover:!text-primary hover:bg-primary hover:bg-opacity-10"
        }
        `}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
