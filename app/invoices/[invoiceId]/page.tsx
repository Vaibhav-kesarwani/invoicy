import { db } from "@/db";
import { Customers, Invoices } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and, isNull } from "drizzle-orm";
import { notFound } from "next/navigation";
import Invoice from "./invoice";

interface PageProps {
  params: {
    invoiceId: string;
  };
}

export default async function InvoicePage({ params }: PageProps) {
  // Ensure params is properly structured and contains invoiceId
  if (!params?.invoiceId) {
    throw new Error("Missing or invalid parameters");
  }

  const invoiceId = parseInt(params.invoiceId, 10);

  if (isNaN(invoiceId)) {
    throw new Error("Invalid invoice id");
  }

  const { userId, orgId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized access");
  }

  let result;

  if (orgId) {
    [result] = await db
      .select()
      .from(Invoices)
      .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
      .where(
        and(eq(Invoices.id, invoiceId), eq(Invoices.organizationId, orgId))
      )
      .limit(1);
  } else {
    [result] = await db
      .select()
      .from(Invoices)
      .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
      .where(
        and(
          eq(Invoices.id, invoiceId),
          eq(Invoices.userId, userId),
          isNull(Invoices.organizationId)
        )
      )
      .limit(1);
  }

  if (!result) {
    notFound();
  }

  const invoice = {
    ...result.invoices,
    customer: result.customers,
  };

  return <Invoice invoice={invoice} />;
}
