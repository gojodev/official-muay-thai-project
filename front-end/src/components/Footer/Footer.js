import { Box } from "@mui/system";
import styled from 'styled-components';
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';

export default function Footer() {

    const NewInstagramIcon = styled(InstagramIcon)`
        font-size: 300%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #C13584;
        }`
    const NewPhoneAndroidIcon = styled(PhoneAndroidIcon)`
        font-size: 300%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #3876BF;
        }`

    const NewEmailIcon = styled(EmailIcon)`
        font-size: 300%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #79AC78;
        }`

    return (
        <Box 
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '12%',
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Grid container justifyContent="center" spacing={3} alignItems="center" sx={{ height: '100%', width: '70%' }}>
                <Grid item xs={4}>
                    <Link underline="none" href="https://www.instagram.com/daniele_farriciello/" target="_blank" rel="noopener noreferrer">
                        <NewInstagramIcon color='primary' />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link underline="none" href="tel:+353830097215" target="_blank" rel="noopener noreferrer">
                        <NewPhoneAndroidIcon color='primary' />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link underline="none" href="mailto:daniele.farriciello.03@gmail.com" target="_blank" rel="noopener noreferrer">
                        <NewEmailIcon color='primary'/>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
