import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Servicecard = (props) => {
    const { _id, img, country, place_name, price, total_reviews, rating } = props.service;
    return (
        <>
            <div className="col">
                <div className="shadow round h-100">
                    <div className="card-img-top round">
                        <img src={img} className="card-img-top p-3" style={{ height: '15rem' }} alt="..." />
                    </div>

                    <div className="card-body">
                        <h3 className="card-text text-center">{place_name}</h3>
                        <p className="card-text text-center">{country}</p>

                        <div className="d-flex justify-content-between">
                            <Rating
                                initialRating={rating}
                                emptySymbol="fas fa-star"
                                fullSymbol="fas text-warning fa-star"
                                readonly
                            />
                            {rating}({total_reviews})

                            <p className="card-text text-danger fw-bold"> ${price} <small>/Person </small></p>
                        </div>

                        <div>
                            <Link className="btn b-color mt-4" to={`/singleService/${_id}`}>Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Servicecard;