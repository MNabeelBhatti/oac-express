import React, { useState } from "react";
import { Modal, Button, Input, Form, Row, Col, Select, message } from "antd";
import Loader from "../Loaders/Loader";
//Api
import { AddRequest } from "../API/API";
export default function MakeRequestModal({
  isModalVisible,
  setIsModalVisible,
}) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
    const onFinish = (values) => {
        setLoading(true);
        AddRequest({ ...values })
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
  return (
    <div>
      <Modal
        title="Make New Request"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        {loading ? <Loader /> : ""}
        <div>
          <Form form={form} name="make_request_form" onFinish={onFinish}>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="name"
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
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="from"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="From" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="to"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="To" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="place"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Place" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="distance"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Distance" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Price" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="time"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Estimate Time" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>

            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="capacity"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Select placeholder={"select capcity"}>
                      <Option value="20 Ton">20 Ton</Option>
                      <Option value="30 Ton">30 Ton</Option>
                      <Option value="40 Ton">40 Ton</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="height"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Select placeholder={"select hight"}>
                      <Option value="20 feet">20 feet</Option>
                      <Option value="30 feet">30 feet</Option>
                      <Option value="40 feet">40 feet</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="type"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Select placeholder={"select type"}>
                      <Option value="small">Small</Option>
                      <Option value="meduim">Meduim</Option>
                      <Option value="large">Large</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
              </Row>
            </Input.Group>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                // className="login-form-button"
              >
                Make
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
