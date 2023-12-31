import React from 'react';
import TextField from '@mui/material/TextField';

export default function RegularTextField({ type, name, id, autoComplete, label, children, onChange, placeholder, maxRows, minRows, required, backgroundColor }) {

    return (
        <TextField
            sx={{
                width: '100%',
                backgroundColor: backgroundColor,
                borderRadius: '5px'
            }}
            variant="outlined"
            name={name}
            id={id}
            autoComplete={autoComplete}
            type={type}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            maxRows={maxRows}
            minRows={minRows}
            required= {required}
        >
            {children}
        </TextField>
    )
}