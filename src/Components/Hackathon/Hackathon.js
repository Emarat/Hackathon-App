import React, { useEffect, useState } from 'react';
import Hackathons from '../Hackathons/Hackathons';

const Hackathon = () => {
    const [hackathons, setHackathons] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setHackathons(data))
    }, [])
    return (
        <div style={{ background: "#003145", height: "1055px" }}>
            <div className='container'>
                <div className="row">
                    {
                        hackathons.map(hackathon => <Hackathons
                            key={hackathon.id}
                            hackathon={hackathon}
                        >

                        </Hackathons>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hackathon;