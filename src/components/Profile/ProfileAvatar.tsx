import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileAvatar() {
  const [img, setImg] = useState<string | undefined>(undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="bg-[#3B4047] flex justify-center items-center rounded-full relative w-[25vw] h-[25vw]">
        <FontAwesomeIcon
          style={{
            color: "#3B4047",
            backgroundColor: "#D4D4D6",
            display: img !== undefined ? "none" : "block",
            height: "19vw",
            width: "19vw",
            borderRadius: "50%",
            padding: "1vh",
          }}
          icon={faUser}
        />
        <img
          src={img}
          alt="profileimg"
          className={`${
            img !== undefined ? "block" : "hidden"
          } w-full h-full rounded-full`}
        />
        <div className="absolute bottom-0 right-0 rounded-full w-[7vw] h-[7vw] leading-[33px] overflow-hidden">
          <FontAwesomeIcon
            style={{
              color: "white",
              backgroundColor: "#E6822D",
              width: "4vw",
              height: "4vw",
              borderRadius: "50%",
              padding: "0.5vh",
              overflow: "hidden",
            }}
            icon={faPlus}
          />
          <input
            onChange={handleChange}
            className="absolute opacity-0 scale-150"
            type="file"
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileAvatar;
