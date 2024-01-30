interface INavHeaderEarningsButtonProps {
  onClick: () => void;
}
const NavHeaderEarningsButton = ({
  onClick,
}: INavHeaderEarningsButtonProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex items-center justify-center rounded-full bg-black p-2"
      >
        <h1 className={`text-[5.5vw] font-bold text-white h-[8vw] text-center w-[18vw]`}>
          <span className="text-green-500">$</span>
          0.00
        </h1>
      </div>
    </>
  );
};

export default NavHeaderEarningsButton;
