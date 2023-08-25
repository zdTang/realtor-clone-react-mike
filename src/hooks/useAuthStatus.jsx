import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus() {
  console.log("into useAuthStatus");
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  
 
  const authBefore = getAuth();
    console.log("before into useEffect, auth is:",authBefore);
  useEffect(() => {
    console.log("into useAuthStatus--useEffect Hook");
    const auth = getAuth();
    console.log("into useAuthStatus--useEffect Hook, auth is:",auth);
    // This is from Firebase
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { loggedIn, checkingStatus };
}
