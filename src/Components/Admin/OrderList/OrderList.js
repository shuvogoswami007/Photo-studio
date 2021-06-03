import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideBar from "../../Dashboard/SideBar/SideBar";

const OrderList = () => {
  const { register, handleSubmit } = useForm();
  const [orders, setOrders] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`https://agile-oasis-19128.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleSelect = (event) => {
    setValue(event);
  };

  const onSubmit = (data) => {};
  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <Table responsive="sm md lg xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Service</th>
              <th>Paying With</th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.booking.name}</td>
                <td>{order.booking.email}</td>
                <td>{order.service.name}</td>
                <td>Stripe</td>
                <td>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex">
                      <Form.Control
                        defaultValue={value}
                        name="status"
                        ref={register({ required: true })}
                      />
                      <DropdownButton onSelect={handleSelect} title="Pending">
                        <Dropdown.Item eventKey="Pending">
                          Pending
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="On Going">
                          On Going
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Form>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default OrderList;
