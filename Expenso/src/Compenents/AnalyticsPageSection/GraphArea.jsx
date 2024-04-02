import React from "react";
import { Bar } from "react-chartjs-2";
import "./GraphArea.css";
import Chart from "chart.js/auto";
import {
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
} from "chart.js";

export const GraphArea = ({ graphValue }) => {
  Chart.register(LinearScale, CategoryScale, BarController, BarElement);
  return (
    <div className="graphContainer">
      <div className="graphSection">
        <Bar
          data={{
            labels: graphValue.xValue,
            datasets: [
              {
                label: "Expense",
                data: graphValue.Expense,
                backgroundColor: "#B7D1F5",
                borderColor: "#062AAA",
                borderWidth: 1,
              },
              {
                label: "Savings",
                data: graphValue.Savings,
                backgroundColor: "#ECF3FC",
                borderColor: "#062AAA",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false, // To allow resizing
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(6, 42, 170, 0.2)", // Reduce opacity for grid lines
                  borderWidth: 1, // Reduce grid line width
                },
                ticks: {
                  color: "#062AAA",
                },
              },
              x: {
                grid: {
                  color: "rgba(6, 42, 170, 0.2)", // Reduce opacity for grid lines
                  borderWidth: 1, // Reduce grid line width
                },
                ticks: {
                  color: "#062AAA",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
