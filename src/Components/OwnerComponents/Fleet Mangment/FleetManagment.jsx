import React from "react";
import { Tabs } from "antd";
import DriverManagmentTable from "../../Tables/DriverManagmentTable";
import TruckManagmentTable from "../../Tables/TruckManagmentTable";
export default function FleetManagment() {
  const { TabPane } = Tabs;
  return (
    <div>
      <div>
        <h3>{"Fleet Managment"}</h3>
      </div>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Driver" key="1">
            <DriverManagmentTable />
          </TabPane>
          <TabPane tab="Truck" key="2">
            <TruckManagmentTable/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
