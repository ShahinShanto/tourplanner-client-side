import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Choose.css';
const Choose = () => {
    return (
        <div>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <div className="container-fluid card2 my-3">
                        <div className="row align-items-center ">
                            <div className="g-5">
                                <div className="d-flex flex-column flex-lg-row g-5 content ">
                                    <div className="col-lg-3 col-12 d-flex mb-5">
                                        <div className="text-center ">
                                            <i className="fas fa-clinic-medical icon"></i>
                                            <div className="counter">
                                                <h1 className="text-followers fcolor counter ">{isVisible ? <CountUp end={756} duration={1} /> : null}</h1>
                                            </div>
                                            <h4 className="text-followers2 fcolor">Hospital Rooms</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-12 d-flex mb-5">
                                        <div className="text-center ">
                                            <i className="fas fa-user-md icon"></i>
                                            <h1 className="text-followers fcolor counter " >{isVisible ? <CountUp end={250} duration={1} /> : null}</h1>
                                            <h4 className="text-followers2 fcolor">Specialist Doctors</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-12 d-flex mb-5 ">
                                        <div className="text-center">
                                            <i className="fas fa-smile-beam icon"></i>
                                            <h1 className="text-followers fcolor counter ">{isVisible ? <CountUp end={5426} duration={1} /> : null}</h1>
                                            <h4 className="text-followers2 fcolor">Happy Patients</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-12 d-flex mb-5">
                                        <div className="text-center">
                                            <i className="far fa-calendar-alt icon"></i>
                                            <h1 className="text-followers fcolor counter " >{isVisible ? <CountUp end={32} duration={1} /> : null}</h1>
                                            <h4 className="text-followers2 fcolor">Years of Experience</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
};

export default Choose;