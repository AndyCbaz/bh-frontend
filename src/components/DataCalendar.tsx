import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateCalendar as DateCalendarCustom,
  PickersCalendarHeader,
} from "@mui/x-date-pickers/DateCalendar";

function DateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendarCustom
        slots={{
          day: StyledPickersDay,
          calendarHeader: StyledPickersCalendarHeader,
          nextIconButton: StyledPickerNextIconButton,
          previousIconButton: StyledPickerPreviousIconButton,
        }}
        views={["day"]}
        
        sx={{
          width: "100%",
          "&.MuiDateCalendar-root": {
            minHeight: "100%",              
            
            ".MuiDayCalendar-root": {              
              ".MuiDayCalendar-header": {                
                ".MuiDayCalendar-weekDayLabel": {
                  color: "white",
                  fontSize: "2vh",
                  fontWeight: "bold",
                  width: "100%",
                  
                },
              },
              ".MuiDayCalendar-slideTransition":{
                ".MuiDayCalendar-monthContainer":{
                  ".MuiDayCalendar-weekContainer":{
                    ".MuiPickersDay-root":{
                      "&.Mui-selected":{
                        ":hover":{
                          backgroundColor: alpha("#E6822D", 0.8),
                        }
                      },
                      width:'100%',
                      
                      color:'white',
                      "&.MuiPickersDay-today":{
                        color:'#E6822D',
                        border:0,
                        "&.Mui-selected":{
                          color:'white'
                        }
                      }
                    }
                  }
                }
              }
            },
            ".MuiPickersCalendarHeader-root":{
              ".MuiPickersCalendarHeader-labelContainer":{
                "&.MuiPickersCalendarHeader-labelContainer":{
                  color:'white',
                  fontSize:'2.5vh',
                  fontWeight:'bold',
                }
              }
            }
          },
       
        }}

      />
    </LocalizationProvider>
  );
}
export default DateCalendar;

import { alpha, styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers";
import { IconButton } from "@mui/material";

const StyledPickersDay = styled(PickersDay)({
  "&.Mui-selected": {
    backgroundColor: "#E6822D",
    "&:focus": {
      backgroundColor: alpha("#E6822D", 0.8),
    },
  },
  "&.MuiPickersDay-root": {
    fontSize: "2vh",
 
  },
});

const StyledPickersCalendarHeader = styled(PickersCalendarHeader)({
  "&.MuiPickersCalendarHeader-root": {
    color: "white",
  },
});


const StyledPickerNextIconButton = styled(IconButton)({
  "&.MuiIconButton-root": {
    color: "#F4D64C",
    // backgroundColor: "#F4D64C",
  },
});

const StyledPickerPreviousIconButton = styled(IconButton)({
  "&.MuiIconButton-root": {
    color: "#F4D64C",
    // backgroundColor: "#F4D64C",
  },
});