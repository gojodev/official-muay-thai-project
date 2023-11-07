import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Button, alpha } from "@mui/material";
import membershipPic from '../../img/membership.jpg';
import membershipPic2 from '../../img/mem2.jpg'; // Note: this image is not used
import dashboardTheme from '../../components/DashboardTheme/DashboardTheme';
import { useNavigate } from "react-router-dom";

export default function Home2() {

    const navigate = useNavigate();

    function clickPrivateLessonButton() {
        navigate("/newBooking");
    }

    function clickMembershipButton() {
        navigate("/membershipPage");
    }
    

    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw' }}>
                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                    <CardMedia
                        component="img"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            transform: 'scale(1.15)', /* l'immagine sara al 115% elimimando lo spazio tra le immagini*/
                            transition: 'transform 0.5s, opacity 0.5s', /*si traforma in 0.5 secondi*/
                            filter: 'brightness(40%)',  // Apply the darkening effect here using the brightness filter
                            ":hover": {
                                opacity: '1',
                                transform: 'scale(1.03)' /* Torna alla normalita sembrando più piccola */
                            }
                        }}
                        image={membershipPic}
                        alt="membership pic"
                    />
                    <CardActions
                        disableSpacing
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={clickMembershipButton}
                            sx={{
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '200%',
                                borderRadius: '20px',
                                fontSize: '150%',         // Increase font size to make text larger
                                padding: '15px 30px',       // Increase padding for a larger button
                                backgroundColor: alpha(dashboardTheme.palette.primary.main, 0.7),
                                transition: 'transform 0.5s, color 0.5s, background 0.5s',
                                ':hover': {
                                    color: dashboardTheme.palette.primary.dark,
                                    backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.85)
                                }
                            }}
                        >
                            BECOME A MEMBER
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box sx={{ height: '100vh', width: '100vw' }}>
                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                    {/* Overlay for darkening the image */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                    <CardMedia
                        component="img"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            transform: 'scale(1.15)', /* l'immagine sara al 115% elimimando lo spazio tra le immagini*/
                            transition: 'transform 0.5s, opacity 0.5s', /*si traforma in 0.5 secondi*/
                            filter: 'brightness(40%)',  // Apply the darkening effect here using the brightness filter
                            ":hover": {
                                opacity: '1',
                                transform: 'scale(1.03)' /* Torna alla normalita sembrando più piccola */
                            }
                        }}
                        image={membershipPic2}
                        alt="membership pic"
                    />
                    <CardActions
                        disableSpacing
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={clickPrivateLessonButton}
                            sx={{
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '200%',
                                borderRadius: '20px',
                                fontSize: '150%',         // Increase font size to make text larger
                                padding: '15px 30px',       // Increase padding for a larger button
                                backgroundColor: alpha(dashboardTheme.palette.primary.dark, 0.7),
                                transition: 'transform 0.5s, color 0.5s, background 0.5s',
                                ':hover': {
                                    color: dashboardTheme.palette.primary.dark,
                                    backgroundColor: alpha(dashboardTheme.palette.secondary.main, 0.85)
                                }
                            }}
                        >
                            PRIVATE LESSON
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}