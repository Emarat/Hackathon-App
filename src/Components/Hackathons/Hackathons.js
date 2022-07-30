import React from 'react';
import "../Hackathons/Hackathons.css";
import { Button } from 'react-bootstrap';

const Hackathons = ({ hackathon }) => {
    const { id, name, img, description } = hackathon;

    return (
        <div className="rounded-3 col-sm-12 col-md-6 col-lg-4 g-3" >
            <div className='card p-2' style={{ width: "354px", height: "473px" }}>
                <img className='fluid rounded  d-block' src={img} alt="" />
                <h5 className='text-center my-3'>{name}</h5>
                {/* <p><small>{description}</small></p> */}
                <p className='text-center'>Starts in</p>
                <h4 className='text-center fw-bold'>00 : 15 : 22</h4>
                <span className='text-center fs-6 text-black'>Days : Hours : Mins</span>
                <Button className='participate-btn text-white my-auto mx-auto'>Participate Now</Button>
            </div>
        </div>
    );
};

export default Hackathons;