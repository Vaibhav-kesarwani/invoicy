import { sql } from "drizzle-orm";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function NewInvoice() {
    const result = await db.execute(sql`SELECT current_database()`);
  return (
    <main className="flex flex-col justify-center h-full gap-5 max-w-5xl mx-auto my-12">
      <div className="justify-between flex">
        <h1 className="text-3xl font-bold">Create a New Invoice</h1>
      </div>

      {JSON.stringify(result)}
      
      <form className="grid gap-4 max-w-xs">
        <div>
            <Label htmlFor="name" className="block mb-2 font-semibold text-base">Billing name</Label>
            <Input id="name" name="name" type="text" />
        </div>
        <div>
            <Label htmlFor="email" className="block mb-2 font-semibold text-base">Billing Email</Label>
            <Input id="email" name="email" type="email" />
        </div>
        <div>
            <Label htmlFor="vlaue" className="block mb-2 font-semibold text-base">Value</Label>
            <Input id="value" name="value" type="text" />
        </div>
        <div>
            <Label htmlFor="description" className="block mb-2 font-semibold text-base">Description</Label>
            <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
            <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
