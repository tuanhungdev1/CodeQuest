import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";

export const metadata: Metadata = {
  title: "CodeQuestHub",
  description:
    "Nền tàng học lập trình trực tuyến đơn giản dễ hiểu cho người mới bắt đầu cũng như người có nhiều kinh nghiệm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
