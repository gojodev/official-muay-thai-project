import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from '../../img/about-page1.jpg';
import { Typography } from '@mui/material';
import { RegoularH1, RegoularH2 } from '../../components/Typography/Typography';
import dashboardTheme from '../../components/DashboardTheme/DashboardTheme';

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid container spacing={2} columns={16} sx={{ height: '100%' }}>
        <Grid
          xs={8}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: "left",
            height: '100%'
          }}>
        </Grid>

        <Grid xs={8} sx={{ bgcolor: 'background.paper', p: 3, height: '100%', overflow: 'auto', width: '40%' }} ml={7}>
          <RegoularH1 color={dashboardTheme.palette.secondary.main}>About</RegoularH1>
          <Typography variant="body1">
            Welcome, your gateway to the world of Muay Thai! We're thrilled that you've landed on our platform.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>Our Mission</RegoularH2>
          <Typography variant="body1">
            Our mission is simple yet powerful: to empower individuals of all ages and fitness levels to discover the benefits of Muay Thai.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>What Sets Us Apart</RegoularH2>
          <Typography variant="body1">
            Highlight what makes your Muay Thai booking and membership website unique. This could include your expertise, the quality of your instructors, your state-of-the-art facilities, or your commitment to providing a personalized experience.
          </Typography>
          <RegoularH2 color={dashboardTheme.palette.secondary.light}>Our Membership Program</RegoularH2>
          <Typography variant="body1">
            As a member, you gain unrestricted access to our daily training programs. Train every day, sharpen your skills, and become the Muay Thai fighter you've always dreamed of being.
          </Typography>
          
        </Grid>
      </Grid>
    </Box>
  );
}
