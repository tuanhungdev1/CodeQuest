import { IconBook, IconPlay, IconUser, IconVideo } from "@/components/icons";
import { IMenuItem } from "@/types";

export const MenuItems: IMenuItem[] = [
  {
    title: "Khu vực học tập",
    url: "/",
    icon: <IconPlay className="size-5" />,
  },
  {
    title: "Khám phá",
    url: "/explore",
    icon: <IconBook className="size-5" />,
  },
  {
    title: "Khóa học",
    url: "/course",
    icon: <IconVideo className="size-5" />,
  },
  {
    title: "Trang cá nhân",
    url: "/user",
    icon: <IconUser className="size-5" />,
  },
];
