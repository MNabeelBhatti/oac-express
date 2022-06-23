import React, { useState } from "react";
import "./table.css";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, Switch, Table, Button, Modal,Input} from "antd";
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
    width: "12%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Joe Black fg",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 4,
    name: "Joedf Black sfd",
    age: 38,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 5,
    name: "Joe Black f",
    age: 62,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 6,
    name: "Joe Black sg",
    age: 22,
    address: "Sidney No. 1 Lake Park",
  },
]; // rowSelection objects indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default function AppointmentTable() {
  const [checkStrictly, setCheckStrictly] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const BookTruckModal = () => {
    return (
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  };

  return (
    <>
      <BookTruckModal />
      <div className="table_topar_div">
        <div className="table_topar_add_div">
          <Button
            type="light"
            // shape="circle"
            icon={<PlusCircleOutlined />}
            size={"middle"}
            onClick={showModal}
          >
            {" Book new truck Appointment"}
          </Button>
        </div>
        <div className="table_topar_switch_div">
          <div className="topar_switch_div">
            <span className="txt_span">Eligible for saded</span>
            <span>
              <Switch checked={checkStrictly} onChange={setCheckStrictly} />
            </span>
          </div>
        </div>
      </div>
      <div className="table_search_div">
        <Input
          size="middle"
          placeholder="Serach"
          prefix={<SearchOutlined />}
        />
      </div>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </>
  );
}
