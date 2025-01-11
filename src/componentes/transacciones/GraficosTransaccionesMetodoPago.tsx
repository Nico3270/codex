"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js";
import { Transaction, PaymentMethod } from "@/interfaces/interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GraficosTransaccionesMetodoPagoProps {
  transactions: Transaction[];
}

const GraficosTransaccionesMetodoPago: React.FC<GraficosTransaccionesMetodoPagoProps> = ({
  transactions,
}) => {
  // Filtrar ingresos y gastos
  const ingresos = transactions.filter((t) => t.type === "ingreso");
  const gastos = transactions.filter((t) => t.type === "gasto");

  // Calcular datos por método de pago
  const calcularDatosPorMetodoPago = (transacciones: Transaction[]) => {
    const metodos = Object.values(PaymentMethod);
    const datos = metodos.map((metodo) =>
      transacciones.filter((t) => t.paymentMethod === metodo).reduce((sum, t) => sum + t.amount, 0)
    );
    return { metodos, datos };
  };

  const ingresosPorMetodo = calcularDatosPorMetodoPago(ingresos);
  const gastosPorMetodo = calcularDatosPorMetodoPago(gastos);

  const totalIngresos = ingresos.reduce((sum, t) => sum + t.amount, 0);
  const totalGastos = gastos.reduce((sum, t) => sum + t.amount, 0);

  // Calcular balance por método de pago
  const balancePorMetodo = ingresosPorMetodo.metodos.map((metodo, index) => ({
    metodo,
    balance: ingresosPorMetodo.datos[index] - (gastosPorMetodo.datos[index] || 0),
  }));

  const balanceLabels = balancePorMetodo.map((item) => item.metodo);
  const balanceData = balancePorMetodo.map((item) => item.balance);

  // Configuración de colores
  const colores = [
    "#FFD700", // Dorado
    "#4CAF50", // Verde
    "#2196F3", // Azul
    "#FF5722", // Naranja
    "#9C27B0", // Morado
    "#F44336", // Rojo
  ];

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
    labels: ingresosPorMetodo.metodos,
    datasets: [
      {
        data: ingresosPorMetodo.datos,
        backgroundColor: colores,
        hoverBackgroundColor: colores,
      },
    ],
  };

  const datosGastos = {
    labels: gastosPorMetodo.metodos,
    datasets: [
      {
        data: gastosPorMetodo.datos,
        backgroundColor: colores,
        hoverBackgroundColor: colores,
      },
    ],
  };

  const datosBalance = {
    labels: balanceLabels,
    datasets: [
      {
        data: balanceData,
        backgroundColor: colores,
        hoverBackgroundColor: colores,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold pb-6">Resumen por Método de Pago</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ingresos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-xl font-bold mb-4 text-green-600">Ingresos</h2>
          <Pie data={datosIngresos} options={opcionesGrafico} />
          <div className="mt-4">
            {ingresosPorMetodo.metodos.map((metodo, index) => (
              <p key={metodo} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: colores[index] }}
                ></span>{" "}
                {metodo}: ${ingresosPorMetodo.datos[index].toLocaleString("es-CO")}
              </p>
            ))}
            <p className="text-sm font-bold mt-2">
              Total: ${totalIngresos.toLocaleString("es-CO")}
            </p>
          </div>
        </div>

        {/* Gastos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-xl font-bold mb-4 text-red-600">Gastos</h2>
          <Pie data={datosGastos} options={opcionesGrafico} />
          <div className="mt-4">
            {gastosPorMetodo.metodos.map((metodo, index) => (
              <p key={metodo} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: colores[index] }}
                ></span>{" "}
                {metodo}: ${gastosPorMetodo.datos[index].toLocaleString("es-CO")}
              </p>
            ))}
            <p className="text-sm font-bold mt-2">
              Total: ${totalGastos.toLocaleString("es-CO")}
            </p>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-xl font-bold mb-4 text-blue-600">Balance</h2>
          <Pie data={datosBalance} options={opcionesGrafico} />
          <div className="mt-4">
            {balancePorMetodo.map((item, index) => (
              <p key={item.metodo} className="text-sm">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: colores[index] }}
                ></span>{" "}
                {item.metodo}: ${item.balance.toLocaleString("es-CO")}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficosTransaccionesMetodoPago;
