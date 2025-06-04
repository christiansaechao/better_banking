import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";

const TinyCards = ({ Title, Icon }: { Title: string; Icon: ReactNode }) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        {Icon}
      </CardContent>
    </Card>
  );
};

export default TinyCards;
