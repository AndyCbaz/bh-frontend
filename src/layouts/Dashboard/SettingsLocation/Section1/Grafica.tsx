
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
const data = {
  datasets: [
    {
      data: [33, 33, 33],
      backgroundColor: ["#E5C646", "#F4E9BD", "#F9F5E5"],
      borderColor: ["white", "white", "white"],
      borderWidth: 1,
    },
  ],
};

type GraficaProps = {
  handleClickGraph: () => void;
};
function Grafica({ handleClickGraph }: GraficaProps) {
  return <Pie onClick={handleClickGraph} data={data} options={options} />;
}

export default Grafica;