import React from 'react';
import CustomerRequestTable from '../../Tables/CustomerRequestTable';
export default function TransportRequets() {
  return (
    <div>
      <div>
        <h3>{"Transport Requests"}</h3>
      </div>
      <div>
        <CustomerRequestTable/>
      </div>
    </div>
  );
}
