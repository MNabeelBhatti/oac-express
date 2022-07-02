import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot,where } from "firebase/firestore";
import { db } from "../firebase";
export default function useTrucks() {
  const id = JSON.parse(sessionStorage.getItem("uid"));
  const [trucks, setTrucks] = useState([]);
  const getTrucks= async () => {
    let q = query(
      collection(db, "trucks"),
      where("ownerId", "==",id)
    );
    const unsub = onSnapshot(q, (querySnapShot) => {
      setTrucks([]);
      if (!querySnapShot.empty) {
        querySnapShot.forEach((val) => {
          setTrucks((prev) => [...prev, val.data()]);
        });
      }
    });

    return () => unsub();
  };
  useEffect(() => {
    getTrucks();
  }, []);

  return { trucks };
}
