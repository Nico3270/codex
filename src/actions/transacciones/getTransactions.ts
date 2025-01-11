"use server";

import { ExpenseCategory, IncomeCategory, PaymentMethod, Transaction, TransactionType } from "@/interfaces/interfaces";
import prisma from "@/lib/prisma";


export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: {
        date: "desc",
      },
    });

    // Mapea las transacciones para coincidir con la interfaz personalizada
    return transactions.map((transaction) => ({
      id: transaction.id,
      date: transaction.date.toISOString(), // Convertir Date a string
      type: transaction.type as TransactionType,
      description: transaction.description,
      category: transaction.category as IncomeCategory | ExpenseCategory,
      amount: transaction.amount.toNumber(), // Convertir Decimal a number
      paymentMethod: transaction.paymentMethod as PaymentMethod,
    }));
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    return [];
  }
};
