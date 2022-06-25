import React from "react";
import { Routes, Route } from "react-router-dom";
import OwnerLayout from "../Components/Layouts/OwnerLayout/Layout/OwnerLayout";
import FleetManagment from "../Components/OwnerComponents/Fleet Mangment/FleetManagment";
import TRequests from "../Components/OwnerComponents/TRequests/TRequests";
import Finance from "../Components/OwnerComponents/Finance/Finance";
export default function OwnerRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="fleet_managment"
          element={
            <OwnerLayout>
          <FleetManagment/>
            </OwnerLayout>
          }
        />
        <Route
          path="transportation_requests"
          element={
            <OwnerLayout>
              <TRequests/>
            </OwnerLayout>
          }
        />
        <Route
          path="finance"
          element={
            <OwnerLayout>
              <Finance />
            </OwnerLayout>
          }
        />
      </Routes>
    </div>
  );
}
