// src/components/RevenueChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {




  const revenueData = [5000000, 7000000, 8000000, 6000000, 7500000, 9000000, 6500000, 8700000, 9600000, 10200000, 11000000, 11500000];;

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Pendapatan (IDR)',
        data: revenueData,
        backgroundColor: 'rgba(34, 197, 94, 0.7)', 
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pendapatan Bulanan',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Pendapatan Bulanan</h2>
      <div className='hidden md:block'>
      <Bar data={data} options={options} className='' />
      </div>
    </div>
  );
};

export default RevenueChart;