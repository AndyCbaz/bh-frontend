//IMPORTACIONES DE MUIXPRO
import { IconButton, styled } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro";
import {
  DateRangePickerDay,
  DateRangePickerDayProps,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar as DateRangeCalendarCustom } from "@mui/x-date-pickers-pro/DateRangeCalendar";
// IMPROTACIONES DE DAYJS
import { Dayjs } from "dayjs";

type DateRangeCalendarProps = {
  value: DateRange<Dayjs>;
  setValue: React.Dispatch<React.SetStateAction<DateRange<Dayjs>>>;
};
function DateRangeCalendar({ value, setValue }: DateRangeCalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangeCalendarCustom
        value={value}
        calendars={1}
        slots={{
          day: StyledDateRangePickerDay,
          nextIconButton: StyledPickerNextIconButton,
          previousIconButton: StyledPickerPreviousIconButton,
        }}
        onChange={(newValue) => setValue(newValue)}
        
      />
    </LocalizationProvider>
  );
}
export default DateRangeCalendar;

const StyledDateRangePickerDay = styled(DateRangePickerDay)({
  "&.MuiDateRangePickerDay-rangeIntervalDayHighlight": {
    backgroundColor: "#FEFB77",
  },
  "&.MuiDateRangePickerDay-lastVisibleCell": {
    backgroundColor: "#FEFBD1",
    borderRadius: "50%",
  },
  "&.MuiDateRangePickerDay-firstVisibleCell": {
    backgroundColor: "#FEFBD1",
    borderRadius: "50%",
  },
  ".MuiDateRangePickerDay-day": {
    fontSize: "1.6vh",
    "&.Mui-selected": {
      backgroundColor: "#E6822D",
      ":hover": {
        backgroundColor: "#E6822D",
      },
      ":focus": {
        backgroundColor: "#E6822D",
      },
    },
    "&.MuiPickersDay-today": {
      color: "#E6822D",
      "&.Mui-selected":{
        color:'white'
      },
      border: 0,
    },
    "&:focus": {
      backgroundColor: "#E6822D",
    },
  },
  "&.MuiDateRangePickerDay-rangeIntervalDayPreview": {
    "&.Mui-selected": {
      backgroundColor: "#E6822D",
    },
    "&:focus": {
      backgroundColor: "#E6822D",
    },
  },
}) as React.ComponentType<DateRangePickerDayProps<Dayjs>>;

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
