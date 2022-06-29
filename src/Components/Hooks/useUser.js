import { getDoc,doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useUser() {
  const [user, setUser] = useState({});
  let uid = JSON.parse(sessionStorage.getItem("uid"))||'';
  let type = JSON.parse(sessionStorage.getItem("type"))||"";
  const getUser = async () => {
      let userRef = doc(db, type, uid);
      let snap = await getDoc(userRef);
      if (snap.exists()) {
          setUser(snap.data())
      }
  };

  useEffect(() => {
    getUser();
  }, [uid]);

  return { user };
}
