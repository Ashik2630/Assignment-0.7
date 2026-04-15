import React from 'react';
import Banner from '../../pages/homepage/Banner';
import Friends from '../../pages/homepage/Friends/Friends';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <Friends/>
        </div>
    );
};

export default Homepage