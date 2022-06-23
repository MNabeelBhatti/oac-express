import React, { useState } from "react";
import './customer_header.css';
import { Layout, Avatar, Dropdown, Radio, Card } from "antd";
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
const { Header } = Layout;
const { Meta } = Card;

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

export default function CustomerHeader({ collapsed, setCollapsed }) {


  return (
    <div>
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
                      <div>Customer</div>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
