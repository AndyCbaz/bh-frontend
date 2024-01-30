type SelectMenuProps = {
    items: string[]
}
function SelectMenu({items}: SelectMenuProps) {
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg flex my-[0.5vh] p-2 "
        defaultValue={"Never"}
      >
        {items.map((item,index)=>(
        <option key={index} value={item}>{item}
        </option>    
        ))}
      </select>
    </>
  );
}
export default SelectMenu;
