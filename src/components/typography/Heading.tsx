import React from "react";

interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

export default Heading;
