import React from 'react';
import ScreenHeading from './ScreenHeading';
import { BsGlobe } from 'react-icons/bs'
import { VscGithub } from 'react-icons/vsc'
import { DiAndroid } from 'react-icons/di'
import Link from 'next/link';
function Project({ projectDetails }) {
    // console.log(projectDetails);
    return (
        <div className='mt-32 flex flex-col md:px-16 '>
            <ScreenHeading title="Projects" subHeading={'My Works!!'} className="mb-0" />
            <div id="carouselExampleCaptions" className="carousel slide relative mt-0 md:rounded-xl overflow-hidden md:border-2" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 text-yellow-500">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active bg-yellow-500"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* {projectDetails.map(project => (
                       
                    ))} */}

                    <div className="carousel-item relative float-left w-full ">
                        <center><video autoPlay loop playsInline muted className='h-100'>
                            <source src={projectDetails[0].image} type="video/mp4" />
                        </video>
                        </center>
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[0].title}</p>
                        </div>
                    </div>
                    <div className="carousel-item active relative float-left w-full">
                        <center><video autoPlay loop playsInline muted className='h-100'>
                            <source src={projectDetails[1].image} type="video/mp4" />
                        </video> </center>
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-purple-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[1].title}</p>

                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat  contrast-200" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat contrast-200" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Project;

