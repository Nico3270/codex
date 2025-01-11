"use client";

import React, { useState } from "react";
import { subDays, startOfMonth, startOfYear, isBefore, isAfter } from "date-fns";
import GraficosTransacciones from "./GraficosTransacciones";
import GraficosTransaccionesMetodoPago from "./GraficosTransaccionesMetodoPago";
import { Transaction } from "@/interfaces/interfaces";

interface DashboardProps {
  transactions: Transaction[];
}

const Dashboard: React.FC<DashboardProps> = ({ transactions }) => {
  const [filters, setFilters] = useState({
    period: "all", // "day", "week", "month", "year", "custom"
    startDate: "",
    endDate: "",
  });

  const handleFilterChange = (period: string) => {
    const today = new Date();
    setFilters({
      period,
      startDate: period === "custom" ? filters.startDate : "",
      endDate: period === "custom" ? filters.endDate : "",
    });

    if (period === "day") {
      setFilters({ period, startDate: today.toISOString(), endDate: today.toISOString() });
    } else if (period === "week") {
      setFilters({ period, startDate: subDays(today, 7).toISOString(), endDate: today.toISOString() });
    } else if (period === "month") {
      setFilters({ period, startDate: startOfMonth(today).toISOString(), endDate: today.toISOString() });
    } else if (period === "year") {
      setFilters({ period, startDate: startOfYear(today).toISOString(), endDate: today.toISOString() });
    }
  };

  const applyFilters = () => {
    const { startDate, endDate, period } = filters;
    if (period === "all") return transactions;

    return transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      if (startDate && isBefore(transactionDate, new Date(startDate))) return false;
      if (endDate && isAfter(transactionDate, new Date(endDate))) return false;
      return true;
    });
  };

  const filteredTransactions = applyFilters();

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold pb-6">Dashboard de Transacciones</h1>

      {/* Filtros */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-center">
        <button
          onClick={() => handleFilterChange("day")}
          className="bg-[#F26B0F] text-white px-4 py-2 rounded-md hover:bg-[#FCC737]"
        >
          Día
        </button>
        <button
          onClick={() => handleFilterChange("week")}
          className="bg-[#F26B0F] text-white px-4 py-2 rounded-md hover:bg-[#FCC737]"
        >
          Semana
        </button>
        <button
          onClick={() => handleFilterChange("month")}
          className="bg-[#F26B0F] text-white px-4 py-2 rounded-md hover:bg-[#FCC737]"
        >
          Mes
        </button>
        <button
          onClick={() => handleFilterChange("year")}
          className="bg-[#F26B0F] text-white px-4 py-2 rounded-md hover:bg-[#FCC737]"
        >
          Año
        </button>
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, period: "custom", startDate: e.target.value })
          }
          className="border rounded-md p-2"
        />
        <input
          type="date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({ ...filters, period: "custom", endDate: e.target.value })
          }
          className="border rounded-md p-2"
        />
      </div>

      {/* Gráficos */}
      <div className="flex flex-col gap-6">
        {/* Gráficos de Transacciones */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          
          <GraficosTransacciones transactions={filteredTransactions} />
        </section>

        {/* Gráficos por Método de Pago */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          
          <GraficosTransaccionesMetodoPago transactions={filteredTransactions} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
