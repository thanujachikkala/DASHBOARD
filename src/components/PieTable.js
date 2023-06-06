import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RadarChart = ({ severityDistribution }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }

      const chartConfig = {
        type: 'radar',
        data: {
          labels: Object.keys(severityDistribution || {}),
          datasets: [
            {
              label: 'Severity Distribution',
              data: Object.values(severityDistribution || {}),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              pointBackgroundColor: 'rgba(255, 99, 132, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            angleLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        },
      };

      chartInstance = new Chart(chartRef.current, chartConfig);
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Cleanup on component unmount
      }
    };
  }, [severityDistribution]);

  return (
    <div className='chart-container'>
      <canvas ref={chartRef} className='radarchart' />
    </div>
  );
};

export default RadarChart;
