import React, { useState } from "react";
import "./owner_layout.css"
import { Layout } from "antd";
import OwnerHeader from "./Header/OwnerHeader";
import OwnerSideBar from "./SideBar/OwnerSidebar";
export default function OwnerLayout({ children }) {
  const { Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="main_layout_div">
      <Layout>
        <OwnerSideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <OwnerHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            className="site-layout-background "
            style={{
              margin: "24px 16px",
              padding: "24px",
            }}
          >
            <div >{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
