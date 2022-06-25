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
} from "antd";

import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Nationalty",
    dataIndex: "nationalty",
    key: "nationalty",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
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
    name: "John Brown",
    age: 32,
    nationalty: "USA",
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    nationalty: "UK",
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Zia",
    age: 29,
    nationalty: "suadia",
    address: "AlRaiz No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    nationalty: "Austerlia",
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];
export default function DriverManagmentTable() {
  const { Dragger } = Upload;
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
        title="Add New Driver"
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
                    name="driverName"
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
                    name="driverage"
                    rules={[
                      {
                        required: true,
                        message: "Requerd Field!",
                      },
                    ]}
                  >
                    <Input placeholder="Age" />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>

            <Form.Item
              name="driverNationality"
              rules={[
                {
                  required: true,
                  message: "Requerd Field!",
                },
              ]}
            >
              <Input placeholder="Nationality" />
            </Form.Item>
            <Form.Item
              name="driverAddress"
              rules={[
                {
                  required: true,
                  message: "Requerd Field!",
                },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Input.Group>
              <Row gutter={24}>
                <Col span={11}>
                  <Form.Item
                    name="driverId"
                    label="Driver ID"
                    valuePropName="fileList"
                    getValueFromEvent={getFile}
                  >
                    <Upload>
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item
                    name="driverLicense"
                    label="Driver License"
                    valuePropName="fileList"
                    getValueFromEvent={getFile}
                  >
                    <Upload name="logo">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>
            <Input.Group>
              <Row gutter={24}>
                <Col span={11}>
                  <Form.Item
                    name="posrtId"
                    label="Port ID"
                    valuePropName="fileList"
                    getValueFromEvent={getFile}
                  >
                    <Upload name="logo">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
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
