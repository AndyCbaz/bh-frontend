import * as React from "react";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

// const minDistance = 1;
type RangeSliderProps = {
  minDistance: number;
    min: number;
    max: number;
    step: number;
    value: number[];
    set: React.Dispatch<React.SetStateAction<number[]>>;
}
export default function RangeSlider({min, max, step, value, set, minDistance}:RangeSliderProps) {
  
  const handleChange1 = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      set([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      set([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };



  return (
    
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        step={step}
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        disableSwap
        sx={{
            color:'#F4D64C',
            "& .MuiSlider-thumb": {
                border: "2px solid #BBBBBB",
                '&:focus, &:hover, &.Mui-active': {
                    boxShadow: 'inherit',
                },
            },
            "& .MuiSlider-rail": {
                backgroundColor: "#BBBBBB",
            },
            "& .MuiSlider-valueLabel": {
                fontSize: "0.9rem",
                backgroundColor: 'unset',
                color:'#BBBBBB',
                top:-2
            }
        }}

      />
    
  );
}
