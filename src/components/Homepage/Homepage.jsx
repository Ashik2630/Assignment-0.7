import React, { Suspense } from 'react';
import Banner from '../../pages/homepage/Banner';
import Friends from '../../pages/homepage/Friends/Friends';
import { ScaleLoader } from 'react-spinners';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <Suspense fallback={<span className='flex justify-center m-20'><ScaleLoader/></span>}>
                <Friends/>
            </Suspense>
        </div>
    );
};

export default Homepage