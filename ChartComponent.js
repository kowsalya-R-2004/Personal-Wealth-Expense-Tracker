import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ChartComponent({ transactions }) {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    let data = {};

    transactions.forEach(t => {
      if (t.type === "Expense") {
        data[t.category] = (data[t.category] || 0) + t.amount;
      }
    });

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: Object.keys(data),
        datasets: [{ data: Object.values(data) }]
      }
    });
  }, [transactions]);

  return <canvas ref={chartRef}></canvas>;
}

export default ChartComponent;
