
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};


type GraficaPieStadisticsProps = {
  data: string[];
  colores : string[];
};

function GraficaPieStadistics({ data, colores }: GraficaPieStadisticsProps) {
  const dataGraph = {
    datasets: [
      {
        data: data,
        backgroundColor: colores,
        borderColor: ["white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie  data={dataGraph} options={options} />;
}

export default GraficaPieStadistics;