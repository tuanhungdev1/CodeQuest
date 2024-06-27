import NotFoundPage from "@/app/not-found";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  const { userId } = auth();
  if (!userId) return redirect("/sign-in");
  return <div>{children}</div>;
};

export default layout;
