import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
export default function useCustomerRequests() {
  const id = JSON.parse(sessionStorage.getItem("uid"));
  const [transports, setTransports] = useState([]);
  const getTrucks = async () => {
    let q = query(collection(db, "transports"), where("ownerId", "==", id));
    const unsub = onSnapshot(q, (querySnapShot) => {
      setTransports([]);
      if (!querySnapShot.empty) {
        querySnapShot.forEach((val) => {
          setTransports((prev) => [...prev, val.data()]);
        });
      }
    });

    return () => unsub();
  };
  useEffect(() => {
    getTrucks();
  }, []);

  return { transports };
}
