import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
          ticks: {
              font: {
                  size:6,
              }
          }
      },
      y: {
          ticks: {
              font: {
                  size: 10,
              }
          }
      }                       
  }
  };
  
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];
  
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [33, 33, 35,40,50,86,96,85,74,85,6,74,52],
        backgroundColor: "#E6822D",
      },
    ],
    
  };
  
  export function CustomBarGraphic() {
    return <Bar options={options} data={data} />;
  }
  