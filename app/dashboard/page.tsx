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
            <TableHead className="w-[100px] text-right">Date</TableHead>
            <TableHead className="text-left">Customer</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left">
                <span className="font-semibold">
                    10/31/2024
                </span>
            </TableCell>
            <TableCell className="text-left">
                <span className="font-semibold">
                    Yash Kumar
                </span>
            </TableCell>
            <TableCell className="text-left">
                <span>
                    xyz@gmail.com
                </span>
            </TableCell>
            <TableCell className="text-center">
                <span className="font-semibold">
                    Open
                </span>
            </TableCell>
            <TableCell className="text-right">
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
