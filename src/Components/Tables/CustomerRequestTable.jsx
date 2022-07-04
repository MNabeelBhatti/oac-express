import React, { useState } from "react";
import { Table, Button, Input, Popconfirm, Space, Select } from "antd";

import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import MakeRequestModal from "../Modals/MakeRequestModal";
import useCustomerRequests from "../Hooks/useCustomerRequests";
import { DeleteRequest} from "../API/API";

export default function CustomerRequestTable() {

  const { customerRequests } = useCustomerRequests();
  const [search, setSearch] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "Distance",
      dataIndex: "distance",
      key: "distance",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
              DeleteRequest(record?.uid, record);
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
      <MakeRequestModal
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
          {"Make New Request"}
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
          customerRequests &&
          customerRequests.length > 0 &&
          customerRequests.filter((val) => {
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
          })
        }
      />
    </div>
  );
}
