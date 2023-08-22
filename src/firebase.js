// https://firebase.google.com/docs/auth/web/start

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
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
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore();
export { db, auth };