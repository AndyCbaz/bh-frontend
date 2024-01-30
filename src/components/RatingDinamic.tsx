//IMPORTACION DE FONTAWESOME
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// IMPORTACIONES DE REACT
import { useState } from "react";

function RatingDinamic() {
  const [value, setValue] = useState<number>(0);
  const spaces: boolean[] = [];
  for (let i = 0; i < 5; i++) {
    if (i <= value) {
      spaces.push(true);
    } else {
      spaces.push(false);
    }
  }

  const setSpace = (value:number) => {
    setValue(value);
  }
  return (
    <div className="flex justify-center gap-[2vh] py-2">
      {spaces.map((item,index) => (
        
          <button key={index} onClick={()=>setSpace(index)}>
            <FontAwesomeIcon
              style={{ color: "#F4D64C", width: "4vh", height: "4vh" }}
              icon={item ? faStarSolid : faStar}
            />
          </button>
        
      ))}
    </div>
  );
}
export default RatingDinamic;
