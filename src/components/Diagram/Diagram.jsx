import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import s from './Diagram.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      ticks: {
        padding: 5,
        font: {
          weight: 400,
          size: 12,
          color: '#52555F',
        },
      },
    },
    y: {
      ticks: {
        padding: 5,
        font: {
          weight: 400,
          size: 10,
          color: '#52555F',
        },
        count: 9,
      },
    },
  },
};

const Diagram = ({ keysDiagram, valuesDiagram, category }) => {
  const data = {
    labels: keysDiagram,
    datasets: [
      {
        label: category,
        data: valuesDiagram,
        backgroundColor: '#FF751D',
        barThickness: 38,
        borderRadius: 10,
      },
    ],
  };
  return (
    <div className={s.diagram}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Diagram;
