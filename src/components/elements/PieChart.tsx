"use client";
// components/PieChart.tsx

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Define the types for the PieChart props
interface PieChartProps {
  labels: string[]; // Labels for the pie chart sections
  dataValues: number[]; // Values for each label
  backgroundColors?: string[]; // Optional background colors for the segments
  bookName: string;
}

const PieChart: React.FC<PieChartProps> = ({
  labels,
  dataValues,
  bookName,
  backgroundColors = [
    "#FF6384", // Red
    "#36A2EB", // Blue
    "#FFCE56", // Yellow
    "#4BC0C0", // Green
    "#FF9F40", // Orange
    "#C9CBCF", // Light Gray
    "#9966FF", // Purple
    "#FF66B2", // Pink
  ], // Default colors
}) => {
  // Define the pie chart data structure
  const data = {
    labels: labels,
    datasets: [
      {
        label: bookName,
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => `${color}99`), // Semi-transparent border
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mx-auto h-auto max-w-[400px]">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
