import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGroupArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
type ButtonsGroupProps = {
  items: {
    title: string;
    icon?: IconDefinition;
    iconEnable: boolean;
    variable?: string;
  }[];
  buttonSelected: number;
  setButtonSelected: React.Dispatch<React.SetStateAction<number>>;
  vertical?: boolean;
  textSizes?: string;
  otherStates?: boolean;
};

function ButtonsGroup({
  items,
  buttonSelected,
  setButtonSelected,
  vertical = false,
  textSizes = "text-[2.5vw]",
  otherStates
}: ButtonsGroupProps) {
  return (
    <div className="rounded-full border-2 border-primary-gray p-[2px] flex w-full bg-white">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setButtonSelected(index)}
          className={`flex ${
            vertical ? "flex-col p-1" : "p-2 gap-1"
          } rounded-full  items-center justify-center h-full  flex-grow ${
            otherStates ? 'bg-[#f26f1d] text-white' :
            buttonSelected === index
              ? "bg-[#f26f1d] text-white"
              : "bg-white text-black"
          }`}
        >
          {/* variable */}
          <h1 className="text-[3vh] font-bold leading-6">{item.variable}</h1>

          {/* icono */}
          <div className={`${item.iconEnable ? "flex" : "hidden"}`}>
            <FontAwesomeIcon
              style={{
                // border: "solid",
                // borderWidth: 1,
                borderRadius: "50%",
                borderColor: "white",
                padding: 1,
                color: otherStates ? 'white' : buttonSelected === index ? "white" : "black",
                height: "4vw",
                width: "4vw",
              }}
              icon={item.icon === undefined ? faGroupArrowsRotate : item.icon}
            />
          </div>
          {/* label */}
          <h1 className={`font-semibold ${textSizes}`}>{item.title}</h1>
        </button>
      ))}
    </div>
  );
}
export default ButtonsGroup;
