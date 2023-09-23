// import React, { Fragment } from 'react'
// import Component from '../components/Component';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Profile from '../components/Home/Homes'
import AboutMe from '../components/AboutMe/AboutMe';
import Project from '../components/Project';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills';
import React, { useEffect, useState } from 'react';

// import backgroundMusic from '../public/music.mp3';

function Home({ projectDetails, skills }) {
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);
    useEffect(() => {
        const audio = new Audio('/music.mp3');
        audio.volume = 0.9; // Sets the volume to 50%
        // Play the audio when the component mounts
        audio.autoplay = true
        audio.muted = true;
        audio.play();


        return () => {
            // Clean up the audio when the component unmounts
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <main className='dark:bg-black'>
            <Head>
                <title>Mriganka Singh</title>
                <meta name="description" content="Personal Portfolio WebSite For Mriganka Singh"></meta>
                <meta name="author" content="Aditya Shahi"></meta>
                <link rel="shortcut icon" href="/AS_logo.png" type="image/x-icon"></link>
            </Head>

            <ToastContainer />
            <Zoom>

                <Profile />
            </Zoom>
            <Zoom>
                <AboutMe />
            </Zoom>
            <Zoom>
                <Project projectDetails={projectDetails} />
            </Zoom>
            <Zoom>
                <Skills skills={skills} />
            </Zoom>
            <Zoom>
                <ContactMe />
            </Zoom>
            <Zoom>
                <Footer />
            </Zoom>
        </main>
    );
}

export default Home;

export async function getStaticProps(context) {
    const projectDetails = [
        {
            title: "Aur Thodi Masti",
            image: '/vid_2.mp4'
        },
        {
            title: "DeshBhaki",
            image: '/vid_1.mp4'
        },
        {
            title: "4 Months on Earth",
            image: '/2.mp4'
        },


    ];
    const skills = [
        {
            logo: '/walk.png',
            skill: 'Walking',
            level: '60%',
        },
        {
            logo: '/cry.png',
            skill: 'Crying',
            level: '100%',
        },
        {
            logo: '/explore.png',
            skill: 'Exploring',
            level: '80%',
        },
        {
            logo: '/smile.png',
            skill: 'Smiling',
            level: '100%',
        },
        {
            logo: '/eat.png',
            skill: 'Eating',
            level: '90%',
        },
        {
            logo: '/sleep.png',
            skill: 'Napping',
            level: '100%',
        },
        {
            logo: '/toys.png',
            skill: 'Play',
            level: '100%',
        },
    ];


    return {
        props: { projectDetails, skills }
    }
}