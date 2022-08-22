import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Feature from '../../Components/Feature/Feature';
import './Home.scss'
import List from '../../Components/List/List';

const Home = () => {
    return (
        <div className='Home'>
           <Navbar />
           <Feature type="movie" />
           <List />
           <List />
           <List />
        </div>
    )
}

export default Home;