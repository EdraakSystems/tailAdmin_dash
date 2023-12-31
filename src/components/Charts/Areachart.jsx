import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const AreaChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [23, 42, 13, 67, 35, 79, 58],
        backgroundColor: "rgba(60, 80, 224, 0.5)", // #3C50E0 with alpha 0.5
        borderColor: "rgba(60, 80, 224, 1)", // Solid border color
        borderWidth: 2,
        pointBorderColor: "rgba(60, 80, 224, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        fill: "origin",
      },
      {
        label: "Sales",
        data: [10, 25, 18, 7, 45, 32, 88],
        backgroundColor: "rgba(128, 202, 238, 0.5)", // #80CAEE with alpha 0.5
        borderColor: "rgba(128, 202, 238, 1)", // Solid border color
        borderWidth: 2,
        pointBorderColor: "rgba(128, 202, 238, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        fill: "origin",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AreaChart;
