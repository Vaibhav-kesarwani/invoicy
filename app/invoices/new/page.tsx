"use client";

import { createAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SyntheticEvent, useState } from "react";

export default function NewInvoice() {
  const [state, setState] = useState("ready");
  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    await createAction(formData);
  }

  return (
    <main className="flex flex-col justify-center h-full gap-5 max-w-5xl mx-auto my-12">
      <div className="justify-between flex">
        <h1 className="text-3xl font-bold">Create a New Invoice</h1>
      </div>

      <form
        action={createAction}
        onSubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-base">
            Billing name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-base">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="vlaue" className="block mb-2 font-semibold text-base">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-base"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
