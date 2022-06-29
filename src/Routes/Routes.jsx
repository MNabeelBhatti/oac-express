import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OwnerPrivateRoute from "./OwnerPrivateRoute";
import CustomerPrivateRoute from "./CustomerPrivateRoute";

import Login from "../Components/Auth/Login";
import OwnerRoutes from "./OwnerRoutes";
import CustomerRoutes from "./CustomerRoutes";

export default function AppRoutes() {
  let uid = JSON.parse(sessionStorage.getItem("uid"));
  let type = JSON.parse(sessionStorage.getItem("type"));
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              uid !== null && type !== null && type === "owners" ? (
                <Navigate to={"/owner/fleet_managment"} />
              ) : uid !== null && type !== null && type === "customers" ? (
                <Navigate to={"/customer/appointment"} />
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/owner/*"
            element={
              <OwnerPrivateRoute>
                <OwnerRoutes />
              </OwnerPrivateRoute>
            }
          />
          <Route
            path="/customer/*"
            element={
              <CustomerPrivateRoute>
                <CustomerRoutes />
              </CustomerPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
