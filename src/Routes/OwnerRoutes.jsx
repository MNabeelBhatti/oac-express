import React from "react";
import { Routes, Route } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import OwnerLayout from "../Components/Layouts/OwnerLayout/Layout/OwnerLayout";
export default function OwnerRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="fleet_managment"
          element={
            <OwnerLayout>
              <Appointment />
            </OwnerLayout>
          }
        />
        <Route
          path="transportation_requests"
          element={
            <OwnerLayout>
              <Appointment />
            </OwnerLayout>
          }
        />
        <Route
          path="finance"
          element={
            <OwnerLayout>
              <Appointment />
            </OwnerLayout>
          }
        />
      </Routes>
    </div>
  );
}
