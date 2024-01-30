//IMPORTACION DE FONTAWESO
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RatingStatic({ value, enable }: { value: number; enable: boolean }) {
  const values: boolean[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      values.push(true);
    } else {
      values.push(false);
    }
  }

  return (
    <>
      <div className="flex items-center space-x-1">
        {values.map((item, index) => (
          <div key={index}>
            {enable ? (
              <FontAwesomeIcon
                style={{
                  color: item ? "#F26F1D" : "#D4D4D4",
                  width: "3vh",
                  height: "3vh",
                  padding: 1,
                  borderRadius: "50%",
                }}
                icon={faStar}
              />
            ) : (
              <FontAwesomeIcon
                style={{
                  color: item ? "#757575" : "#D4D4D4",
                  width: "3vh",
                  height: "3vh",
                  padding: 1,
                  borderRadius: "50%",
                }}
                icon={faStar}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default RatingStatic;
