"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js";
import { SeccionesFont, titulosPrincipales } from "@/config/fonts";
import { Transaction } from "@/interfaces/interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GraficosTransaccionesProps {
  transactions: Transaction[];
}

const GraficosTransacciones: React.FC<GraficosTransaccionesProps> = ({ transactions }) => {
  // Filtrar ingresos y gastos
  const ingresos = transactions.filter((t) => t.type === "ingreso");
  const gastos = transactions.filter((t) => t.type === "gasto");

  // Calcular datos por categoría
  const calcularDatosPorCategoria = (transacciones: Transaction[]) => {
    const categorias = [...new Set(transacciones.map((t) => t.category))];
    const datos = categorias.map((cat) =>
      transacciones.filter((t) => t.category === cat).reduce((sum, t) => sum + t.amount, 0)
    );
    return { categorias, datos };
  };

  const ingresosPorCategoria = calcularDatosPorCategoria(ingresos);
  const gastosPorCategoria = calcularDatosPorCategoria(gastos);

  const totalIngresos = ingresos.reduce((sum, t) => sum + t.amount, 0);
  const totalGastos = gastos.reduce((sum, t) => sum + t.amount, 0);

  const balance = [
    { label: "Ingresos", value: totalIngresos },
    { label: "Gastos", value: totalGastos },
  ];

  const colores = ["#FC4100", "#00215E", "#D20062", "#D6589F", "#7695FF", "#B31312", "#EFECEC"];

  const opcionesGrafico = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"pie">) => {
            const value = context.raw as number;
            const total = context.dataset.data.reduce((sum: number, val: number) => sum + val, 0);
            const porcentaje = ((value / total) * 100).toFixed(2);
            return `${context.label}: $${value.toLocaleString("es-CO")} (${porcentaje}%)`;
          },
        },
      },
    },
  };

  const datosIngresos = {
    labels: ingresosPorCategoria.categorias.map((cat) =>
      cat.charAt(0).toUpperCase() + cat.slice(1)
    ),
    datasets: [
      {
        data: ingresosPorCategoria.datos,
        backgroundColor: colores,
        hoverBackgroundColor: colores,
      },
    ],
  };

  const datosGastos = {
    labels: gastosPorCategoria.categorias.map((cat) =>
      cat.charAt(0).toUpperCase() + cat.slice(1)
    ),
    datasets: [
      {
        data: gastosPorCategoria.datos,
        backgroundColor: colores,
        hoverBackgroundColor: colores,
      },
    ],
  };

  const datosBalance = {
    labels: balance.map((b) => b.label),
    datasets: [
      {
        data: balance.map((b) => b.value),
        backgroundColor: ["#4ECDC4", "#FF6B6B"],
        hoverBackgroundColor: ["#4ECDC4", "#FF6B6B"],
      },
    ],
  };

  return (
    <div>
      <h1 className={`text-center pb-6 text-2xl font-bold color-titulo-tarjeta ${titulosPrincipales.className}`}>Resumen de transacciones</h1>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ingresos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className={`text-2xl font-bold text-center mb-4 ${SeccionesFont.className} text-[#640D5F]`}>Ingresos</h2>
          <Pie data={datosIngresos} options={opcionesGrafico} />
          <div className="mt-4">
            {ingresosPorCategoria.categorias.map((cat, index) => (
              <p key={cat} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: colores[index] }}
                ></span>{" "}
                {cat.charAt(0).toUpperCase() + cat.slice(1)}: ${ingresosPorCategoria.datos[index].toLocaleString("es-CO")}
              </p>
            ))}
            <p className="text-sm font-bold mt-2">Total: ${totalIngresos.toLocaleString("es-CO")}</p>
          </div>
        </div>

        {/* Gastos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className={`text-2xl font-bold text-center mb-4 ${SeccionesFont.className} text-[#640D5F]`}>Gastos</h2>
          <Pie data={datosGastos} options={opcionesGrafico} />
          <div className="mt-4">
            {gastosPorCategoria.categorias.map((cat, index) => (
              <p key={cat} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: colores[index] }}
                ></span>{" "}
                {cat.charAt(0).toUpperCase() + cat.slice(1)}: ${gastosPorCategoria.datos[index].toLocaleString("es-CO")}
              </p>
            ))}
            <p className="text-sm font-bold mt-2">Total: ${totalGastos.toLocaleString("es-CO")}</p>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className={`text-2xl font-bold text-center mb-4 ${SeccionesFont.className} text-[#640D5F]`}>Balance</h2>
          <Pie data={datosBalance} options={opcionesGrafico} />
          <div className="mt-4">
            {balance.map((b, index) => (
              <p key={b.label} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: ["#4ECDC4", "#FF6B6B"][index],
                  }}
                ></span>{" "}
                {b.label}: ${b.value.toLocaleString("es-CO")}
              </p>
            ))}
            <p className="text-lg font-semibold mt-4">
              Total:{" "}
              <span className={`${balance[0]?.value - balance[1]?.value >= 0 ? "text-green-600" : "text-red-600"}`}>
                ${(balance[0]?.value - balance[1]?.value).toLocaleString("es-CO")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficosTransacciones;
