import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
export default function useTransports() {
    const id = JSON.parse(sessionStorage.getItem("uid"));
  const [customerRequests, setcustomerRequests] = useState([]);
  const getcustomerRequests = async () => {
    let q = query(
      collection(db, "customer_transport_requests"),
      where("customerId", "==", id)
    );
      const unsub = onSnapshot(q, (querySnapShot) => {

      setcustomerRequests([]);
      if (!querySnapShot.empty) {
          querySnapShot.forEach((val) => {
            // console.log(val.data());
          setcustomerRequests((prev) => [...prev, val.data()]);
        });
      }
    });

    return () => unsub();
  };
  useEffect(() => {
    getcustomerRequests();
  }, []);

  return { customerRequests };
}
