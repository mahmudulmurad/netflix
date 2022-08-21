import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Feature from '../../Components/Feature/Feature';
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
           <Navbar />
           <Feature />
        </div>
    )
}

export default Home;