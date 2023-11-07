import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewBooking from './pages/NewBooking/NewBooking';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import dashboardTheme from './components/DashboardTheme/DashboardTheme';
import { ThemeProvider } from '@mui/material/styles';
import Bookings from './pages/Bookings/Bookings';
import { UserProvider } from "../src/components/UserContext";
import About from './pages/About/About';
import Info from './pages/Info/Info';
import MembershipPage from './pages/MembershipPage/MembershipPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={dashboardTheme}>
          <UserProvider>
            <NavBar />
            <Routes>
              <Route index path='' element={<Home />} />
              <Route path='/newBooking' element={<NewBooking />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/membershipPage' element={<MembershipPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/about' element={<About />} />
              <Route path='/info' element={<Info />} />
            </Routes>
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
