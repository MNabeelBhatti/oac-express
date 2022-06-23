import React from 'react'
import { Tabs } from "antd";
import AppointmentTable from "../Tables/AppointmentTable";
import OrdersTable from '../Tables/OrdersTable';
import ManagmentTable from '../Tables/ManagmentTable';
export default function Appointment() {
    const { TabPane } = Tabs;
  const onChange = (key) => {
    // console.log(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Truck Appointment" key="1">
          <AppointmentTable/>
        </TabPane>
              <TabPane tab="Transportaion Order" key="2">
                  <OrdersTable/>
       </TabPane>
        <TabPane tab="Fleet Managment" key="3">
          <ManagmentTable/>s
        </TabPane>
      </Tabs>
    </div>
  );
}
