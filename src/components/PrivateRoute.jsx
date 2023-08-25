import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export default function PrivateRoute() {
  console.log("into PrivateRoute--");
  const { loggedIn, checkingStatus } = useAuthStatus();
  

console.log("loggedIn:",loggedIn);
console.log("checkingStatus:",checkingStatus);
  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
