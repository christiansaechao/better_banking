import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GenericCardProps = {
  children: React.ReactNode;
  cardTitle: string;
  showButton: boolean;
};

export const GenericCard = ({
  children,
  cardTitle,
  showButton,
}: GenericCardProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-semibold text-gray-700">
          {cardTitle}
        </CardTitle>
        {showButton && (
          <button className="text-blue-600 text-sm hover:text-blue-800">
            View All
          </button>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
