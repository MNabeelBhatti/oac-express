import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
export default function useOwnerRequests() {
  const id = JSON.parse(sessionStorage.getItem("uid"));
  const [ownerRequests, setownerRequests] = useState([]);
  const getOwnerRequests = async () => {
    let q = query(
      collection(db, "customer_transport_requests")
    );
    const unsub = onSnapshot(q, (querySnapShot) => {
      setownerRequests([]);
      if (!querySnapShot.empty) {
        querySnapShot.forEach((val) => {
          // console.log(val.data());
          setownerRequests((prev) => [...prev, val.data()]);
        });
      }
    });

    return () => unsub();
  };
  useEffect(() => {
    getOwnerRequests();
  }, []);

  return { ownerRequests };
}
