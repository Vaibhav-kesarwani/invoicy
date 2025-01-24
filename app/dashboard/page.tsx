import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <main className="flex flex-col justify-center text-center gap-5 max-w-5xl mx-auto">
      <h1 className="text-6xl font-bold">Dashboard</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">
                Date
            </TableHead>
            <TableHead className="p-4">
                Customer
            </TableHead>
            <TableHead className="p-4">
                Email
            </TableHead>
            <TableHead className="text-center p-4">
                Status
            </TableHead>
            <TableHead className="text-right p-4">
                Value
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left p-4">
                <span className="font-semibold">
                    10/31/2024
                </span>
            </TableCell>
            <TableCell className="text-left p-4">
                <span className="font-semibold">
                    Yash Kumar
                </span>
            </TableCell>
            <TableCell className="text-left p-4">
                <span>
                    xyz@gmail.com
                </span>
            </TableCell>
            <TableCell className="text-center p-4">
                <Badge className="rounded-full">
                    Open
                </Badge>
            </TableCell>
            <TableCell className="text-right p-4">
                <span className="font-semibold">
                    ₹250.00
                </span>
            </TableCell> 
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
