import React from 'react';
import './Register.css'
import { Link, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import map from '../../Images/map.png'
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const Register = () => {
  const { signInUsingGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error, logOut } = useAuth();
  const history = useHistory();

  //google login 

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        logOut();
        swal("Successfully", "Registered", "success");
        history.push('./login')

      })
  }
  return (
    <div className="container ">
      <div className="row border-shadow mt-5">
        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={map} className="img-fluid" alt="" />
            <h6 className="mt-5">Make Your Travel Booking Experience Smoother with best facilitise best tour guide and best packages.</h6>
          </div>
        </div>
        <div className="col-lg-7 long-padding">
          <div className=" signin py-5 container rounded">
            <h3 className="mb-4 text-center">Please Register</h3>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label className="fw-bold">Name:</Form.Label>
                <Form.Control
                  onBlur={handleNameChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>

              <p>{error}</p>
              <div className="text-center  ">
                <Button
                  // onClick={logOut}
                  className="btn btn-light btncolor mt-1 fw-bold text-center" style={{ height: '2.5rem', width: '11rem' }}
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </Form>
            <p className="text-center pt-3 m-0">
              Already have an account? <Link to="/login" className="text-white">Login Here</Link>
            </p>
          </div>
          <div className="text-center mt-3">
            <p>or use others account for register</p>
            <div className="authentication-icon my-3">
              <button onClick={handleGoogleLogin} className="border-0 bg-white">
                <i className="fab fa-google-plus-g p-3 text-danger"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-facebook-square p-3 text-primary"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-linkedin p-3 text-info"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;