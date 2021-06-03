import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://agile-oasis-19128.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services-container text-center p-5">
            <h3>Our Offers</h3>
            <div className="d-flex justify-content-center m-5">
                <div className="row w-80 m-3 service">
                    {
                        services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
            <h4>Let’s image tells your Story</h4>
        </div>
    );
};

export default Services;