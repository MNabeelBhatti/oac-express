import React, { useState } from "react";
import { Table, Button, Input, Space, Popconfirm } from "antd";
import "./table.css";
import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddDriverModal from "../Modals/AddDriverModal";
import useDrivers from "../Hooks/useDrivers";
import { DeleteDriver } from "../API/API";

export default function DriverManagmentTable() {
  const { drivers } = useDrivers();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "driverName",
      key: "driverName",
    },
    {
      title: "Age",
      dataIndex: "driverAge",
      key: "driverAge",
    },
    {
      title: "Nationality",
      dataIndex: "driverNationality",
      key: "driverNationality",
    },
    {
      title: "Address",
      dataIndex: "driverAddress",
      key: "driverAddress",
    },
    {
      title: "Action",

      dataIndex: "",
      key: "x",
      align: "center",
      render: (record) => (
        <Space>
          {/* <span className="ant-btn  ant-btn-warn">
            <EditOutlined />
          </span> */}

          <Popconfirm
            title={"Are you sure?"}
            okText="Ok"
            cancelText="Cancel"
            onConfirm={() => {
              DeleteDriver(record?.uid);
            }}
          >
            <span className="ant-btn ant-btn-danger">
              <DeleteOutlined />
            </span>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <AddDriverModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />

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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <Table
        columns={columns}
        // expandable={{
        //   expandedRowRender: (record) => (
        //     <p
        //       style={{
        //         margin: 0,
        //       }}
        //     >
        //       {record.description}
        //     </p>
        //   ),
        //   rowExpandable: (record) => record.name !== "Not Expandable",
        // }}
      
        dataSource={drivers.filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val &&
            Object.keys(val).some((v) =>
              val[v]
                .toString()
                .toLowerCase()
                .includes(search.toString().toLowerCase())
            )
          ) {
            return val;
          }
        })}
      />
    </div>
  );
}
