import React from 'react';
import './Banner.css';
import picsArt from '../../images/icons/PicsArt_04-14-04.42 1.svg';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='banner-heading'>
                <div className='reactangle'>

                </div>
                <h2>
                    Accelerate Innovation with Global AI Challenges
                </h2>
                <p>
                    AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                </p>

                <Button className='btn'>Create Challenge</Button>
            </div>
            <div className='banner-img'>
                <img src={picsArt} alt="banner" />
            </div>

        </div>
    );
};

export default Banner;