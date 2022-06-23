import React, { useState,useEffect } from "react";
import "./login.css";
import { useTranslation,Trans } from "react-i18next";
import {useNavigate} from 'react-router-dom'
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Switch,
  Divider,
  Row,
  Col,
} from "antd";
export default function Login() {
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
  const [input, setInput] = useState(true);
  const [login, setLogin] = useState(true);

  const onFinishLogin = (values) => {
    console.log("Received values of form: ", values);
    if (values.type==='owner') {
      navigate("/home/owner/fleet_managment");
    } else {
      navigate("/home/customer/apponentment");
    }

        // navigate("/home/customer/apponentment");
  };
  const onFinishSignup = (values) => {
      console.log("Received values of form: ", values);
       if (values.type === "owner") {
         navigate("/home/owner/fleet_managment");
       } else {
         navigate("/home/customer/apponentment");
       }

  };

  return (
    <div className="main_login_div">
      <div className="login_background_div">
        <div className="login_content_div">
          <div className="login_wlp_div"></div>
          <div className="login_form_div">
            <div className="login_form_content_div">
              <div className="login_form_content_upper_div">
                <div className="login_form_content_upper_logo_div">
                  <div className="logo_div">
                    <img className="logo_img" src="/assets/logo.png" />
                  </div>
                </div>
                <div className="login_form_content_upper_lng_div">
                  {/* <button className="lng_btn">English</button> */}

                  <div className="change-locale">
                    <Radio.Group
                      defaultValue="en"
                      buttonStyle="solid"
                      onChange={(e) => {
                        let lng = e.target.value;
                        i18n.changeLanguage(lng);

                        // i18n.language = lng;
                      }}
                    >
                      <Radio.Button value={"en"}>English</Radio.Button>
                      <Radio.Button value={"ar"}>العربية</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="login_form_content_from_div">
                <div className="form_div">
                  <div>
                    <h2>
                      {t("welcome")}

                      {/* {"Welcome to OAC EXPRESS"} */}
                    </h2>
                  </div>
                  {login ? (
                    <>
                      <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinishLogin}
                      >
                        <Form.Item
                          name="useremail"
                          rules={[
                            {
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                        >
                          <Input
                            type="email"
                            prefix={
                              <MailOutlined className="site-form-item-icon" />
                            }
                            placeholder="User Email"
                          />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                            {
                              min: 8,
                              message: "Please enter 8 digit Password!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                            minLength={8}
                          />
                        </Form.Item>

                        <Form.Item>
                          <div className="forget_div">
                            {/* <Switch
                              checked={input}
                              checkedChildren="Owner"
                              unCheckedChildren="Customer"
                              onChange={() => {
                                setInput(!input);
                              }}
                            /> */}
                            <Form.Item
                              name={"type"}
                              rules={[
                                {
                                  required: true,
                                  message: "Please Select type",
                                },
                              ]}
                            >
                              <Radio.Group >
                                <Radio value={"owner"}>Owner</Radio>
                                <Radio value={"customer"}>Customer</Radio>
                              </Radio.Group>
                            </Form.Item>

                            <a className="login-form-forgot">
                              <b>Forgot password?</b>
                            </a>
                          </div>
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button submit_btn"
                          >
                            <b>{t("buttonsTxt.login")}</b>
                          </Button>
                        </Form.Item>

                        <div>
                          <Divider orientation="center">
                            Don't have an account?{" "}
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                setLogin(!login);
                              }}
                            >
                              Register Now!
                            </a>
                          </Divider>
                        </div>
                      </Form>
                    </>
                  ) : (
                    <>
                      <Form
                        name="signup"
                        className="login-form"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinishSignup}
                      >
                        <Row className="gutter-row">
                          <Col span={11}>
                            <Form.Item
                              name="userName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input User Name!",
                                },
                              ]}
                            >
                              <Input
                                type="text"
                                prefix={
                                  <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="User Name"
                              />
                            </Form.Item>
                          </Col>
                          <Col span={11} style={{ marginLeft: "10px" }}>
                            <Form.Item
                              name="useremail"
                              rules={[
                                {
                                  type: "email",
                                  message: "The input is not valid E-mail!",
                                },
                                {
                                  required: true,
                                  message: "Please input your E-mail!",
                                },
                              ]}
                            >
                              <Input
                                type="email"
                                prefix={
                                  <MailOutlined className="site-form-item-icon" />
                                }
                                placeholder="User Email"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row className="gutter-row">
                          <Col span={11}>
                            <Form.Item
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Password!",
                                },
                                {
                                  min: 8,
                                  message: "Please enter 8 digit Password!",
                                },
                              ]}
                            >
                              <Input
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                                minLength={8}
                              />
                            </Form.Item>
                          </Col>

                          <Col span={11} style={{ marginLeft: "10px" }}>
                            <Form.Item
                              name="confirmPassword"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input your Confirm Password!",
                                },
                                {
                                  min: 8,
                                  message: "Please enter 8 digit Password!",
                                },
                                ({ getFieldValue }) => ({
                                  validator(_, value) {
                                    if (
                                      !value ||
                                      getFieldValue("password") === value
                                    ) {
                                      return Promise.resolve();
                                    }

                                    return Promise.reject(
                                      new Error(
                                        "The two passwords that you entered do not match!"
                                      )
                                    );
                                  },
                                }),
                              ]}
                            >
                              <Input
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Confirm Password"
                                minLength={8}
                              />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Form.Item
                          name={"type"}
                          rules={[
                            {
                              required: true,
                              message: "Please Select type",
                            },
                          ]}
                        >
                          <Radio.Group >
                            <Radio value={"owner"}>Owner</Radio>
                            <Radio value={"customer"}>Customer</Radio>
                          </Radio.Group>
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button submit_btn"
                          >
                            <b>
                              <b>{t("buttonsTxt.register")}</b>
                            </b>
                          </Button>
                        </Form.Item>

                        <div>
                          <Divider orientation="center">
                            Already have an account?{" "}
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                setLogin(!login);
                              }}
                            >
                              Login!
                            </a>
                          </Divider>
                        </div>
                      </Form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
