import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, ArcElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

const PieChart = ({ severityDistribution }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const chartData = {
      labels: Object.keys(severityDistribution || {}),
      datasets: [
        {
          data: Object.values(severityDistribution || {}),
          backgroundColor: ['red', 'orange', 'yellow', 'green'],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'category',
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.parsed?.formattedValue || '';
              return `${label}: ${value}`;
            },
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      if (chartRef.current.chartInstance) {
        // Destroy the previous chart instance if it exists
        chartRef.current.chartInstance.destroy();
      }

      // Register the required scales
      Chart.register(ArcElement, CategoryScale, LinearScale, Tooltip);

      // Create a new Chart instance
      chartInstance = new Chart(chartRef.current, {
        type: 'pie',
        data: chartData,
        options: chartOptions,
      });

      // Store the chart instance in the ref
      chartRef.current.chartInstance = chartInstance;
    }

    return () => {
      if (chartRef && chartRef.current && chartRef.current.chartInstance) {
        // Destroy the chart instance on component unmount
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [severityDistribution]);

  return (
    <div className="chart-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default PieChart;
