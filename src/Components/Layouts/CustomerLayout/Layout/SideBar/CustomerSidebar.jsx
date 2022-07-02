import React, { useState } from "react";
import "./customer_sidebar.css";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { BsTruck } from "react-icons/bs";
//firebase
import { auth } from "../../../../firebase";
//i18n
import { useTranslation } from "react-i18next";
import { Logout } from "../../../../API/API";
const { Sider } = Layout;

export default function CustomerSideBar({ collapsed }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
          // defaultSelectedKeys={["1"]}
          selectedKeys={[window.location.pathname]}
          items={[
            {
              key: "/customer/apponentment",
              icon: <BsTruck />,
              label: t("routes.appointments"),
              onClick: () => {
                navigate("/customer/appointments");
              },
            },
            {
              key: "/customer/history",
              icon: <VideoCameraOutlined />,
              label: t("routes.history"),
              onClick: () => {
                navigate("/customer/history");
              },
            },
            {
              key: "/",
              icon: <LogoutOutlined />,
              label: t("routes.logout"),
              onClick: Logout
              
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
