
import React, { useEffect } from 'react';

const DonutChart = () => {
  useEffect(() => {
    import('react-chartjs-2').then(({ Doughnut }) => {
      // Chart configuration
      const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };

     
      const options = {
        responsive: true,
      };

      const ctx = document.getElementById('donutChart').getContext('2d');
      new Doughnut(ctx, {
        data: data,
        options: options,
      });
    });
  }, []);

  return (
    <div>
      <canvas id="donutChart" width="400" height="400"></canvas>
    </div>
  );
};

export default DonutChart;


