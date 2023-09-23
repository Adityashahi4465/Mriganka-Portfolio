import React, { useEffect, useState } from 'react';
import Classes from './Header.module.css';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from 'next/image';

const Header = (props) => {
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    const [dark, setDark] = useState(true);
    const [audio, setAudio] = useState(null); // Initialize audio as null
    const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Initialize music as paused

    const showHeaderOptionsHandler = (e) => {
        setShowHeaderOptions(!showHeaderOptions);
        console.log(showHeaderOptions);
    }

    useEffect(() => {
        const audioElement = new Audio("/music.mp3");
        setAudio(audioElement);

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

    const toggleMusic = () => {
        if (isMusicPlaying) {
            audio.pause(); // Pause the audio
        } else {
            audio.play(); // Start playing the audio
        }
        setIsMusicPlaying(!isMusicPlaying); // Toggle the play/pause state
    }

    return (
        <div className={Classes['header-container']} onClick={showHeaderOptionsHandler}>
            <div className={Classes['header-parent']}>
                <div className={Classes['header-logo']} >
                    <span>~MS~</span>
                </div>
                <div className='flex justify-center items-center space-x-3 md:space-x-10'>
                    {!dark ? <MdDarkMode className='text-2xl hover:scale-125 cursor-pointer text-black' onClick={handleTheme} /> : <MdLightMode className='cursor-pointer hover:scale-125 text-2xl' onClick={handleTheme} />}

                    {/* Button to start/pause music */}
                    <button onClick={toggleMusic}>
                        {isMusicPlaying ? "Pause Music" : "Play Music"}
                    </button>

                    {/* Add the audio element with your imported music file */}
                    <audio src="/music.mp3" preload="auto" ref={audio} />
                </div>
            </div>
        </div>
    );
}

export default Header;
