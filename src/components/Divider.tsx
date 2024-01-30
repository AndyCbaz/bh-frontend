import { useEffect, useState } from 'react';

interface IDividerProps {
  color: string; // Colores de la paleta unicamente
  size: number; // 0, 1, 2, 4, 8
}
function Divider({ color, size }: IDividerProps) {
  const [borderSize, setBorderSize] = useState<string>('border-t');
  const [borderColor, setBorderColor] = useState<string>('border-white');

  useEffect(() => {
    const newSize = changeSizeBorder({ size });
    setBorderSize(newSize);
    setBorderColor(`border-${color}`);
  }, [color, size]);

  return <div className={`${borderSize} ${borderColor} my-0  flex`} />;
}
export default Divider;

interface IchangeSizeBorder {
  size: number;
}
const changeSizeBorder = ({ size }: IchangeSizeBorder) => {
  if (size === 0) {
    return 'border-t-0';
  } else if (size === 1) {
    return `border-t`;
  } else if (size === 2) {
    return `border-t-2`;
  } else if (size === 4) {
    return `border-t-4`;
  } else if (size === 8) {
    return `border-t-8`;
  } else {
    return `border-t-0`;
  }
};
