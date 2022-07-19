import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot,where, } from "firebase/firestore";
import { db } from "../firebase";
export default function useDrivers() {
  const id = JSON.parse(sessionStorage.getItem("uid"));
  const [drivers, setDrivers] = useState([]);
  const getDrivers = async () => {
    let q = query(collection(db, "drivers"), where("ownerId", "==", id));
    const unsub = onSnapshot(q, (querySnapShot) => {
      setDrivers([]);
    //   console.log(querySnapShot.docChanges((change) => {
    //    console.log(change);
    //  }));
      if (!querySnapShot.empty) {
        querySnapShot.forEach((val) => {
          setDrivers((prev) => [...prev, val.data()]);
        });
      }
    });

    return () => unsub();
  };
  useEffect(() => {
    getDrivers();
  }, []);

  return { drivers };
}
