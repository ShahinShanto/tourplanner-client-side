import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import map from '../../Images/map.png';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, user, handleEmailChange, handlePasswordChange, handleLogin, error } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/home';



  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        swal("Login", "Successful", "success");
        history.push(redirect_uri)
      })
  }
  return (
    <div className="container border-shadow mt-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className=" signin py-5 container rounded">
            <div className="text-center">
              <h3 className=" mb-4 text-white">Sign in Your Account</h3>
            </div>
            <div>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email address:</Form.Label>
                  <Form.Control
                    onBlur={handleEmailChange}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
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
                  <Button className="btn btn-light btncolor mt-1 fw-bold" style={{ height: '2.5rem', width: '11rem' }} type="submit">
                    Login
                  </Button>
                </div>
                <p className="text-center pt-3 m-0">
                  Don't have an account? <Link to="/register" className="text-white">Register Now</Link>
                </p>
              </Form>
            </div>
          </div>

          <div className="text-center">
            <p className="mt-3">Or Use Others Account For Login</p>
            <div className="authentication-icon my-2">
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

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={map} className="img-fluid" alt="" />
            <h6 className="mt-5">Make Your Travel Booking Experience Smoother with best facilitise best tour guide and best packages.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;