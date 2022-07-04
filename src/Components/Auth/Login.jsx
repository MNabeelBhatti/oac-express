import React, { useState, useEffect } from "react";
import "./login.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
  Alert,
  message
} from "antd";
//Api
import { FindUser, AddUser } from "../API/API";
//loader
import Loader from "../Loaders/Loader";
//Redux
import { Language } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { lng } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [input, setInput] = useState(true);
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinishLogin = (values) => {
     setLoading(true);
    FindUser(values).then((res) => {
      if (res.status === "success") {
        setLoading(false);
        message.success('Login Successfully!')
        if (values.userType === "owners") {
          navigate("/owner/fleet_managment");
        } else if (values.userType === "customers") {
          navigate("/customer/tarnsport_requests");
        }
      } else {
        setLoading(false);
        // alert(res.message);
          message.error(res.message);
      }
        
      })
      .catch((e) => {
        setLoading(false)
       message.error(JSON.stringify(e));
        //  alert(e);
      });
  };

  const onFinishSignup = (values) => {
    setLoading(true);
    AddUser(values)
      .then((res) => {
        if (res.status === "success") {
          message.success("Signup Successfully!");
        setLoading(false);
        if (values.type === "owners") {
          navigate("/owner/fleet_managment");
        } else if (values.type === "customers") {
          navigate("/customer/tarnsport_requests");
        }
        } else {
           setLoading(false);
           message.error(res.message);
      }
      })
      .catch((e) => {
        setLoading(false)
        message.error(JSON.stringify(e))
        //  alert(e);

       return
      });
  };

  return (
    <div className="main_login_div">
      {loading ? <Loader /> : ""}
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
                      value={lng}
                      buttonStyle="solid"
                      onChange={(e) => {
                        let lng = e.target.value;
                        dispatch(Language(lng));
                        i18n.changeLanguage(lng);
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
                        onFinish={onFinishLogin}
                      >
                        <Form.Item
                          name="userEmail"
                          hasFeedback
                          rules={[
                            {
                              type: "email",
                              message: t("errorsTxt.invalidEmail"),
                            },
                            {
                              required: true,
                              message: t("errorsTxt.requiredField"),
                            },
                          ]}
                        >
                          <Input
                            type="email"
                            prefix={
                              <MailOutlined className="site-form-item-icon" />
                            }
                            placeholder={t("placeholders.inputEmail")}
                          />
                        </Form.Item>
                        <Form.Item
                          name="userPassword"
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: t("errorsTxt.requiredField"),
                            },
                            {
                              min: 8,
                              message: t("errorsTxt.minimumLength"),
                            },
                          ]}
                        >
                          <Input.Password
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder={t("placeholders.inputPass")}
                            minLength={8}
                          />
                        </Form.Item>

                        <Form.Item>
                          <div className="forget_div">
                            <Form.Item
                              name={"userType"}
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: t("errorsTxt.requiredField"),
                                },
                              ]}
                            >
                              <Radio.Group>
                                <Radio value={"owners"}>{t("Owner")}</Radio>
                                <Radio value={"customers"}>
                                  {t("Customer")}
                                </Radio>
                              </Radio.Group>
                            </Form.Item>

                            <a className="login-form-forgot">
                              <b>{t("account.forget_password")}?</b>
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
                            {t("account.dont_have_account")}?{" "}
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                setLogin(!login);
                              }}
                            >
                              {t("account.register_now")}
                            </a>
                          </Divider>
                        </div>
                      </Form>
                    </>
                  ) : (
                    <>
                      <Form
                        name="signup"
                        className="signup-form"
                        onFinish={onFinishSignup}
                      >
                        <Row gutter={24}>
                          <Col span={12}>
                            <Form.Item
                              name="name"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: t("errorsTxt.requiredField"),
                                },
                              ]}
                            >
                              <Input
                                type="text"
                                prefix={
                                  <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder={t("placeholders.inputName")}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name="email"
                              hasFeedback
                              rules={[
                                {
                                  type: "email",
                                  message: t("errorsTxt.invalidEmail"),
                                },
                                {
                                  required: true,
                                  message: t("errorsTxt.requiredField"),
                                },
                              ]}
                            >
                              <Input
                                type="email"
                                prefix={
                                  <MailOutlined className="site-form-item-icon" />
                                }
                                placeholder={t("placeholders.inputEmail")}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={24}>
                          <Col span={12}>
                            <Form.Item
                              name="password"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: t("errorsTxt.requiredField"),
                                },
                                {
                                  min: 8,
                                  message: t("errorsTxt.minimumLength"),
                                },
                              ]}
                            >
                              <Input.Password
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder={t("placeholders.inputPass")}
                                minLength={8}
                              />
                            </Form.Item>
                          </Col>

                          <Col span={12}>
                            <Form.Item
                              name="confirmPassword"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: t("errorsTxt.requiredField"),
                                },
                                {
                                  min: 8,
                                  message: t("errorsTxt.minimumLength"),
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
                                      new Error(t("errorsTxt.passwordMatch"))
                                    );
                                  },
                                }),
                              ]}
                            >
                              <Input.Password
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder={t("placeholders.ConfirmPass")}
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
                              message: t("errorsTxt.requiredField"),
                            },
                          ]}
                        >
                          <Radio.Group>
                            <Radio value={"owners"}>{t("Owner")}</Radio>
                            <Radio value={"customers"}>{t("Customer")}</Radio>
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
                            {t("account.already_have_account")}?
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                setLogin(!login);
                              }}
                            >
                              {t("buttonsTxt.login")}
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
