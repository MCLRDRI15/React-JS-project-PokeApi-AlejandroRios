
import React, { FunctionComponent, useEffect, useRef } from "react";
import Chart from "chart.js";

type ChartProps = {
  stats: string[];
  bases?: number[];
  name: string;
  color: string;
};

const Charts: FunctionComponent<ChartProps> = ({
  stats,
  bases,
  name,
  color,
}) => {
  const chartRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    const ctx: any = chartRef.current.getContext("2d");
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
    <div className="m-auto w-64 h-72">
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default Charts;
