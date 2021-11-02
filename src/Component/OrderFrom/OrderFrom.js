import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import './OrderFrom.css'

const OrderFrom = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://peaceful-ridge-73896.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://peaceful-ridge-73896.herokuapp.com/orders', data)
      .then(res => {
        console.log(res)
        if (res.data.insertedId) {
          swal("Successful", "Order", "success");
          history.push('/home')
          reset();
        }
      })
  };
  return (
    <div className="style">

      <Container className="my-5">
        <Card>
          <Row className="d-flex align-items-center my-3" xs={1} md={2} lg={2}>
            <Col>
              <Card.Img className="img-fluid ms-lg-4 mb-3" variant="top" src={details?.img} />
            </Col>
            <Col className="style signino container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-12 pt-3">
                  <label for="inputPassword4" className="form-label">Email</label>
                  {user?.email && <input className="form-control" readOnly={true} defaultValue={user?.email} {...register("email")} />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">User Name</label>
                  {user?.displayName && <input className="form-control" readOnly={true} defaultValue={user?.displayName} {...register("username", { required: true })} placeholder="username" />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">Destination</label>
                  {details?.place_name && <input className="form-control" readOnly={true} defaultValue={details?.place_name} {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">Description</label>
                  {details?.description && <textarea className="form-control" readOnly={true} defaultValue={details?.description} {...register("description")} placeholder="service description" />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">Number of Days</label>
                  {details?.day && <input readOnly={true} className="form-control" defaultValue={details?.day} type="number" {...register("days")} placeholder="days of package" />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">Price</label>
                  {details?.price && <input readOnly={true} className="form-control" defaultValue={details?.price} type="number" {...register("price")} placeholder="service price" />}
                </div>

                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">Phone</label>
                  <input className="form-control" {...register("phone", { required: true, maxLength: 20 })} placeholder="add your phone number" required />
                </div>

                {'pending' && <input className="d-none form-control" readOnly={true} defaultValue="pending.." {...register("status", { required: true, maxLength: 20 })} placeholder="status" />}
                <div className=" text-center">
                  <button
                    // onClick={logOut}
                    className="btn btn3 my-3 fw-bold" style={{ height: '2.5rem', width: '11rem' }}
                    type="submit"
                  >
                    Order
                  </button>
                </div>
                {/* <input type="submit" className="btn brdr font-color5" value="order" /> */}
              </form>

            </Col>
          </Row>

        </Card>

      </Container>
    </div>
  );
};

export default OrderFrom;