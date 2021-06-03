import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Book from "./Components/User/Book/Book";
import AddServices from "./Components/Admin/AddServices/AddServices";
import SubmitReview from "./Components/User/SubmitReview/SubmitReview";
import OrderList from "./Components/Admin/OrderList/OrderList";
import Admin from "./Components/Admin/Admin/Admin";
import EditServices from "./Components/Admin/EditServices/EditServices";
import BookingList from "./Components/User/BookingList/BookingList";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <SubmitReview />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/editServices">
            <EditServices />
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <Book />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
