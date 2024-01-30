import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { Dispatch } from "react";

type TimeClockProps = {
    value: Dayjs | null;
    setValue : Dispatch<React.SetStateAction<Dayjs | null>>;
}
export default function TimeClock({value, setValue}: TimeClockProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        defaultValue={dayjs("2022-04-17T00:00")}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{
          "&.MuiPickersLayout-root": {
            backgroundColor: "#3b4048", //Este es el color del fondo del timepicker
            ".MuiPickersToolbar-root": {
              // Este es el bloque de la hora (header)
              // backgroundColor: "#3b4047", //Este es el color del toolbar en general
              ".MuiPickersToolbar-content": {
                ".MuiTimePickerToolbar-hourMinuteLabel": {
                  ".MuiTypography-root": {
                    // color:'blue' // Este es el color de la hora en general
                  },
                },
                ".MuiTimePickerToolbar-ampmSelection": {
                  ".Mui-selected": {
                    color: "#E6822D", //Color de am o pm seleccionado
                  },
                },
              },
              ".MuiTypography-overline": {
                display: "none",
              },
              ".MuiTypography-root": {
                color: "white", //Este es el color de la hora y am y pm
              },
            },
            ".MuiPickersLayout-contentWrapper": {
              //Estes es el bloque del reloj (main)
              ".MuiTimeClock-root": {
                ".MuiClock-root": {
                  ".MuiClock-clock": {
                    ".MuiClock-squareMask": {
                      //backgroundColor: "#F4D64C", // color del fondo del reloj circular
                    },
                    ".MuiClock-pin": {
                      backgroundColor: "#E6822D",
                    },
                    ".MuiClockPointer-root": {
                      backgroundColor: "#E6822D",
                      ".MuiClockPointer-thumb": {
                        backgroundColor: "#E6822D",
                        borderColor: "#E6822D",
                      },
                    },
                    ".MuiClock-wrapper": {
                      ".MuiClockNumber-root": {
                        color: "white", // Color de los numeros del reloj
                        ".Mui-selected": {
                          color: "white",
                        },
                      },
                    },
                  },
                },
              },
            },
            ".MuiDialogActions-root": {
              //Este es el bloque de actions (footer)
              display: "none",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
