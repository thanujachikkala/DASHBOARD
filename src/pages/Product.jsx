import React from 'react';
import PieChart from '../components/PieChart';
import PieTable from '../components/PieTable';

const Product = () => {
  const severityDistribution = {
    Critical: 4,
    High: 1,
    Medium: 2,
    Low: 3,
  };

  return (
    <div>
      <h1>Severity Distribution</h1>
      <PieChart severityDistribution={severityDistribution} />
      
    </div>
  );
};

export default Product;