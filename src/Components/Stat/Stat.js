import React from 'react';
import group1 from '../../images/icons/Group 1000002515.svg';
import group2 from '../../images/icons/Group 1000002516.svg';
import group3 from '../../images/icons/Group 1000002518.svg';
import '../Stat/Stat.css';

const Stat = () => {
    return (
        <div className='stat'>
            <div className='stat-card'>
                <div className='stat-img'>
                    <img src={group1} alt="" />
                </div>
                <div className='card-text'>
                    <h2>
                        100K+
                    </h2>
                    <p>
                        AI model submissions
                    </p>
                </div>
                <div className='stat-divider'>

                </div>
            </div>
            <div className='stat-card'>
                <div className='stat-img'>
                    <img src={group2} alt="" />
                </div>
                <div className='card-text'>
                    <h2>
                        50K+
                    </h2>
                    <p>
                        Data Scientists
                    </p>
                </div>
                <div className='stat-divider'>

                </div>
            </div>
            <div className='stat-card'>
                <div className='stat-img'>
                    <img src={group3} alt="" />
                </div>
                <div className='card-text'>
                    <h2>
                        100+
                    </h2>
                    <p>
                        AI Challenges hosted
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stat;