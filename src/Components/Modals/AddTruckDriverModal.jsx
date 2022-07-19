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
import { AddTruck, MergeTruckDriver } from "../API/API";
import Loader from "../Loaders/Loader";
import useDrivers from "../Hooks/useDrivers";
import useTrucks from "../Hooks/useTrucks";
export default function AddTruckDriverModal({ isModalVisible, setIsModalVisible }) {
  const { Option } = Select;
  const { drivers } = useDrivers();
  const { trucks } = useTrucks();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
  const [formData, setFormData] = useState({
    truck: "",
    driver: "",
  });

  const onFinish = async (values) => {
    setLoading(true);
    let data = {
      ...formData,
    };
    if (formData.truck !== '' && formData.driver !=='') {
      await MergeTruckDriver(data)
        .then(() => {
          setLoading(false);
          // form.resetFields();
          handleCancel();
          setFormData({
            truck: "",
            driver: "",
          });
          message.success("Add Successull!");
        })
        .catch((e) => {
          setLoading(false);
          message.error(JSON.stringify(e));
        });
    } else {
      alert('choose trcuk & driver')
    }
    
  };
  return (
    <div>
      <Modal
        title="Merge Truck & Driver"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        {loading ? <Loader /> : ""}
        <div>
          <Form form={form} name="add_trcuk_form" onFinish={onFinish}>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item>
                    <Select
                      placeholder={"choose driver"}
                      // value={formData.driver?.driverName}
                      onChange={(value) => {
                        formData.driver = drivers[value];
                        setFormData({
                          ...formData,
                        });
                      }}
                    >
                      {drivers.length > 0 ? (
                        drivers
                          // .filter(
                          //   (val) => val.isTruck === undefined && !val.isTruck
                          // )
                          .map((v, i) => {
                      
                            return (
                              <Option
                              value={i}
                                disabled={v.isTruck !== undefined && v.isTruck===true}
                              >
                                {v.driverName}
                              </Option>
                            );
                          })
                      ) : (
                        <Option disabled>No Driver Avaiable</Option>
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Select
                      placeholder={"choose truck"}
                      value={formData.truck?.truckName}
                      onChange={(value) => {
                        formData.truck = trucks[value];
                        // formData.truck["uid"] = formData.truck["truckId"];
                        setFormData({
                          ...formData,
                        });
                      }}
                    >
                      {trucks.length > 0 ? (
                        trucks
                          // .filter(
                          //   (val) => val.isDriver === undefined && !val.isDriver
                          // )
                          .map((v, i) => {
                            return <Option disabled={v.isDriver===true} value={i}>{v.truckPlate}</Option>;
                          })
                      ) : (
                        <Option disabled>No Truck Avaiable</Option>
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
                Merge
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
