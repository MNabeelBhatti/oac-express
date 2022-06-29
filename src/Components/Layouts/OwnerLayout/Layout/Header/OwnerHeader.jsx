import React, { useState } from "react";
import "./owner_header.css";
import { useNavigate } from "react-router-dom";
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
  LogoutOutlined,
} from "@ant-design/icons";
//Hooks
import useUser from "../../../../Hooks/useUser";
//Firebae
import { auth } from "../../../../firebase";
//i18n
import { useTranslation } from "react-i18next";
//Redux
import { useDispatch, useSelector } from "react-redux";
import {Language} from "../../../../../Redux/Actions/userActions"


const { Header } = Layout;
const { Meta } = Card;

export default function OwnerHeader({ collapsed, setCollapsed }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { lng } = useSelector(state => state.userReducer);
  const { user } = useUser();
  const navigate = useNavigate();
  let type = JSON.parse(sessionStorage.getItem("type")) || "";

  const Profile = () => {
    return (
      <Card
        style={{
          width: 250,
        }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //   />
        // }
        actions={[
          <LogoutOutlined key="logout" onClick={async () => {
            if (window.confirm('Are you sure?')) {
                await auth.signOut();
                sessionStorage.clear();
                navigate("/");
            }
         
            
          }}/>,
          <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={type}
          description={user.name}
        />
      </Card>
    );
  };

  return (
    <div>
      <Header className="site-layout-background owner_header">
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
                  value={lng}
                  buttonStyle="solid"
                  onChange={(e) => {
                    let lng = e.target.value;
                    dispatch(Language(lng));
                    i18n.changeLanguage(lng);
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
                      <div>{user.name}</div>
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
