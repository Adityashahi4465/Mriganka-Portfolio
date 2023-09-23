import React, { useEffect, useState } from 'react';
import Classes from './Header.module.css';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from 'next/image';

const Header = (props) => {
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    const [dark, setDark] = useState(true);
    const [isMusicPlaying, setIsMusicPlaying] = useState(true); // New state for music

    const showHeaderOptionsHandler = (e) => {
        setShowHeaderOptions(!showHeaderOptions);
        console.log(showHeaderOptions);
    }

    useEffect(() => {
        console.log(dark);
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    function handleTheme() {
        setDark(!dark);
    }

    // Function to toggle music play/pause
    function toggleMusic() {
        setIsMusicPlaying(!isMusicPlaying);
        const audio = document.querySelector('audio');
        if (isMusicPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    }

    return (
        <div className={Classes['header-container']} onClick={showHeaderOptionsHandler}>
            <div className={Classes['header-parent']}>
                <div className={Classes['header-logo']} >
                    <span>~MS~</span>
                </div>
                <div className='flex justify-center items-center space-x-3 md:space-x-10'>
                    {!dark ? <MdDarkMode className='text-2xl hover:scale-125 cursor-pointer text-black' onClick={handleTheme} /> : <MdLightMode className='cursor-pointer hover:scale-125 text-2xl' onClick={handleTheme} />}
                    {/* Add the Play/Pause button here */}


                </div>
            </div>
        </div>
    );
}

export default Header;
