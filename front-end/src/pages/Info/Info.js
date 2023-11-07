import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Grid } from '@mui/material';
import { RegoularH1, RegoularH2 } from '../../components/Typography/Typography';
import Link from '@mui/material/Link';
import dashboardTheme from '../../components/DashboardTheme/DashboardTheme';

export default function Info() {

    const NewInstagramIcon = styled(InstagramIcon)`
        font-size: 500%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #C13584;
        }`
    const NewPhoneAndroidIcon = styled(PhoneAndroidIcon)`
        font-size: 500%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #3876BF;
        }`

    const NewEmailIcon = styled(EmailIcon)`
        font-size: 500%;
        margin-bottom: -10px;
        transition: color 0.5s;

        &:hover {
            color: #79AC78;
        }`

    return (
        <div className="info-page">
            <Container maxWidth="md">
                <RegoularH1 fontSize={'700%'} marginBottom={5} marginTop={15} color={dashboardTheme.palette.primary.light}>Contact Us</RegoularH1>
                <RegoularH2 marginBottom={-10} fontSize={'150%'} color={dashboardTheme.palette.primary.light}>
                    If you have any questions, suggestions, or concerns, please don't hesitate to get in touch with us through the channels listed below.
                </RegoularH2>

                <Grid container justifyContent="center" spacing={3} mt={15}>
                    <Grid item xs={4}>
                        <Link underline="none" color="inherit" href="https://www.instagram.com/daniele_farriciello/" target="_blank" rel="noopener noreferrer">
                            <NewInstagramIcon color='primary' />
                        </Link>
                        <RegoularH1 marginBottom={-1} marginTop={0} color={dashboardTheme.palette.primary.light}>
                            Social
                        </RegoularH1>
                        <Link underline="none" color="inherit" href="https://www.instagram.com/daniele_farriciello/" target="_blank" rel="noopener noreferrer">
                            <RegoularH2 fontSize={'110%'} color={dashboardTheme.palette.primary.light}>
                                daniele_farriciello
                            </RegoularH2>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link underline="none" color="inherit" href="tel:+353830097215" target="_blank" rel="noopener noreferrer">
                            <NewPhoneAndroidIcon color='primary' />
                        </Link>
                        <RegoularH1 marginBottom={-1} marginTop={0} color={dashboardTheme.palette.primary.light}>
                            Mobile
                        </RegoularH1>
                        <Link underline="none" color="inherit" href="tel:+353830097215" target="_blank" rel="noopener noreferrer">
                            <RegoularH2 fontSize={'110%'} color={dashboardTheme.palette.primary.light}>
                                +353 830097215
                            </RegoularH2>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link underline="none" color="inherit" href="mailto:daniele.farriciello.03@gmail.com" target="_blank" rel="noopener noreferrer">
                            <NewEmailIcon color='primary'/>
                        </Link>
                        <RegoularH1 marginBottom={-1} marginTop={0} color={dashboardTheme.palette.primary.light}>
                            E-mail
                        </RegoularH1>
                        <Link underline="none" color="inherit" href="mailto:daniele.farriciello.03@gmail.com" target="_blank" rel="noopener noreferrer">
                            <RegoularH2 fontSize={'95%'} color={dashboardTheme.palette.primary.light}>
                                daniele.farriciello.03@gmail.com
                            </RegoularH2>
                        </Link>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
