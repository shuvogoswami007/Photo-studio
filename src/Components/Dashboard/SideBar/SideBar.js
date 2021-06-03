import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://agile-oasis-19128.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div
      className="p-5 col-md-2 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "mediumspringgreen", height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/bookingList" className="text-decoration-none">
            Booking List
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/review" className="text-decoration-none">
            Review
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li className="mb-3">
              <Link to="/orderList" className="text-decoration-none">
                Order List
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/addServices"
                className="text-decoration-none"
              >
                Add Services
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/addAdmin" className="text-decoration-none">
                Make Admin
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/editServices"
                className="text-decoration-none"
              >
                Edit Services
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-decoration-none">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
