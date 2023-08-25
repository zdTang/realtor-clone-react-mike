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
      console.log("into onAuthStateChanged, LoggedIn or CheckingStatus will change--");
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);  // [], the useEffect will run only once, after the initial render
  return { loggedIn, checkingStatus };
}
