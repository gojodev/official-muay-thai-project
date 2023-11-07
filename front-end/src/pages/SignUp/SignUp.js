import { React, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import RegularTextField from "../../components/TextField/TextField"
import { Container, Stack, Box } from "@mui/material"
import { Button } from "@mui/material"
import { RegoularH1 } from '../../components/Typography/Typography';
import dashboardTheme from '../../components/DashboardTheme/DashboardTheme';
import Footer from "../../components/Footer/Footer"
import AlertModal from "../../components/AlertModal/AlertModal";

export default function SignUp() {
    const navigate = useNavigate() 
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);

    function isFormValid() {
        return (
          fullName &&
          email &&
          password
        );
      };

    async function submit(e) {

        // TO FIX
        if (!email.includes('@')) {
            setModalMessage("Please enter a valid email address with '@'.");
            setModalOpen(true);
            return;
        }

        e.preventDefault();

        if (!isFormValid()) {
            setModalMessage("Complete the form befor submitting.");
            setModalOpen(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/signup", { fullName, email, password });
            if (response.data.message === "User already exists") {
                setModalMessage(response.data.message);
                setModalOpen(true);
            } else if (response.data.message === "Not exist-New user Added") {
                navigate("/login", { state: { id: email } })
            }
        } catch (e) {
            // REMINDER: i could not using this part of the code setting the status at 200
            if (e.response && e.response.status === 409) {
                setModalMessage("User already exists");
            } else {
                setModalMessage("Network error. Please try again.");
            }
            setModalOpen(true);
        }
    }

    return (
        <>
            <AlertModal open={modalOpen} onClose={() => { setModalOpen(false); setModalMessage(null); }}>
                {modalMessage}
            </AlertModal>
            <RegoularH1 color={dashboardTheme.palette.secondary.main}>SIGN UP</RegoularH1>
            <Container maxWidth="sm">
                <Box sx={{ width: '100%' }}>
                    <form action="POST" >
                        <Stack spacing={2}>
                            <RegularTextField type="text" label="Full Name" placeholder="Full Name" onChange={(e) => { setFullName(e.target.value) }} name="fullName" id="fullName" autoComplete="given-name"/>
                            <RegularTextField type="email" label="Email" placeholder="mario.rossi@gmail.com" onChange={(e) => { setEmail(e.target.value) }} name="email"  id="email"autoComplete="email"/>
                            <RegularTextField type="password" label="Password" placeholder="*******" onChange={(e) => { setPassword(e.target.value) }} name="password" id="password" autoComplete="off"/>
                            <Button variant="contained" onClick={submit}>
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
            <Footer/>
        </>
    )
}
