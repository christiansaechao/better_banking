import React from "react";

const SectionHeader = ({ title, description }: { title: string, description: string }) => {
  return (
    <>
      <div className="text-3xl font-semibold">{title}</div>
      <div className="text-md text-gray-500">{description}</div>
    </>
  );
};

export default SectionHeader;
