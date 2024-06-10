import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Row, ActivityMeta } from "./types";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: Row[];
  activityMeta: ActivityMeta[];
}

const Chart: React.FC<ChartProps> = ({ data, activityMeta }) => {
  const labels = data.flatMap((row) =>
    row.dayWiseActivity.map((activity) => activity.date)
  );
  const uniqueLabels = Array.from(new Set(labels));

  const datasets = activityMeta?.map((activity) => {
    return {
      label: activity.label,
      data: uniqueLabels.map((label) => {
        return data.reduce((total, row) => {
          const dayActivity = row.dayWiseActivity.find(
            (activity) => activity.date === label
          );
          const activityItem = dayActivity?.items.children.find(
            (item) => item.label === activity.label
          );
          return total + parseInt(activityItem?.count || "0", 10);
        }, 0);
      }),
      borderColor: activity.fillColor,
      fill: false,
    };
  });

  const chartData = {
    labels: uniqueLabels,
    // datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Developer Activity Over the Week",
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
