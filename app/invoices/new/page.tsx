import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function NewInvoice() {
  return (
    <main className="flex flex-col justify-center text-center gap-5 max-w-5xl mx-auto my-12">
      <div className="justify-between flex">
        <h1 className="text-3xl font-bold">Create a New Invoice</h1>
      </div>

      <form>
        <div>
            <label>Billing name</label>
            <input type="text" />
        </div>
        <div>
            <label>Billing Email</label>
            <input type="email" />
        </div>
        <div>
            <label>Value</label>
            <input type="text" />
        </div>
        <div>
            <label>Description</label>
            <textarea>
                
            </textarea>
        </div>
      </form>
    </main>
  );
}
