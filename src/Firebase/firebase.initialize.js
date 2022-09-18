import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { getStorage } from "firebase/storage";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
const getDb =() =>{
    const app = initializeApp(firebaseConfig);
    return getFirestore(app);

}

const getStorageBucket = ()=>{
    const app = initializeApp(firebaseConfig);
    return getStorage(app);
}

export {initializeAuthentication, getDb, getStorageBucket};