import React from "react";
import { Badge } from "@/components/ui/badge";

const ReusableBadge = ({ text }: { text: string }) => {
  return <Badge variant="default">{text}</Badge>;
};

export default ReusableBadge;
