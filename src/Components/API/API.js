import { db, auth, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { message } from "antd";
export const AddUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
    
      .then(async () => {
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
            resolve({
              status: "success",
              message: "ok",
            });
          })
          .catch((e) => {
            reject({
              status: "fail",
              message: e.code,
            });
          });
      })
      .catch((e) => {
        reject({
          status: "fail",
          message: e.code,
        });
      });
  });
};
export const FindUser = async (data) => {
  const userQuery = query(
    collection(db, data.userType),
    where("email", "==", data.userEmail),
    where("password", "==", data.userPassword)
  );
  return new Promise(async (resolve, reject) => {
    let snap = await getDocs(userQuery);
    if (!snap.empty) {
      await signInWithEmailAndPassword(auth, data.userEmail, data.userPassword)
        .then(async () => {
          sessionStorage.setItem("uid", JSON.stringify(auth.currentUser.uid));
          sessionStorage.setItem("type", JSON.stringify(data.userType));
          resolve({
            status: "success",
            message: "ok",
          });
        })
        .catch((e) => {
          reject({
            status: "fail",
            message: e.code,
          });
        });
    } else {
      reject({
        status: "fail",
        message: "user not found in " + data.userType,
      });
    }
  });
};

export const uploadImage = async (path, file) => {
  const Id = JSON.parse(sessionStorage.getItem("uid"));
  if (file !== "" && file.name && file.name !== undefined) {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, "uploads/" + path + Id + "/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          reject(error);
        },

        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            resolve(url);
          });
        }
      );
    });
  }
};
export const Logout = async () => {
  if (window.confirm("Are you sure?")) {
    await auth
      .signOut()
      .then(() => {
        sessionStorage.clear();
        window.location.replace("/");
      })
      .catch((e) => {
        alert(e);
      });
  }
};
///Owner
export const AddDriver = async (data) => {
  const Id = JSON.parse(sessionStorage.getItem("uid"));
  const Ref = doc(collection(db, "drivers"));
  await setDoc(Ref, { ...data, uid: Ref.id, ownerId: Id });
};
export const UpdateDriver = async (id, data) => {
  let Ref = doc(db, "drivers", id);
  await updateDoc(Ref, data).then(() => {});
};
export const DeleteDriver = async (id, data) => {
  if (data.isTruck) {
    let Ref = doc(db, "trucks", data.truckId);
    await updateDoc(Ref, { isDriver: false, driverId: "" }).then(async () => {
      let Ref = doc(db, "drivers", id);
      await deleteDoc(Ref);
    });
  } else {
    let Ref = doc(db, "drivers", id);
    await deleteDoc(Ref);
  }
};

export const AddTruck = async (data) => {
  const Id = JSON.parse(sessionStorage.getItem("uid"));
  const Ref = doc(collection(db, "trucks"));
  await setDoc(Ref, { ...data, uid: Ref.id, ownerId: Id }).then(async () => {
    // if (data.driver !== "") {
    //   let Ref = doc(db, "drivers", data.driver.uid);
    //   await updateDoc(Ref, { isTruck: true, truckId: data.uid }).then(() => {});
    // }
  });
};
export const UpdateTruck = async (id, data) => {
  let Ref = doc(db, "trucks", id);
  await updateDoc(Ref, data).then(async () => {
    // if (data.driver !== "") {
    //   let Ref = doc(db, "drivers", data.driver.uid);
    //   await updateDoc(Ref, { isTruck: true, truckId: data.uid }).then(() => {});
    // }
  });
};
export const DeleteTruck = async (id, data) => {
  if (data.isDriver) {
    let Ref = doc(db, "drivers", data.driver.uid);
    await updateDoc(Ref, { isTruck: false, truckId: "" }).then(async () => {
      let Ref = doc(db, "trucks", id);
      await deleteDoc(Ref);
    });
  } else {
    let Ref = doc(db, "trucks", id);
    await deleteDoc(Ref);
  }
};
export const MergeTruckDriver = async (data) => {
  const Id = JSON.parse(sessionStorage.getItem("uid"));

  let Ref = doc(collection(db, "transports"));
  await setDoc(Ref, { ...data, uid: Ref.id, ownerId: Id }).then(async () => {
    let Ref = doc(db, "drivers", data.driver.uid);
    await updateDoc(Ref, { isTruck: true, truckId: data.truck.uid }).then(
      async () => {
        let Ref = doc(db, "trucks", data.truck.uid);
        await updateDoc(Ref, { isDriver: true, driverId: data.driver.uid });
      }
    );
  });
};
export const DeleteTruckDriver = async (id, data) => {
  let Ref = doc(db, "drivers", data.driver.uid);
  await updateDoc(Ref, { isTruck: false, truckId: "" })
    .then(async () => {
      let Ref = doc(db, "trucks", data.truck.uid);
      await updateDoc(Ref, { isDriver: false, driverId: "" });
    })
    .then(async () => {
      let Ref = doc(db, "transports", id);
      await deleteDoc(Ref);
    });
};


///Customer


export const AddRequest = async (data) => {
  const Id = JSON.parse(sessionStorage.getItem("uid"));
  const Ref = doc(collection(db, "customer_transport_requests"));
  await setDoc(Ref, { ...data, uid: Ref.id, customerId: Id });
};
// export const UpdateRequests = async (id, data) => {
//   let Ref = doc(db, "drivers", id);
//   await updateDoc(Ref, data).then(() => {});
// };
export const DeleteRequest = async (id, data) => {
 let Ref = doc(db, "customer_transport_requests", id);
 await deleteDoc(Ref);
};