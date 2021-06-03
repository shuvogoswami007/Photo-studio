import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import SideBar from "../../Dashboard/SideBar/SideBar";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(
      `https://agile-oasis-19128.herokuapp.com/bookingList?email=` +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [loggedInUser.email]);

  return (
    <div className="row w-100">
      <SideBar />
      <div className="col-md-10">
        <Table responsive="sm md lg xl">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Service Name</th>
              <th>Service Price</th>
              <th>Status</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <tbody>
              <tr>
                <td>
                  <img
                    src={booking.service.image}
                    alt=""
                    style={{ width: "150px", height: "100px" }}
                  />
                </td>
                <td>{booking.name}</td>
                <td>${booking.service.price}</td>
                <td>On Going</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default BookingList;
