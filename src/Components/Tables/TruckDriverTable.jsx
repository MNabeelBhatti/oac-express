import React, { useState } from "react";
import { Table, Button, Input, Popconfirm, Space, Select } from "antd";

import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import AddTruckDriverModal from "../Modals/AddTruckDriverModal";
import useTrucks from "../Hooks/useTrucks";
import useTransports from "../Hooks/useTransport";
import { DeleteTruckDriver } from "../API/API";
export default function TruckDriverTable() {
  const { Option } = Select;
  const { trucks } = useTrucks();
  const { transports } = useTransports();

  const [search, setSearch] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "Model",
      //   dataIndex: "truckModel",
      //   key: "truckModel",
      render: (record) => <Space>{record?.truck?.truckModel}</Space>,
    },
    {
      title: "Plate",
      //   dataIndex: "truckPlate",
      //   key: "truckplate",
      render: (record) => <Space>{record?.truck?.truckPlate}</Space>,
    },
    {
      title: "Type",
      //   dataIndex: "truckType",
      //   key: "truckType",
      render: (record) => <Space>{record?.truck?.truckType}</Space>,
    },
    {
      title: "Capacity",
      //   dataIndex: "truckCapacity",
      //   key: "truckCapacity",
      render: (record) => <Space>{record?.truck?.truckCapacity}</Space>,
    },
    {
      title: "Driver Name",
      // dataIndex: "driver",
      // key: "driver",
      render: (record) => <Space>{record?.driver?.driverName}</Space>,
    },
    {
      title: "Driver Age",
      // dataIndex: "driver",
      // key: "driver",
      render: (record) => <Space>{record?.driver?.driverAge}</Space>,
    },
    {
      title: "Driver Address",
      // dataIndex: "driver",
      // key: "driver",
      render: (record) => <Space>{record?.driver?.driverAddress}</Space>,
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
                
               DeleteTruckDriver(record?.uid, record);
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
      <AddTruckDriverModal
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
          {"Add Truck & Driver"}
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
        dataSource={
          transports &&
          transports.length > 0 &&
          transports.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              (val &&
                Object.keys(val.driver).some((v) =>
                  val[v]
                    .toString()
                    .toLowerCase()
                    .includes(search.toString().toLowerCase())
                )) ||
              Object.keys(val.truck).some((v) =>
                val[v]
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase())
              )
            ) {
              return val;
            }
          })
        }
      />
    </div>
  );
}
