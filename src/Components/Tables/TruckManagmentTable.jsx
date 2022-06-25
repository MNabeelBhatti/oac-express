import React, { useState } from "react";
import {
  Table,
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
  Select,
} from "antd";

import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Plate",
    dataIndex: "plate",
    key: "plate",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    model: "Honda",
    plate: "lxe 8908",
    type: "heavy",
        capacity: "40 Ton",
    description:'It is Honda company heavy truck with 40 ton weight capacity'
  },
];

export default function TruckManagmentTable() {
    const { Option } = Select;
  const [checkStrictly, setCheckStrictly] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    };
    const getFile = (e) => {
      console.log("Upload event:", e);

      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  const AddModal = () => {
    return (
      <Modal
        title="Add New Truck"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
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
                    name="truckplate"
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
                    name="truckCapcity"
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
                      <Option value="30 Ton">40 Ton</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
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
                      <Option value="30 feet">40 feet</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
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
                  <Form.Item
                    name="truckLcience"
                                    valuePropName="fileList"
                                    label='License'
                      getValueFromEvent={getFile}
                  >
                    <Upload multiple={false} name="logo"  listType="picture">
                      <Button icon={<UploadOutlined />}>upload license</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

            </Form.Item> */}

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
    );
  };

  return (
    <div>
      <AddModal />
      {/* <div className="table_topar_div">
        <div className="table_topar_add_div">
          <Radio.Group
            className="rounded_radio_btn"
            defaultValue="trucks"
            buttonStyle="solid"
          >
            <Radio.Button value="trucks">Trucks</Radio.Button>
            <Radio.Button value="drivers">Drivers</Radio.Button>
          </Radio.Group>
        </div>
        <div className="table_topar_switch_div">
          <div className="topar_switch_div">
            <span className="txt_span">Unverified Drivers</span>
            <span>
              <Switch
                checked={checkStrictly}
                onChange={(e) => {
                  setCheckStrictly(!checkStrictly);
                }}
              />
            </span>
          </div>
        </div>
      </div> */}
      <div className="table_topar_add_div_">
        <Button
          type="light"
          // shape="circle"
          icon={<PlusCircleOutlined />}
          size={"middle"}
          onClick={showModal}
        >
          {"Add"}
        </Button>
      </div>
      <div className="table_search_div">
        <Input
          allowClear
          size="middle"
          placeholder="Serach"
          prefix={<SearchOutlined />}
        />
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
}
