import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './owner_sidebar.css'
import { Layout, Menu, }from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BsTruck } from "react-icons/bs";
const { Sider } = Layout;

export default function OwnerSideBar({ collapsed }) {
const navigate=useNavigate()
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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BsTruck />,
              label: "Fleet Managment",
              onClick: () => {
                navigate("/home/owner/fleet_managment");
              },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Transportation Requests",
              onClick: () => {
                navigate("/home/owner/transportation_requests");
              },
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Finance",
              onClick: () => {
                navigate("/home/owner/finance");
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
