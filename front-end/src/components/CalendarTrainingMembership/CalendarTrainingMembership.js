import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';  // Make sure to import dayjs

export default function CalendarTrainingMembership({ label , onChange, backgroundColor}) {

  // Set the minimum date to today
  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          backgroundColor: backgroundColor,
          borderRadius: '5px'
        }}
        fullWidth
        label={label}
        onChange={onChange}
        minDate={today}  // Use today as the minimum date
        textField={ <TextField fullWidth /> }
      />
    </LocalizationProvider>
  );
}