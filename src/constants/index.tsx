import {
  IconBook,
  IconChatBubbleLeft,
  IconCircleStack,
  IconPlay,
  IconUser,
  IconUsers,
  IconVideo,
} from "@/components/icons";
import { IMenuItem } from "@/types";

export const MenuItems: IMenuItem[] = [
  {
    title: "Khám phá",
    url: "/",
    icon: <IconBook className="size-5" />,
  },
  {
    title: "Khu vực học tập",
    url: "/study",
    icon: <IconPlay className="size-5" />,
  },

  {
    title: "Quản lý khóa học",
    url: "/manage/course",
    icon: <IconVideo className="size-5" />,
  },
  {
    title: "Quản lý sinh viên",
    url: "/manage/member",
    icon: <IconUsers className="size-5" />,
  },
  {
    title: "Quản lý đơn hàng",
    url: "/manage/order",
    icon: <IconCircleStack className="size-5" />,
  },
  {
    title: "Quản lý bình luận",
    url: "/manage/comment",
    icon: <IconChatBubbleLeft className="size-5" />,
  },
];
