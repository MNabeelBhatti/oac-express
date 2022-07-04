import React, { useState } from "react";
import { Table, Button, Input, Popconfirm, Space, Select } from "antd";

import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import AddTruckModal from "../Modals/AddTruckModal";
import useTrucks from "../Hooks/useTrucks";
import useDrivers from "../Hooks/useDrivers";
import { DeleteTruck, UpdateTruck } from "../API/API";
export default function TruckManagmentTable() {
  const { Option } = Select;
  const { trucks } = useTrucks();
  const { drivers } = useDrivers();
  const [search, setSearch] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const getFile = (e) => {
  //   console.log("Upload event:", e);

  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  const columns = [
    {
      title: "Model",
      dataIndex: "truckModel",
      key: "truckModel",
    },
    {
      title: "Plate",
      dataIndex: "truckPlate",
      key: "truckplate",
    },
    {
      title: "Type",
      dataIndex: "truckType",
      key: "truckType",
    },
    {
      title: "Capacity",
      dataIndex: "truckCapacity",
      key: "truckCapacity",
    },
    // {
    //   title: "Driver",
    //   // dataIndex: "driver",
    //   // key: "driver",
    //   render: (record) => (
    //     <Space>
    //       <Select
    //         placeholder={"choose driver"}
    //       value={record?.driver?.driverName}
    //         onChange={(e) => {
              
    //           UpdateTruck(record.uid, {
    //             ...record,
    //             driver: drivers[e],
    //             isDriver: true,
    //           });
    //         }}
    //       >
    //         {drivers.length > 0 ? (
    //           drivers
    //             // .filter((val) => val.isTruck === undefined && !val.isTruck)
    //             .map((v, i) => {
    //               return (
    //                 <Option
    //                   selected={
    //                     v.uid === record?.driver &&
    //                     record.driver !== undefined &&
    //                     record.driver.uid
    //                   }
    //                   value={i}
    //                   disabled={v.isTruck !== undefined && v.isTruck}
                      
                      
    //                 >
    //                   {v.driverName}
    //                 </Option>
    //               );
    //             })
    //         ) : (
    //           <Option selected disabled>
    //             No Driver Avaiable
    //           </Option>
    //         )}
    //       </Select>
    //     </Space>
    //   ),
    // },
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
              DeleteTruck(record?.uid);
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
      <AddTruckModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
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
          {"Add Truck"}
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
        dataSource={trucks.filter((val) => {
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
