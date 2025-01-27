import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import Invoice from "./invoice";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const { userId } = await auth();
  const invoiceId = parseInt(params.invoiceId);

  if (!userId) return;

  if (isNaN(invoiceId)) {
    throw new Error("Invalid invoice id");
  }

  const [result] = await db
    .select()
    .from(Invoices)
    .where(and(eq(Invoices.id, invoiceId), eq(Invoices.userId, userId)))
    .limit(1);

  if (!result) {
    notFound();
  }

  return <Invoice invoice={result} />;
}
