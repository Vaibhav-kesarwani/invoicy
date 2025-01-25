"use server";

import { db } from "@/db";
import { Invoices } from "@/db/schema";

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = String(formData.get("description"));

  await db.insert(Invoices).values({
    value,
    description,
    status: "open",
  });
}
