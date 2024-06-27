import { MenuItems } from "@/constants";
import { IMenuItem } from "@/types";
import Link from "next/link";
import React from "react";
import ActiveLink from "../common/ActiveLink";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white flex flex-col dark:bg-grayDarker dark:border-opacity-10">
      <Link
        scroll={true}
        href="/"
        className="font-extrabold text-3xl inline-block mb-5"
      >
        <span className="text-primary">Code</span>
        Quest
      </Link>

      <ul className="flex flex-col gap-2">
        {MenuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-4">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

const MenuItem = ({ title = "", url = "/", icon }: IMenuItem) => {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
};

export default Sidebar;
