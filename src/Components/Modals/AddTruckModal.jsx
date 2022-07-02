import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  Form,
  Upload,
  Row,
  Col,
  Select,
  message,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";
import { AddTruck, uploadImage } from "../API/API";
import Loader from "../Loaders/Loader";
import useDrivers from "../Hooks/useDrivers";
export default function AddTruckModal({ isModalVisible, setIsModalVisible }) {
  const { Option } = Select;
  const { drivers } = useDrivers();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
  const [formData, setFormData] = useState({
    truckLicense: "",
    driver: "",
  });

  const onFinish = async (values) => {
    setLoading(true);
    if (formData.truckLicense !== "") {
      await uploadImage("Trucks/", formData.truckLicense).then((res) => {
        formData.truckLicense = res;
        setFormData({ ...formData });
      });
    }
    let data = {
      ...values,
      ...formData,
      isDriver: formData.driver !== "" ? true : false,
    };
    await AddTruck(data)
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
        title="Add New Truck"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {loading ? <Loader /> : ""}
        <div>
          <Form form={form} name="add_trcuk_form" onFinish={onFinish}>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="truckModel"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Model" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="truckPlate"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Plate" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>

            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    hasFeedback
                    name="truckCapacity"
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
                    name="truckHeight"
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
                    name="truckType"
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
                <Col span={12}>
                  <Upload
                    multiple={false}
                    maxCount={1}
                    name="logo"
                    listType="picture"
                    onChange={(e) => {
                      if (e.file.status === "removed") {
                        formData.truckLicense = "";
                        setFormData({
                          ...formData,
                        });
                      } else {
                        formData.truckLicense = e.file.originFileObj;
                        setFormData({
                          ...formData,
                        });
                      }
                    }}
                  >
                    <Button icon={<UploadOutlined />}>upload license</Button>
                  </Upload>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item>
                    <Select
                      placeholder={"choose driver"}
                      onChange={(e) => {
                        
                        formData.truckLicense = drivers[e];
                        setFormData({
                          ...formData,
                        });
                      }}
                    >
                      {drivers.length > 0 ? (
                        drivers
                          .filter(
                            (val) => val.isTruck === undefined && !val.isTruck
                          )
                          .map((v, i) => {
                            return <Option value={i}>{v.driverName}</Option>;
                          })
                      ) : (
                        <Option disabled>No Driver Avaiable</Option>
                      )}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
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
