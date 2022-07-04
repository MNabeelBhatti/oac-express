import React from "react";
import { Routes, Route } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import CustomerLayout from "../Components/Layouts/CustomerLayout/Layout/CustomerLayout";
import TransportRequets from "../Components/CustomerComponents/TransportRequests/TransportRequets";
export default function CustomerRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="tarnsport_requests"
          element={
            <CustomerLayout>
              <TransportRequets />
            </CustomerLayout>
          }
        />
        <Route
          path="history"
          element={
            <CustomerLayout>
              <Appointment />
            </CustomerLayout>
          }
        />
      </Routes>
    </div>
  );
}
