import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { alpha, Button } from '@mui/material';
import RegularTextField from '../TextField/TextField';
import CalendarBirthday from '../CalendarBirthday/CalendarBirthday'; // Adjust the import path according to your project
import CalendarTrainingMembership from '../CalendarTrainingMembership/CalendarTrainingMembership'; // Adjust the import path according to your project
import dashboardTheme from '../../components/DashboardTheme/DashboardTheme';
import AlertModal from '../AlertModal/AlertModal';
import { useUser } from "../../components/UserContext";


export default function ModifyFormBooking({ setModifyOpen, currentBooking }) {
    const { user, setUser } = useUser();
    const [fullName, setFullName] = React.useState('');
    const [birthdayDate, setBirthdayDate] = React.useState(null);
    const [trainingDate, setTrainingDate] = React.useState(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);

    function isFormValid() {
        return (
            fullName &&
            birthdayDate &&
            trainingDate
        );
    };

    async function submit(e) {

        if (!isFormValid()) {
            setModalMessage("Complete the form befor submitting.");
            setModalOpen(true);
            return;
        }

        const modifiedBookingData = {
            email: user.email,
            fullname: fullName,
            birthdayDate: birthdayDate,
            trainingDate: trainingDate,
            bookingSelected: currentBooking - 1
        };

        try {
            const response = await fetch('http://localhost:3001/modifyBooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(modifiedBookingData),
            });

            if (response.ok) {
                setModalMessage("Booking modified successfully.");
                setModalOpen(true);
                setUser({ // Update the state to reflect the modified booking
                    ...user,
                    bookings: user.bookings.map((booking, index) =>
                        index === modifiedBookingData.bookingSelected ? modifiedBookingData : booking
                    )
                });
            }
        } catch (error) {
            setModalMessage(error.message);
            setModalOpen(true);
        }

    }

    return (
        <>
            <AlertModal
                open={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setModalMessage(null);
                    setModifyOpen(false);
                }}>
                {modalMessage}
            </AlertModal>
            <Box width={"75%"} ml={8} pt={3} pb={3}>
                <form method="POST">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <RegularTextField
                                fullWidth
                                backgroundColor={alpha(dashboardTheme.palette.primary.main, 0.7)}
                                type="text"
                                label="Full Name"
                                placeholder="Forename Surname"
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                                name="fullName"
                                id="fullName"
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CalendarBirthday
                                fullWidth
                                backgroundColor={alpha(dashboardTheme.palette.primary.main, 0.7)}
                                onChange={(date) => setBirthdayDate(date)}
                                value={birthdayDate}
                                label="Birthday"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CalendarTrainingMembership
                                fullWidth
                                backgroundColor={alpha(dashboardTheme.palette.primary.main, 0.7)}
                                onChange={(date) => setTrainingDate(date)}
                                value={trainingDate}
                                label="Training"
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                    <Button variant="contained" onClick={submit}>
                        Confirm
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => { setModifyOpen(false); }}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
