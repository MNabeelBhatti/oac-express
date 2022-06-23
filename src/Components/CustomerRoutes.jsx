import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Appointment from './Appointment/Appointment';
import HomeLayout from './Layout/Layout';
export default function CustomerRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="apponentment"
          element={
            <HomeLayout>
              <Appointment />
            </HomeLayout>
          }
        />
        <Route
          path="finance"
          element={
            <HomeLayout>
              <Appointment />
            </HomeLayout>
          }
        />
      </Routes>
    </div>
  );
}
