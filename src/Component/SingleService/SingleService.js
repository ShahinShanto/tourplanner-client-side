import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = () => {
    const { id } = useParams();
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch(`https://peaceful-ridge-73896.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []);

    return (

        <div className="text-center">
            <div className="container">
                <h1 className="text-center my-4 fcolor place">Details</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" >
                    <div className="col">
                        <div className="brdr shadow h-100">
                            <div className="">
                                <img style={{ borderRadius: '25px' }} src={singleService?.img} className="card-img-top p-3" alt="..." />
                            </div>
                            <div className="card-body">
                                <h2 className="text-center animate__animated animate__lightSpeedInRight place">{singleService?.place_name}</h2>
                                <Rating
                                    initialRating={singleService?.rating}
                                    emptySymbol="fas fa-star"
                                    fullSymbol="fas text-warning fa-star"
                                    readonly
                                />
                                {singleService?.rating}  ({singleService?.total_reviews})
                            </div>

                            <h4 className="text-center text-danger">Price: ${singleService?.price}</h4>
                            <h3 className="text-center">Overview</h3>
                            <div className="d-flex justify-content-center"><p >{singleService?.description}</p></div>
                            <Link to={`/OrderFrom/${singleService?._id}`}> <button className="btn bf-color mb-4 fw-bold">Book Now <i className="fas fa-arrow-right"></i></button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;