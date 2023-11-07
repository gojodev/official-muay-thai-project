import React from "react";
import '../../App.css';
import { Box,Paper } from "@mui/material";
import Home2 from "./Home-2";

export default function Home() {

    return (
        <div>
            <Paper sx={{backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%'}}>
                <Box sx={{ display: 'flex', alignItems:"center", flexDirection: "row", width: '100%'}} >
                    <Home2/>
                </Box>
            </Paper>
        </div>
    );
}