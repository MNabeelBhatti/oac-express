import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { BsTruck } from "react-icons/bs";
import { Layout, Menu, Avatar, Dropdown, Radio, Card } from "antd";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import "./layout.css";
import CustomerRoutes from "../CustomerRoutes";
const HomeLayout = ({children}) => {
  const { Header, Sider, Content } = Layout;
  const { Meta } = Card;
  const navigate=useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const Profile = () => {
    return (
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
  };
  return (
    <div className="main_layout_div">
      <Layout>
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
                label: "nav 2",
                onClick: () => {
                  navigate("/home/customer/finance");
                },
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          >
            {/* <Menu.Item key={"truck"} icon={<BsTruck />}>
              <NavLink to={"/"}>Truck</NavLink>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            <div className="header_main_div">
              <div className="header_trigger_div">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </div>
              <div className="header_content_div">
                <div className="header_contnet_name_div">
                  <h1>OAC EXPRESS</h1>
                </div>
                <div className="header_content_profile_div">
                  <div>
                    <Radio.Group
                      defaultValue="en"
                      buttonStyle="solid"
                      onChange={(e) => {
                        let lng = e.target.value;
                      }}
                    >
                      <Radio.Button va value={"en"}>
                        English
                      </Radio.Button>
                      <Radio.Button value={"ar"}>العربية</Radio.Button>
                    </Radio.Group>
                  </div>
                  <div className="header_profile_div">
                    <div className="profile_avatar">
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                    </div>
                    <div className="profile_dropdown_div">
                      <Dropdown overlay={Profile} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <div>Wyydd001</div>
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Header>
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
};

export default HomeLayout;
