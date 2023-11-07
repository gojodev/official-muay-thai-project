import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';  // Import dayjs for date manipulation

export default function CalendarBirthday({ label , onChange, backgroundColor}) {
  
  // Set the minimum date to two years ago from today
  const twoYearsAgo = dayjs().subtract(2, 'year');

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
        maxDate={twoYearsAgo} // Ensures they can't select any date before than 2 years ago
        textField={ <TextField fullWidth /> }
      />
    </LocalizationProvider>
  );
}