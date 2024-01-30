import {useState} from 'react'
type CheckBoxProps = {
  items: string[];
  group: string;
};
function CheckBox({ items,group }: CheckBoxProps) {
    const [check,setCheck] = useState<number>(0)
  return (
    <div className="flex flex-col">
      {items.map((item,index) => (
        <label key={index} className="inline-flex items-center">
          <input
          onChange={()=>setCheck(index)}
          checked={index===check}
            type="checkbox"
            name={`${item}-${group}`}
            className="w-4 h-4 accent-[#F4D64C]"
          />
          <span className="ml-2 text-gray-700 text-[2vh]">{item}</span>
        </label>
      ))}
    </div>
  );
}
export default CheckBox;
