import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-footer mt-5">
        <div className="row align-items-center">
          <div className="g-5 mb-2 ">
            <div className="d-flex flex-column flex-lg-row g-5 border-bottom ">
              <div className="col-lg-3 col-12 px-4 text-white mt-2">
                <h2>Tour Planner</h2>
                <p className="fw-light">Tour Planner is an online tour booking website. Here you can book your tour plan and travel the world with us at a reasonable price. </p>
              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Quick Links</h2>
                <Link to="/home" className="nav-link active p-2  text-white fw-light" aria-current="page">Home</Link>
                <Link to="/specialist" className="fw-light nav-link active p-2  text-white" aria-current="page" >Order</Link>
                <Link to="/department" className="fw-light nav-link active p-2  text-white" aria-current="page" > Dashboard</Link>

              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Social Media</h2>
                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"> <i className="fab fa-facebook-square"></i> Facebook</Link>
                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="fab fa-twitter-square"></i> Twitter</Link>
                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-whatsapp-square"></i> Whats App</Link>
                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-linkedin"></i> Linkedin</Link>
              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Find Us</h2>
                <p className="fw-light"><i className="fas fa-map-marker-alt"></i> 143 Gordon Terrace Embarrassing NG33 0ZT United Kingdom</p>
                <p className="fw-light"><i className="fas fa-envelope"></i> info@medicare.com</p>
                <p className="fw-light"><i className="fas fa-phone-square-alt"></i> +880 1558920727</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white fw-normal"> <i class="far fa-copyright"></i> All rights reserved by Shahin</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;