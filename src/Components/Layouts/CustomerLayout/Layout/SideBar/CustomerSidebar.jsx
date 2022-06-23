import React, { useState } from "react";
import "./customer_sidebar.css";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BsTruck } from "react-icons/bs";
const { Sider } = Layout;

export default function CustomerSideBar({ collapsed }) {
  const navigate=useNavigate()
  // const [collapsed, setCollapsed] = useState(false);

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
              label: "Truck Appointments",
              onClick: () => {
                navigate("/home/customer/apponentment");
              },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "History",
              onClick: () => {
                navigate("/home/customer/history");
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
