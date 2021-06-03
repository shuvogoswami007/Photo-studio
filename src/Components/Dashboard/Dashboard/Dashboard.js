import React from "react";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <div className="row w-100">
        <SideBar />
        <div className="col-md-10">
          <h1>This is an Empty dashboard</h1>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
