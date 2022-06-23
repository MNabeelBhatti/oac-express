import React from "react";
import { Routes, Route } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import CustomerLayout from "../Components/Layouts/CustomerLayout/Layout/CustomerLayout";
export default function CustomerRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="apponentment"
          element={
            <CustomerLayout>
              <Appointment />
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
