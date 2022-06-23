import React, { useState } from "react";
import "./customer_layout.css";
import { Layout } from "antd";

import CustomerHeader from "./Header/CustomerHeader";
import CustomerSideBar from "./SideBar/CustomerSidebar";
export default function CustomerLayout({ children }) {
  const { Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="main_layout_div">
      <Layout>
        <CustomerSideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <CustomerHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
