import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Addservice from '../Addservice/Addservice';
import Manageallorder from '../Manageallorder/Manageallorder';
import "./DashBoard.css";
const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="row d-flex m-0 justify-content-center
        ">
          <div className="col-lg-3 text-center background border-end border-warning border-5">
            <nav className="d-lg-grid mt-4 pb-4">
              <Link to="/dashboard/all-order">
                <button className="btn btn-light btncolor my-3 fw-bold active" style={{ height: '2.5rem', width: '13rem' }}>
                  Manage All Orders
                </button>
              </Link>

              <Link to="/dashboard/add-service">
                <button className="btn btn-light btncolor mt-1 fw-bold" style={{ height: '2.5rem', width: '13rem' }}>
                  Add New Service
                </button>
              </Link>
            </nav>
          </div>
          <div className="col-9 p-0">
            <Switch>
              <Route path="/dashboard/add-service">
                <Addservice></Addservice>
              </Route>
              <Route path="/dashboard/all-order">
                <Manageallorder></Manageallorder>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;