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
import { GenericCard } from "@/components/reusables/card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchResults = ({ customerData }: { customerData: any}) => {
  return (
    <div className="w-full overflow-x-auto">
      <GenericCard cardTitle="Search Results" showButton={false} >
        <SearchTable />
      </GenericCard>
    </div>
  );
};

const SearchTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Invoice</TableHead>
          <TableHead className="text-left">Status</TableHead>
          <TableHead className="text-left">Method</TableHead>
          <TableHead className="text-left">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium text-left">INV001</TableCell>
          <TableCell className="text-left">Paid</TableCell>
          <TableCell className="text-left">Credit Card</TableCell>
          <TableCell className="text-left">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SearchResults;
