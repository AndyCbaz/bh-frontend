type SwitchProps = {
  name: string;
  value: string;
  state: boolean;
  switchClick: () => void;
};
function Switch({ value, name, state, switchClick: switchClick }: SwitchProps) {
  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          name={name}
          type="checkbox"
          onChange={() => {}}
          value={value}
          className="peer sr-only"
          checked={state}
          onClick={() => switchClick()}
        />
        <div
          className={`h-[30px] w-[50px] rounded-full bg-gray-300                     after:absolute after:left-[5px] after:top-[5px] after:h-[20px] after:w-[20px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all                                        ${
            state
              ? ' peer-checked:bg-primary-orange peer-checked:after:translate-x-[20px] peer-checked:after:border-white'
              : ''
          }`}
        ></div>
      </label>
    </>
  );
}
export default Switch;
