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
  message
} from "antd";
import "./table.css";
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
   const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    driverAddress: "",
    driverAge: "",
    driverId: "",
    driverLicense: "",
    driverName: "",
    driverNationality: "",
    portId: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

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

  const getFile = (e, label) => {
    // formData[label] = { file: e.file };
    // setFormData({...formData})
    console.log(e.file);
    form.setFieldsValue({ driverId: e.file.originFileObj });
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
 
  const AddModal = () => {
    const layout = {
      labelCol: {
        span: 5,
      },
      // wrapperCol: {
      //   span: 16,
      // },
    };
    return (
      <Modal
        title="Add New Driver"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Form
            name="control-hooks"
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

            <div className="form_row_div">
              <Row gutter={24}>
                <Col span={12}>
                  <Upload multiple={false} maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload Driver ID</Button>
                  </Upload>
                </Col>
                <Col span={12}>
                  <Upload multiple={false} maxCount={1} name="logo">
                    <Button icon={<UploadOutlined />}>Upload License</Button>
                  </Upload>
                </Col>
              </Row>
            </div>
            <div className="form_row_div">
              <Row gutter={24}>
                <Col span={12}>
                  <Upload multiple={false} maxCount={1} name="logo">
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



 
          // <form onSubmit={handleSubmit}>
          //   <div className="form_row_div">
          //     <Row className="mb-2" gutter={24}>
          //       <Col span={12}>
          //         <Input required={true} placeholder="Name" />
          //       </Col>
          //       <Col span={12}>
          //         <Input type={"number"} required placeholder="Age" />
          //       </Col>
          //     </Row>
          //   </div>
          //   <div className="form_row_div">
          //     <Row className="mb-2" gutter={24}>
          //       <Col span={12}>
          //         <Input required={true} placeholder="Nationality" />
          //       </Col>
          //       <Col span={12}>
          //         <Input type={"text"} required placeholder="Address" />
          //       </Col>
          //     </Row>
          //   </div>
          //   <div className="form_row_div">
          //     <Row gutter={24}>
          //       <Col span={12}>
          //         <Upload
          //           onChange={({ fileList }) => {
          //             console.log(fileList);
          //           }}
          //           multiple={false}
          //           maxCount={1}
          //         >
          //           <Button icon={<UploadOutlined />}>Driver ID</Button>
          //         </Upload>
          //       </Col>
          //       <Col span={12}>
          //         <Upload multiple={false} maxCount={1}>
          //           <Button icon={<UploadOutlined />}>Driver Licence</Button>
          //         </Upload>
          //       </Col>
          //     </Row>
          //   </div>
          //   <div className="form_row_div">
          //     <Row gutter={24}>
          //       <Col span={12}>
          //         <Upload
          //           required
          //           onChange={({ fileList }) => {
          //             console.log(fileList);
          //           }}
          //           multiple={false}
          //           maxCount={1}
          //         >
          //           <Button icon={<UploadOutlined />}>Port ID</Button>
          //         </Upload>
          //       </Col>
          //     </Row>
          //   </div>

          //   <div>
          //     <button className="ant-btn ant-btn-primary" type="submit">
          //       Add
          //     </button>
          //   </div>
          // </form>;