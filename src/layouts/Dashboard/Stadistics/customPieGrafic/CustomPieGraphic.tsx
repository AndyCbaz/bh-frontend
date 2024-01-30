import GraficaPieStadistics from "./grafica/Grafica";

type CustomPieGraphicProps = {
  data: string[];
  variables: string[];
  label?: string;
  label2?: string;
};
function CustomPieGraphic({
  data,
  variables,
  label,
  label2,
}: CustomPieGraphicProps) {
  const totalValue = sumNumbers(data);
  const colores = generateWarmColors(variables.length);

  return (
    <div className="flex justify-center items-center gap-2 w-full h-full">
      <div className="flex gap-2 justify-center items-center w-full h-full">
        <div className="flex w-[50%]  justify-center items-center relative h-full">
          <GraficaPieStadistics colores={colores} data={data} />
          <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#3B4048] rounded-full h-[14vh] w-[14vh] flex justify-center items-center">
            <div
              className={`border-primary-orange border-2 rounded-full  justify-center flex items-end  ${
                label ? "w-[12vh] p-1" : "w-[8vh]"
              }`}
            >
              <span
                className={`  ${
                  label2 ? "ml-1 text-white font-bold" : "hidden"
                }`}
              >{label2}</span>
              <h1 className="text-white font-bold">{` ${totalValue}`}</h1>
              <span
                className={`text-[1.5vh]  ${
                  label ? "ml-1 text-white font-bold" : "hidden"
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[45%] flex flex-col gap-2 items-start justify-center">
          {variables.map((variable, index) => (
            <div
              key={index}
              className="flex  gap-2 items-center justify-start w-full"
            >
              <div
                style={{ background: colores[index] }}
                className={`h-[3vh] w-[3vh] rounded-full`}
              ></div>
              <h1 className="text-white text-[1.5vh]">
                {`${data[index]} ${variable}`}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CustomPieGraphic;

//FUNCION PARA SACAR EL TOTAL DE LOS NUMEROS DEL STRING
function sumNumbers(numbers: string[]): number {
  return numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
}

//FUNCION QUE GENERA LOS COLORES CALIDOS
function generateWarmColors(n: number): string[] {
  const colors: string[] = [];

  for (let i = 0; i < n; i++) {
    const hue = Math.floor(Math.random() * 60) + 20;
    const saturation = Math.floor(Math.random() * 40) + 50;
    const lightness = Math.floor(Math.random() * 20) + 50;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    colors.push(color);
  }

  return colors;
}
