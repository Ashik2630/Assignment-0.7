import React from 'react';
import footerImg from '../../assets/logo-xl.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] px-5 pb-10'>
            <img className='mx-auto pt-20 w-60 lg:w-100 ' src={footerImg} alt="" />
            <div className=' text-center space-y-5 mt-5'>
                <p className='text-[#ffffffbf]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h3 className='text-xl text-white'>Social Links</h3>
            </div>
            <div className='flex justify-center mt-5 gap-5'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition'>
                    <FaInstagram />
                </div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition'>
                    <FaFacebook/>
                </div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition'>
                    <FaTwitter/>
                </div>
            </div>
            <hr className='w-[60%] mx-auto mt-10 text-[#31765f9f]' />
            <div className='flex  justify-between w-[60%] mx-auto mt-5 text-[#abaaaa]'>
                <p className=''>&copy; 2026 KeenKeeper. All rights reserved.</p>
                                     
                <div className='lg:flex gap-10'>
                    <a href="#">Privacy Policy </a>
                    <a href="#">Terms of Service </a>
                    <a href="#">Cookies </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;