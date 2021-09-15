import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
const Charts = ({ stats, bases, name, color }) => {
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
    return (React.createElement("div", { className: "m-auto w-64 h-72" },
        React.createElement("canvas", { ref: chartRef, width: "300", height: "300" })));
};
export default Charts;
