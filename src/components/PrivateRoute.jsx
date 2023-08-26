import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  console.log("into PrivateRoute--");
  const { loggedIn, checkingStatus } = useAuthStatus();
  

console.log("loggedIn:",loggedIn);
console.log("checkingStatus:",checkingStatus);
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
