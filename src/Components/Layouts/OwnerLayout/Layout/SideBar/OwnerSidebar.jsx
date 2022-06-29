import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./owner_sidebar.css";
import { Layout, Menu,Popconfirm } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { BsTruck } from "react-icons/bs";
import { ImCoinDollar } from "react-icons/im";
import { auth } from "../../../../firebase";
import { useTranslation } from "react-i18next";
const { Sider } = Layout;

export default function OwnerSideBar({ collapsed }) {
  const {t}=useTranslation()
  const navigate = useNavigate();
  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <div className="logo_div">
            <img width={60} src="/assets/logo.png" />
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[window.location.pathname]}
          items={[
            {
              key: "/owner/fleet_managment",
              icon: <SettingOutlined />,
              label: t("routes.fleet_managment"),
              onClick: () => {
                navigate("/owner/fleet_managment");
              },
            },
            {
              key: "/owner/transportation_requests",
              icon: <BsTruck />,
              label: t("routes.transportation_request"),
              onClick: () => {
                navigate("/owner/transportation_requests");
              },
            },
            {
              key: "/owner/finance",
              icon: <ImCoinDollar />,
              label: t("routes.finance"),
              onClick: () => {
                navigate("/owner/finance");
              },
            },
            {
              key: "/",
              icon: <LogoutOutlined />,
              label:  t("routes.logout"),
              onClick: async () => {
                if (window.confirm("Are you sure?")) {
                  await auth.signOut();
                  sessionStorage.clear();
                  navigate("/");
                }
              },
            },
          ]}
        >
          {/* <Menu.Item key={"truck"} icon={<BsTruck />}>
              <NavLink to={"/"}>Truck</NavLink>
            </Menu.Item> */}
        </Menu>
      </Sider>
    </div>
  );
}
