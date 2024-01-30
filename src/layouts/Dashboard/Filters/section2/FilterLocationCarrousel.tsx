//IMPORTACIOENS DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTACIONES DE REACT
import { useState } from "react";
import { itemsFilterLocation } from "../../../../constants/generalItems/Filters";

type FilterLocationCarrouselProps = {
  allLocationState: boolean;
};
function FilterLocationCarrousel({
  allLocationState,
}: FilterLocationCarrouselProps) {
  const [locationSelected, setLocationSelected] = useState<number>(0);
  return (
    <>
      <div className="flex gap-3 snap-x snap-mandatory overflow-scroll scroll-x-auto ">
        {itemsFilterLocation.map((item, index) => (
          <div
            key={index}
            onClick={() => setLocationSelected(index)}
            className={`snap-start border-2  rounded-2xl flex flex-col min-w-[60%] ${
              allLocationState
                ? "bg-primary-gray-light border-primary-gray-light"
                : locationSelected === index
                ? "bg-primary-gray-light border-primary-gray-light"
                : "border-primary-gray"
            }`}
          >
            {item.map((element, indexVal) => (
              <div
                key={indexVal}
                className="flex gap-4 px-2 py-2 items-center h-full"
              >
                <div
                  className={`${
                    allLocationState
                      ? "bg-white"
                      : locationSelected === index
                      ? "bg-white"
                      : "bg-primary-gray-light"
                  } p-1 rounded-full flex`}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "#757575",
                      width: "2.5vh",
                      height: "2.5vh",
                    }}
                    icon={element.icon}
                  />
                </div>
                <h1
                  className={`text-[1.5vh] ${
                    allLocationState
                      ? "text-white"
                      : locationSelected == index
                      ? "text-white"
                      : ""
                  }`}
                >
                  {element.title}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
export default FilterLocationCarrousel;
