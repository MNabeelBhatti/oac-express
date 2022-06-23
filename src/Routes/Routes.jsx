import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../Components/Auth/Login";
import OwnerRoutes from "./OwnerRoutes";
import CustomerRoutes from "./CustomerRoutes";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/owner/*" element={<OwnerRoutes />} />
          <Route path="/home/customer/*" element={<CustomerRoutes />} />
        </Routes>
      </Router>
    </>
  );
}
