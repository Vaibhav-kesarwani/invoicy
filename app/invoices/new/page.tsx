"use client";

import { createAction } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SyntheticEvent, useState } from "react";
import Form from "next/form";
import Container from "@/components/Container";
import Link from "next/link";

export default function NewInvoice() {
  const [state, setState] = useState("ready");
  async function handleOnSubmit(event: SyntheticEvent) {
    if (state === "pending") {
      event.preventDefault();
      return;
    }
    setState("pending");
  }

  return (
    <main className="h-full">
      <Container>
        <div className="justify-between flex mb-6">
          <h1 className="text-3xl font-bold">
            <Link href={"/dashboard"}>Create a New Invoice</Link>
          </h1>
        </div>

        <Form
          action={createAction}
          onSubmit={handleOnSubmit}
          className="grid gap-4 max-w-xs"
        >
          <div>
            <Label
              htmlFor="name"
              className="block mb-2 font-semibold text-base"
            >
              Billing name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 font-semibold text-base"
            >
              Billing Email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label
              htmlFor="vlaue"
              className="block mb-2 font-semibold text-base"
            >
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
            <SubmitButton />
          </div>
        </Form>
      </Container>
    </main>
  );
}
