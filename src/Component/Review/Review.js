import React from 'react';
import './Review.css'
import img1 from '../../Images/reviewer-1.png'
import img2 from '../../Images/reviewer-2.png'
import img3 from '../../Images/reviewer-3.png'

const Review = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="shadow h-100 review-card ">
            <img src={img1} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Robert</h5>
              <p className="card-text">Best online booking service ever. Satisfied with their service. They are very helpful and friendly. I recommended you to choose them.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="shadow h-100 review-card ">
            <img src={img2} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Emma</h5>
              <p className="card-text">I love the way you guys are always very helpful. Your service is excellent and I am more than happy to use your website for all future holidays.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="shadow h-100 review-card ">
            <img src={img3} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rose</h5>
              <p className="card-text">We were very happy with our holiday booking. We would book with Tour Planner again and definitely recommend their services to others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;