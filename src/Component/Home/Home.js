import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Review from '../Review/Review';
import Servicecard from '../Servicecard/Servicecard';
import { Spinner } from 'react-bootstrap';
import explore from '../../Images/map.png'

import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-ridge-73896.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div>
            {/* carosel */}
            <section className="" >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item py-5 cover active">

                            <div className="text-center caption py-2 my-5 container">
                                <div className=" my-5">
                                    <h3>AN EXITING JOURNEY</h3>
                                    <h5 className=" h5color">Where Adventure Begins</h5>
                                    <button className="btn bf-color px-4 py-2 my-5 fs-bold">Book Now</button>
                                </div>
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <input placeholder="Where to?" required type="text" className="form-control" id="inputNamel4" />
                                    </div>

                                    <div className="col-md-4">
                                        <input required type="date" className="form-control" id="date" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select" id="autoSizingSelect">
                                            <option selected>Travel Type</option>
                                            <option value="1">Adventure</option>
                                            <option value="2">Destination</option>
                                            <option value="3">Explore</option>
                                            <option value="3">Holidays</option>
                                            <option value="3">On Budget</option>
                                        </select>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="carousel-item cover2 py-5">
                            <div className="text-center caption py-2 my-5 container">
                                <div className=" my-5">
                                    <h3>TOP URBAN DESTINATIONS</h3>
                                    <h5 className=" h5color">Where Adventure Begins</h5>
                                    <button className="btn bf-color px-4 py-2 my-5 fs-bold">Book Now</button>
                                </div>
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <input placeholder="Where to?" type="text" className="form-control" id="inputNamel4" />
                                    </div>

                                    <div className="col-md-4">
                                        <input type="date" className="form-control" id="date" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select" id="autoSizingSelect">
                                            <option selected>Travel Type</option>
                                            <option value="1">Adventure</option>
                                            <option value="2">Destination</option>
                                            <option value="3">Explore</option>
                                            <option value="3">Holidays</option>
                                            <option value="3">On Budget</option>
                                        </select>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="carousel-item cover3 py-5">
                            <div className="text-center caption py-2  my-5 container">
                                <div className=" my-5">
                                    <h3 >A MISTYCAL ADVENTURE</h3>
                                    <h5 className="h5color">Where Adventure Begins</h5>
                                    <button className="btn bf-color px-4 py-2 my-5 fs-bold">Book Now</button>
                                </div>
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <input placeholder="Where to?" required type="text" className="form-control" id="inputNamel4" />
                                    </div>

                                    <div className="col-md-4">
                                        <input required type="date" className="form-control" id="date" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select" id="autoSizingSelect">
                                            <option selected>Travel Type</option>
                                            <option value="1">Adventure</option>
                                            <option value="2">Destination</option>
                                            <option value="3">Explore</option>
                                            <option value="3">Holidays</option>
                                            <option value="3">On Budget</option>
                                        </select>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>


            {/* service section */}
            <section>
                <div className="container mt-5">

                    <h5 className=" text-orgarge text-center">Choose Your Package</h5>
                    <h1 className="text-center text-size mb-4">Select Your Best Package</h1>
                    <>

                        {/* <div className="row g-4"> */}
                        <div className="row row-cols-1 row-cols-md-3 g-4 round">
                            {
                                services.length === 0 ?
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="border" />
                                    </div> :
                                    services.map(service => <Servicecard

                                        key={service.img}
                                        service={service}

                                    ></Servicecard>

                                        //

                                    )
                            }
                        </div >

                    </ >

                </div>
            </section>
            <section className="container">
                <div className="mt-5">
                    <h5 className="mt-5 text-orgarge text-center">Explore</h5>
                    <h1 className="text-center text-size mb-4">Explore The World For Yourself</h1>
                </div>
                <div>
                    <img src={explore} className="img-fluid" alt="" />
                </div>
            </section>




            {/* extra setion */}
            <section>
                <div className="mt-5">
                    <h5 className="mt-5 text-orgarge text-center">Why Choose Us</h5>
                    <h1 className="text-center text-size mb-4">Why Travelling With Tour Planner</h1>
                    <Choose></Choose>
                </div>
            </section>


            {/* review part */}
            <section>
                <div className="container mt-5">
                    <h5 className="text-orgarge text-center">Client Says</h5>
                    <h1 className="text-center text-size">What Our Client Says</h1>
                    <Review></Review>
                </div>
            </section>
        </div>

    );
};

export default Home;