import {FcGoogle} from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../firebase";
export default function OAuth() {

  
  // Here we will use Firebase google authentication
  function onGoogleClick(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
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
