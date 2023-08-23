import {FcGoogle} from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import {auth} from "../firebase";
import { getAuth } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OAuth() {

  const navigate = useNavigate();
  // Here we will use Firebase google authentication
  async function onGoogleClick(){
    try{
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      // check for the user
      const docRef = doc(db, "users", user.uid);   // get the doc reference
      const docSnap = await getDoc(docRef);        // get the doc snapshot
  
      if (!docSnap.exists()) {
        await setDoc(docRef, {                   // if the user does not exist, create a new user
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      } 
      navigate("/");
    }
    catch(error){
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <button type="button" 
      onClick={onGoogleClick} 
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
      <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
