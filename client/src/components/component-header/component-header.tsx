import React from "react";

const SectionHeader = ({ title, user }: { title: string, user: string }) => {
  return (
    <>
      <div className="text-3xl font-semibold">{title}</div>
      <div className="text-md text-gray-500">Welcome back, {user}. Today is Monday, June 12, 2023.</div>
    </>
  );
};

export default SectionHeader;
