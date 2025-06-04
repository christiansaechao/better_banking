import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-left space-y-4">
      {title !== "" && <div className="text-3xl font-semibold">{title}</div>}
      <div className="text-md text-gray-500">{description}</div>
    </div>
  );
};

export default SectionHeader;
