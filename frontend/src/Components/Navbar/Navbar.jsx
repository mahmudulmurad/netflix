import { Notifications, Search, MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import './Navbar.scss'
const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false)
    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? 'Navbar scrolled' : 'Navbar'}>
            <div className="conatainer">
                <div className="left">
                    <img src="https://imgs.search.brave.com/im3vXFCGLKyNekT_kUe1uQRCYMxcEHHrc0Y8wIdlZyo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGVjaGRhaWx5LmNv/bS5hdS9iMi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wMy9O/ZXRmbGl4X0xvZ29f/UHJpbnRfRm91ckNv/bG9yQ01ZSy5wbmc" alt="logo" />
                    <span>Home</span>
                    <span>Movies</span>
                    <span>Series</span>
                    <span>MyList</span>
                </div>
                <div className="right">
                    <Search className='logo' />
                    <Notifications className='logo' />
                    <img src="https://nerdreactor.com/wp-content/uploads/2018/09/american-psycho-christian-bale-1.jpg" alt="img" />
                    <div className="profile">
                        <MoreVert className='logo' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;