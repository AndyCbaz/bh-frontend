import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileHeaderProps = {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
};
function ProfileHeader({ img, setImg }: ProfileHeaderProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImg(e.target?.result as string);
        console.log(e.target?.result as string)
      };
    }
  };
  return (
    <>
      <div className={`bg-principal-main flex justify-center items-center rounded-full relative w-[15vw] h-[15vw] ${img !== '' ? 'opacity-0' : ''}`}>
        <FontAwesomeIcon
          style={{
            color: "#3B4047",
            opacity: img !== '' ? 0 : 1,
            height: "8vw",
            width: "8vw",
            
          }}
          icon={faImages}
        />
        <div className="absolute bottom-0 right-0 rounded-full w-[7vw] h-[7vw] leading-[33px] overflow-hidden">
          <FontAwesomeIcon
            style={{
              color: "white",
              backgroundColor: "#E6822D",
              width: "3vw",
              height: "3vw",
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

export default ProfileHeader;
