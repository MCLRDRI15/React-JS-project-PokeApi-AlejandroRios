import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import "./ChartsCompare.module.css";

const DobleCharts = ({ stats, bases, name, color, bases2, name2, color2 }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: stats,
        datasets: [
          {
            label: String(name).toUpperCase(),
            data: bases,
            backgroundColor: [color, color, color, color, color, color],
            borderColor: [color, color, color, color, color, color],
            borderWidth: 1,
          },
          {
            label: String(name2).toUpperCase(),
            data: bases2,
            backgroundColor: [color2, color2, color2, color2, color2, color2],
            borderColor: [color2, color2, color2, color2, color2, color2],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <div className="rectangles">
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default DobleCharts;
