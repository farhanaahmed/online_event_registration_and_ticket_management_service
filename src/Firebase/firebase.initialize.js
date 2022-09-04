import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
const getDb =() =>{
    const app = initializeApp(firebaseConfig);
    return getFirestore(app);

}
export {initializeAuthentication, getDb};