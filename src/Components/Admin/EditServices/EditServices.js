import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import SideBar from "../../Dashboard/SideBar/SideBar";

const EditServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://agile-oasis-19128.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const deleteService = (id) => {
    fetch(`https://agile-oasis-19128.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Service Deleted");
          window.location.reload();
        }
      });
  };

  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <Table responsive="sm md lg xl">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {services.map((service) => (
            <tbody>
              <tr>
                <td>
                  <img
                    src={service.image}
                    alt=""
                    style={{ width: "150px", height: "100px" }}
                  />
                </td>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteService(service._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default EditServices;
