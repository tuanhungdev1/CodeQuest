import React from "react";

interface Props {
  children: React.ReactNode;
}

const CourseGrid = ({ children }: Props) => {
  return <div className="grid grid-cols-3 gap-8 mt-8">{children}</div>;
};

export default CourseGrid;
