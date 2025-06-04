import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="relationships">Relationships</TabsTrigger>
      </TabsList>
      <TabsContent value="account">No Other Accounts Available</TabsContent>
      <TabsContent value="transactions">No Recent Transactions</TabsContent>
      <TabsContent value="documents">No Documents Available</TabsContent>
      <TabsContent value="relationships">
        No Relationships Available
      </TabsContent>
    </Tabs>
  );
};

export default CustomTabs;
