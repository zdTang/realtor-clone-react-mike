// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAMw2nz34u5EjdpuNy3iBQzat09ZKlO3M",
  authDomain: "realtor-clone-react-mike.firebaseapp.com",
  projectId: "realtor-clone-react-mike",
  storageBucket: "realtor-clone-react-mike.appspot.com",
  messagingSenderId: "70287329802",
  appId: "1:70287329802:web:b9ef775463470296776df3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();