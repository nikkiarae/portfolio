import Home from "pages/Home/home"
import Portfolio from "pages/Portfolio/portfolio"
import Profile from "pages/Profile/profile"

const router = {
    home: {
        name: 'Home',
        url: '/',
        element: <Home />
    },
    profile: {
        name: 'Profile',
        url: '/profile',
        element: <Profile />
    },
    portfolio: {
        name: 'Portfolio',
        url: '/portfolio',
        element: <Portfolio />
    }
}

export default router