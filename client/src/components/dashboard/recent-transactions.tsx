import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GenericCard } from "./card";

const dummyData = [
  {
    transactionId: 1,
    time: "10:00 AM",
    customer: "John Doe",
    account: "123456789",
    type: "Deposit",
    amount: "$100",
  },
  {
    transactionId: 2,
    time: "12:00 PM",
    customer: "Jane Smith",
    account: "987654321",
    type: "Withdrawal",
    amount: "$50",
  },
  {
    transactionId: 3,
    time: "2:00 PM",
    customer: "Bob Johnson",
    account: "555555555",
    type: "Deposit",
    amount: "$200",
  },
];

const RecentTransactions = () => {
  return (
    <>
      <GenericCard
        cardTitle="Recent Transactions"
        showButton={true}
      >
        <div className="w-full overflow-x-auto">
          <Table className="w-full table-fixed">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead className="w-[150px]">Customer</TableHead>
                <TableHead className="w-[150px]">Account</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead className="w-[100px]">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyData.map((transaction) => (
                <TableRow key={transaction.transactionId}>
                  <TableCell>{transaction.time}</TableCell>
                  <TableCell className="truncate">
                    {transaction.customer}
                  </TableCell>
                  <TableCell className="truncate">
                    {transaction.account}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </GenericCard>
    </>
  );
};

export default RecentTransactions;
