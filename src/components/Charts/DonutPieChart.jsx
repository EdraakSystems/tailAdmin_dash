import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./DonutPieChart.css";

Chart.register(CategoryScale);

const DonutPieChart = () => {
  const data = {
    labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    datasets: [
      {
        data: [65, 34, 45, 12],
        backgroundColor: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 90, // Adjust this value to make the donut circle wider
    responsive: true,
    maintainAspectRatio: false, // Set this to false to allow aspectRatio customization
    aspectRatio: 2, // Adjust this value to make the chart wider (higher value) or taller (lower value)
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutPieChart;
