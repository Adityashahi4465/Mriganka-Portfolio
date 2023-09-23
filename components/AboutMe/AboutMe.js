import React from 'react';
import ScreenHeading from '../ScreenHeading';
import Classes from './AboutMe.module.css';
import Image from 'next/image';
function AboutMe(props) {


    const SCREEN_CONSTANT = {
        description: "Main Mriganka, mummy ki jaan aur papa ki paran, aur aapko ek zabardast mazaak ke saath aapka swagat karti hoon! Aapko yaad hai, jab maine apni paheli kadam uthai thi, tab mere mummy-papa ko laga ki unka ek naya comedian paida ho gaya hai. Lekin maine unhe yeh samjha diya ki har pal ek nayi comedy ka episode hai. Toh aaj, aap sab taiyar rahiye, kyunki hasi ka saavan aane wala hai!",
        highlights: {
            bullets: [
                "Mummy aur Daddy ka jo bhi plan tha, maine woh ulta kar diya hai. Chhote baccho ka talent hota hai, na!",
                "Jab se maine chalna sikha hai, main har kisi ke peeche daudti hoon, jaise ki main ek Olympic runner hoon.",
                "Main har din naye chehre dekhkar muskurati hoon. Kyunki jab aap ek saal ke ho, har din ek adventure hai!",
                "Mera pehla janmdivas, kuch toofani karte hai, kyunki abhi toh maine zindagi ka shubharambh hai!🎉😄",
            ],
            heading: "kuch khaas baatein",
        },
    };


    const renderHighlight = SCREEN_CONSTANT.highlights.bullets.map((ele, i) => {
        return <div className={Classes.highlight} key={i}>
            <div className={Classes['highlight-blob']}></div>
            <div>{ele}</div>
        </div>
    })
    return (

        <div id={'aboutMe'} className={`${Classes['about-me-container']} ${Classes['screen-container']} dark:text-white`}>
            <div className={`${Classes['about-me-parent']}`}>
                <ScreenHeading title={"About Me"} subHeading={'Who I am?'} />
                <div className={Classes['about-me-card']} >
                    <div className="relative w-[100%] h-[20rem] md:h-auto md:w-[50%]">
                        <Image
                            src="/self.png"
                            objectFit='cover'
                            fill
                            alt="profile image"
                        />
                    </div>
                    <div className={Classes['about-me-details']}>
                        <span className={Classes['about-me-description']}>{SCREEN_CONSTANT.description}
                        </span>
                        <div className={Classes['about-me-highlights']} >
                            <div className={Classes['highlights-heading']}>
                                <span>{SCREEN_CONSTANT.highlights.heading}</span>
                            </div>
                            {renderHighlight}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;