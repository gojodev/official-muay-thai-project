import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpIcon from '@mui/icons-material/Help';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



export const navBarItems =  [
    {
        id: 0,
        icon: <HomeRoundedIcon />,
        label: 'Home',
        route: ''
    },
    {
        id: 1,
        icon: <GroupAddIcon />,
        label: 'Membership',
        route: '/membershipPage'
    },
    {
        id: 2,
        icon: <CalendarMonthRoundedIcon />,
        label: 'New Booking',
        route: '/newBooking'
    },
    {
        id: 3,
        icon: <MenuBookIcon />,
        label: 'My Bookings',
        route: '/bookings'
    },
    {
        id: 4,
        icon: <PersonIcon />,
        label: 'Login',
        route: '/login'
    },
    {
        id: 5,
        icon: <PersonAddAlt1Icon />,
        label: 'Sign Up',
        route: '/signup'
    },
    {
        id: 6,
        icon: <InfoIcon />,
        label: 'About',
        route: '/about'
    },
    {
        id: 7,
        icon: <HelpIcon />,
        label: 'Info',
        route: '/info'
    }
]
