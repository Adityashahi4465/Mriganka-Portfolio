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
function Home({ projectDetails, skills }) {
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
            icon: '/dart.png',
            skill: 'First Steps',
        },
        {
            icon: '/baby-talk-icon.png',
            skill: 'Baby Talk',
        },
        {
            icon: '/baby-explore-icon.png',
            skill: 'Explorer',
        },
        {
            icon: '/baby-smile-icon.png',
            skill: 'Master Smiler',
        },
        {
            icon: '/baby-food-icon.png',
            skill: 'Culinary Critic',
        },
        {
            icon: '/baby-nap-icon.png',
            skill: 'Naptime Pro',
        },
        {
            icon: '/baby-toy-icon.png',
            skill: 'Toy Lover',
        },
    ];

    return {
        props: { projectDetails, skills }
    }
}