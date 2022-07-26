import React from 'react';
import { Card } from 'react-bootstrap';
import '../ParticipateReasons/ParticipateReasons.css';
import notebook from '../../images/icons/carbon_notebook-reference.svg';
import vector from '../../images/icons/Vector.svg';
import robot from '../../images/icons/Robot.svg';
import IdentificationCard from '../../images/icons/IdentificationCard.svg';

const ParticipateReasons = () => {
    return (
        <>
            <div className='card-header'>
                <h2>Why Participate in <span>AI Challenges?</span></h2>
            </div>
            <div className='flex'>
                <div className='card'>
                    <Card.Img className='card-img' variant="top" src={notebook} />
                    <Card.Body className='card-body'>
                        <h2>Prove Your Skills</h2>
                        <p>
                            Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                        </p>
                    </Card.Body>
                </div>
                <div className='card'>
                    <Card.Img className='card-img' variant="top" src={vector} />
                    <Card.Body className='card-body'>
                        <h2>Learn From Community</h2>
                        <p>
                            One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
                        </p>
                    </Card.Body>
                </div>
            </div>
            <div className='flex'>
                <div className='card'>
                    <Card.Img className='card-img' variant="top" src={robot} />
                    <Card.Body className='card-body'>
                        <h2>Challenge Yourself</h2>
                        <p>
                            There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
                        </p>
                    </Card.Body>
                </div>
                <div className='card'>
                    <Card.Img className='card-img' variant="top" src={IdentificationCard} />
                    <Card.Body className='card-body'>
                        <h2>Earn Recognition</h2>
                        <p>
                            You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
                        </p>
                    </Card.Body>
                </div>
            </div>
        </>
    );
};

export default ParticipateReasons;