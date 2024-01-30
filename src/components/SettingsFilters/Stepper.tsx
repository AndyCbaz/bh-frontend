import { motion } from "framer-motion";

type StepperProps = {
  progress: string;
  step: number;
};
function Stepper({ progress, step }: StepperProps) {
  return (
    <div className="flex justify-center items-center w-full relative h-[30px] my-2">
      {/* Progress Bar */}
      <div className="w-[68%] bg-primary-gray h-[40%]">
        <motion.div
          animate={{ width: progress }}
          className="h-full  p-1 bg-primary-orange"
        ></motion.div>
      </div>
      {/* CheckPoint */}
      <div className="flex justify-between items-center h-[100%] absolute w-[70%]">
        <div
          style={{ backgroundColor: step <= 0 ? "#3B4048" : "#E6822D" }}
          className="h-[5vh] w-[5vh] bg-primary-gray rounded-full flex justify-center items-center"
        >
          <div
            style={{ display: step <= 0 ? "flex" : "none" }}
            className="h-[4.2vh] w-[4.2vh] font-bold rounded-full justify-center items-center bg-primary-gray-light text-[3vh]"
          >
            1
          </div>
        </div>
        <div
          style={{ backgroundColor: step <= 1 ? "#3B4048" : "#E6822D" }}
          className="h-[5vh] w-[5vh] bg-primary-gray rounded-full flex justify-center items-center"
        >
          <div
            style={{ display: step <= 1 ? "flex" : "none" }}
            className="h-[4.2vh] w-[4.2vh] font-bold rounded-full flex justify-center items-center bg-primary-gray-light text-[3vh]"
          >
            2
          </div>
        </div>
        <div
          style={{ backgroundColor: step <= 2 ? "#3B4048" : "#E6822D" }}
          className="h-[5vh] w-[5vh] bg-primary-gray rounded-full flex justify-center items-center"
        >
          <div
            style={{ display: step <= 2 ? "flex" : "none" }}
            className="h-[4.2vh] w-[4.2vh] font-bold rounded-full justify-center items-center bg-primary-gray-light text-[3vh]"
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;