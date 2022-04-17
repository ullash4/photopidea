import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='bg-dark p-3 d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
            <div className='d-flex flex-column align-items-center'>
            <p className='text-white'>Stay in touch</p>
            <p className='text-white'>programmer@gmail.com</p>
            <p className='text-white'>+09996868</p>
            </div>
            <div>
                <p className='text-white'>Copyright <FaRegCopyright /> {date} All rights reserved </p>
            </div>
            <div>
                <a href="https://web.facebook.com/BigBoyUllash">
                <ImFacebook2 className='me-4 text-white fs-2' />
                </a>
                <a href="https://www.instagram.com/ullash_4/">
                <BsInstagram className='me-4 text-white fs-2' />
                </a>
                <a href="https://github.com/ullash4">
                <BsGithub className='me-4 text-white fs-2' />
                </a>
                <a href="https://www.linkedin.com/in/imran-mahmud-ullash-561940235/">
                <AiFillLinkedin className='me-4 text-white fs-1' />
                </a>
            </div>
        </div>
    );
};

export default Footer;