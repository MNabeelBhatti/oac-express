import { db, auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const AddUser = async (data) => {
return  await createUserWithEmailAndPassword(auth, data.email, data.password).then(
    async () => {
      const userRef = doc(collection(db, data.type), auth.currentUser.uid);
      let user = {
        name: data.name,
        email: data.email,
        password: data.password,
        uid: auth.currentUser.uid,
      };
      await setDoc(userRef, user)
        .then(() => {
          sessionStorage.setItem("uid", JSON.stringify(auth.currentUser.uid));
            sessionStorage.setItem("type", JSON.stringify(data.type));
              return {
                status: "success",
                message: "ok",
              };
        })
        .catch((e) => {
            return {
              status: "fail",
              message: e.code,
            };
        });
    }
  );
};
export const FindUser = async (data) => {
  const userQuery = query(
    collection(
      db,
      data.userType
      ),
        where("email", "==", data.userEmail),
      where("password", "==", data.userPassword)
    );
    return new Promise(async(resolve, reject) => {
        let snap = await getDocs(userQuery);
        if (!snap.empty) {     
        await signInWithEmailAndPassword(
          auth,
          data.userEmail,
          data.userPassword
        )
          .then(async () => {
            sessionStorage.setItem("uid", JSON.stringify(auth.currentUser.uid));
            sessionStorage.setItem("type", JSON.stringify(data.userType));
           resolve({
              status: "success",
              message: "ok",
            });
          })
          .catch((e) => {
              reject(
                {
              status: "fail",
              message: e.code,
            }
            ) 
          });
      } else {
        reject( {
          status: "fail",
          message: "user not found in " + data.userType,
        })
      }
     });

};
