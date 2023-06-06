import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
  const data = {
    labels: [
      'M1: Improper Platform Usage',
      'M2: Insecure Data Storage',
      'M3: Insecure Communication',
      'M5: Insufficient Cryptography',
      'M7: Client Code Quality',
      'M6: Insecure Authorization',
      'M10: Extraneous Functionality',
    ],
    datasets: [
      {
        label: 'OWASPdistribution',
        data: [3, 1, 1, 2, 1, 1, 1],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Fill color of the area under the line
        borderColor: 'rgba(75, 192, 192, 1)', // Color of the line
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the data points
        pointBorderColor: '#fff', // Border color of the data points
        pointHoverRadius: 5, // Radius of the data points on hover
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)', // Background color of the data points on hover
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // Border color of the data points on hover
        pointHitRadius: 10, // Radius within which the data points are considered to be 'hit'
        pointBorderWidth: 2, // Border width of the data points
      },
    ],
  };

  return <Line data={data} />;
};

export default LineGraph;
