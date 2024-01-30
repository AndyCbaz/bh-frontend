import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


type LocationsOptionsButtonProps = {
  buttonSelected: boolean;
  setButtonSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
function LocationsOptionsButton({buttonSelected, setButtonSelected}: LocationsOptionsButtonProps) {
  
  const handleClickButton = (button: string) => {
    if (button === "add") {
      setButtonSelected(true);
    } else {
      setButtonSelected(false);
    }
  };
  return (
    <div className="rounded-full border-2 border-principal-gray p-[2px] flex w-[95%]">
      <button
        onClick={() => handleClickButton("add")}
        style={{
          backgroundColor: buttonSelected ? "#f26f1d" : "white",
          color: buttonSelected ? "white" : "black",
        }}
        className="flex  rounded-full p-1 items-center h-full gap-1 justify-center w-[50%]"
      >
        <div className="flex">
          <FontAwesomeIcon
            style={{
              border: "solid",
              borderWidth: 1,
              borderRadius: "50%",
              borderColor: "white",
              padding: 1,
              color: "white",
              height: "2.5vh",
            }}
            icon={faPlus}
          />
        </div>
        <h1 className="text-[2.5vh]">Add Location</h1>
      </button>
      <button
        onClick={() => handleClickButton("my")}
        style={{
          backgroundColor: buttonSelected ? "white" : "#f26f1d",
          color: buttonSelected ? "black" : "white",
        }}
        className="flex  rounded-full p-1 items-center justify-center h-full gap-1 w-[50%]"
      >
        <h1 className="text-[2.5vh]">My Location</h1>
      </button>
    </div>
  );
}
export default LocationsOptionsButton;
