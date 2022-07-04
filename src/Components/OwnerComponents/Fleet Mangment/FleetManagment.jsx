import React from "react";
import { Tabs } from "antd";
import DriverManagmentTable from "../../Tables/DriverManagmentTable";
import TruckManagmentTable from "../../Tables/TruckManagmentTable";
import TruckDriverTable from "../../Tables/TruckDriverTable";
import { useTranslation } from "react-i18next";
export default function FleetManagment() {
  const { t } = useTranslation();
  const { TabPane } = Tabs;
  return (
    <div>
      <div>
        <h3>{t("routes.fleet_managment")}</h3>
      </div>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Driver" key="1">
            <DriverManagmentTable />
          </TabPane>
          <TabPane tab="Truck" key="2">
            <TruckManagmentTable />
          </TabPane>
          <TabPane tab="Trucks & Drivers " key="3">
            <TruckDriverTable />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
