import React, { useState } from "react";
import {
  Modal,
  Button,
  Switch,
  Input,
  Radio,
  Checkbox,
  Form,
  Upload,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AddDriver, uploadImage } from "../API/API";
// import SimpleLoader from "../Loaders/simpleLoader";
import Loader from "../Loaders/Loader";
export default function AddDriverModal({ isModalVisible, setIsModalVisible }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    driverId: "",
    driverLicense: "",
    portId: "",
  });
  const handleOk = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
  const onFinish = async (values) => {
    setLoading(true);
    if (formData.driverId !== "") {
      await uploadImage("Drivers/", formData.driverId).then((res) => {
        formData.driverId = res;
        setFormData({ ...formData });
      });
    }
    if (formData.driverLicense !== "") {
      await uploadImage("Drivers/", formData.driverLicense).then((res) => {
        formData.driverLicense = res;
        setFormData({ ...formData });
      });
    }
    if (formData.portId !== "") {
      await uploadImage("Drivers/", formData.portId).then((res) => {
        formData.portId = res;
        setFormData({ ...formData });
      });
    }
    let data = {
      ...values,
      ...formData,
    };
    await AddDriver(data)
      .then(() => {
        setLoading(false);
        form.resetFields();
        handleCancel();
        message.success("Add Successull!");
      })
      .catch((e) => {
        setLoading(false);
        message.error(JSON.stringify(e));
      });
  };
  let file = [
    // {
    //   uid: "-2",
    //   name: "yyy.png",
    //   status: "error",
    //   url: "https://www.sampleposts.com/wp-content/uploads/2020/12/Compliments-For-Her-Picture-800x500.jpg",
    // },
  ];

  return (
    <div>
      <Modal
        title="Add New Driver"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {loading ? <Loader /> : ""}
        <div>
          <Form
            form={form}
            name="add_driver_form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="driverName"
                    // label="Name"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="driverAge"
                    // label="Age"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input type={"number"} placeholder="Age" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="driverNationality"
                    // label="Nationality"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Nationality" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="driverAddress"
                    // label="Address"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                      {
                        min: 8,
                        message: "Minimun length of 8 characters",
                      },
                    ]}
                  >
                    <Input.Password type={"password"} placeholder="Password" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="driverIdNumber"
                    // label="Address"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Id Number" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <div className="form_row_div">
              <Row gutter={24}>
                <Col span={12}>
                  <Upload
                    listType="picture"
                    multiple={false}
                    maxCount={1}
                    onChange={(e) => {
                      if (e.file.status === "removed") {
                        formData.driverId = "";
                        setFormData({
                          ...formData,
                        });
                      } else {
                        formData.driverId = e.file.originFileObj;
                        setFormData({
                          ...formData,
                        });
                      }
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Upload Driver ID</Button>
                  </Upload>
                </Col>
                <Col span={12}>
                  <Upload
                    listType="picture"
                    multiple={false}
                    maxCount={1}
                    onChange={(e) => {
                      if (e.file.status === "removed") {
                        formData.driverLicense = "";
                        setFormData({
                          ...formData,
                        });
                      } else {
                        formData.driverLicense = e.file.originFileObj;
                        setFormData({
                          ...formData,
                        });
                      }
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Upload License</Button>
                  </Upload>
                </Col>
              </Row>
            </div>
            <div className="form_row_div">
              <Row gutter={24}>
                <Col span={12}>
                  <Upload
                    listType="picture"
                    multiple={false}
                    maxCount={1}
                    onChange={(e) => {
                      if (e.file.status === "removed") {
                        formData.portId = "";
                        setFormData({
                          ...formData,
                        });
                      } else {
                        formData.portId = e.file.originFileObj;
                        setFormData({
                          ...formData,
                        });
                      }
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Upload Port ID</Button>
                  </Upload>
                </Col>
              </Row>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
