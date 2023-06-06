import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const BarGraph = () => {
  // Data for the bar graph
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
        label: 'OWASP Distribution',
        data: [3, 1, 1, 2, 1, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // M1
          'rgba(54, 162, 235, 0.6)', // M2
          'rgba(255, 206, 86, 0.6)', // M3
          'rgba(75, 192, 192, 0.6)', // M5
          'rgba(153, 102, 255, 0.6)', // M7
          'rgba(255, 159, 64, 0.6)', // M6
          'rgba(255, 99, 132, 0.6)', // M10
        ],
      },
    ],
  };

  return <Bar data={data} />;
};

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
        label: 'OWASP Distribution',
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

const Graphs = () => {
  return (
    <div className="graphs">
      <div id="section4" className="graph-section">
        <h1>OWASP Distribution Bar Graph</h1>
        <BarGraph />
      </div>
      <div id="section4" className="graph-section">
        <h1>OWASP Distribution Line Graph</h1>
        <LineGraph />
      </div>
    </div>
  );
};

export default Graphs;
