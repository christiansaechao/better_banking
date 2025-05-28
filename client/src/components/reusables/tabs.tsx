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
      <TabsContent value="account">Different accounts go here</TabsContent>
      <TabsContent value="transactions">Change your password here.</TabsContent>
      <TabsContent value="documents">Change your password here.</TabsContent>
      <TabsContent value="relationships">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default CustomTabs;
